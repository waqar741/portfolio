import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../../data/projects';
import JsonLd from '../../../components/JsonLd';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/[\s-]/g, '-').replace(/[^a-z0-9-]/g, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/[\s-]/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} Case Study | ${project.stack[0]}`,
    description: project.desc,
    alternates: {
      canonical: `https://www.waquarshaikh.me/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.desc,
      url: `https://www.waquarshaikh.me/projects/${slug}`,
      type: 'article',
      images: project.image ? [{ url: `https://www.waquarshaikh.me${project.image}` }] : undefined,
    },
  };
}

export default async function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/[\s-]/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );

  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.desc,
    "url": `https://www.waquarshaikh.me/projects/${slug}`,
    "applicationCategory": "WebApplication",
    "author": { "@id": "https://www.waquarshaikh.me/#person" },
    "datePublished": project.year,
    "image": project.image ? `https://www.waquarshaikh.me${project.image}` : undefined,
    ...(project.github && project.github !== "#" ? { "codeRepository": project.github } : {})
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <JsonLd data={jsonLd} />
      
      <Link href="/projects" className="inline-flex items-center text-gray-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to all projects
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{project.title}: Case Study</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>
        </header>

        {project.image && (
          <div className="mb-12 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 relative w-full h-[400px]">
            <Image 
              src={project.image} 
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-contain"
            />
          </div>
        )}

        <div className="space-y-12 text-lg text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Project Overview</h2>
            <p className="leading-relaxed">{project.desc}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">The Architecture & Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Links</h2>
            <div className="flex gap-4">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity">
                Live Demo <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              {project.github && project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-black dark:text-white">
                  Source Code <Github className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-800" />

          <section className="text-center py-8">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Looking for a Software Engineer?</h2>
            <Link href="/#contact" className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity">
              Discuss a freelance project
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
