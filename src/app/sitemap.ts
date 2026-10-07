import { MetadataRoute } from 'next';
import { projects } from '../data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.waquarshaikh.me';
  const siteLastModified = new Date('2026-10-07'); 

  const projectUrls = projects.map(project => ({
    url: `${baseUrl}/projects/${project.title.toLowerCase().replace(/[\s-]/g, '-').replace(/[^a-z0-9-]/g, '')}`,
    lastModified: new Date(`${project.year}-01-01`),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: siteLastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls
  ];
}
