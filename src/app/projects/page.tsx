import { Metadata } from 'next';
import ProjectsPage from '../../legacy_pages/ProjectsPage';

export const metadata: Metadata = {
  title: 'Portfolio Projects | Waquar Shaikh',
  description: 'Explore the full-stack web development projects, AI integrations, and case studies built by Waquar Shaikh, a software engineer based in Navi Mumbai.',
  alternates: {
    canonical: 'https://www.waquarshaikh.me/projects',
  },
  openGraph: {
    title: 'Portfolio Projects | Waquar Shaikh',
    description: 'Explore the full-stack web development projects and case studies built by Waquar Shaikh.',
    url: 'https://www.waquarshaikh.me/projects',
    type: 'website',
  }
};

export default function Page() {
  return <ProjectsPage />;
}
