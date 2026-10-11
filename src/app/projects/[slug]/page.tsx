import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projects, findProjectBySlug } from '../../../data/projects';
import JsonLd from '../../../components/JsonLd';
import ProjectDetailView from '../../../components/ProjectDetailView';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) return { title: 'Project Not Found' };

  const canonicalUrl = `https://www.waquarshaikh.me/projects/${project.slug}`;

  return {
    title: `${project.title} Case Study | ${project.stack.slice(0, 2).join(' & ')}`,
    description: project.desc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title}: Technical Case Study`,
      description: project.desc,
      url: canonicalUrl,
      type: 'article',
      images: project.image ? [{ url: `https://www.waquarshaikh.me${project.image}` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} Case Study`,
      description: project.desc,
      images: project.image ? [`https://www.waquarshaikh.me${project.image}`] : undefined,
    }
  };
}

export default async function ProjectCaseStudy({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.desc,
    "url": `https://www.waquarshaikh.me/projects/${project.slug}`,
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "author": { 
      "@type": "Person",
      "@id": "https://www.waquarshaikh.me/#person",
      "name": "Waquar Shaikh" 
    },
    "datePublished": project.year,
    ...(project.image ? { "image": `https://www.waquarshaikh.me${project.image}` } : {}),
    ...(project.github && project.github !== "#" ? { "codeRepository": project.github } : {}),
    ...(project.live && project.live !== "#" ? { "installUrl": project.live } : {})
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ProjectDetailView 
        project={project} 
        prevProject={prevProject} 
        nextProject={nextProject} 
      />
    </>
  );
}
