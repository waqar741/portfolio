import { Metadata } from 'next';
import ProjectsPage from '../../legacy_pages/ProjectsPage';
import JsonLd from '../../components/JsonLd';
import { projects } from '../../data/projects';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description: 'Explore the full-stack web development projects, AI integrations, and case studies built by Waquar Shaikh, a software engineer based in Navi Mumbai.',
  alternates: {
    canonical: 'https://www.waquarshaikh.me/projects',
  },
  openGraph: {
    title: 'Projects & Case Studies',
    description: 'Explore the full-stack web development projects and case studies built by Waquar Shaikh.',
    url: 'https://www.waquarshaikh.me/projects',
    type: 'website',
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.waquarshaikh.me/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://www.waquarshaikh.me/projects"
          }
        ]
      },
      {
        "@type": "ItemList",
        "itemListElement": projects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://www.waquarshaikh.me/projects/${project.title.toLowerCase().replace(/[\s-]/g, '-').replace(/[^a-z0-9-]/g, '')}`
        }))
      }
    ]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ProjectsPage />
    </>
  );
}
