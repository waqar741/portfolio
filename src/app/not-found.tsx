import { Metadata } from 'next';
import NotFoundPage from '../legacy_pages/NotFound';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Waquar Shaikh',
  description: 'The page you are looking for does not exist on Waquar Shaikh\'s portfolio.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function NotFound() {
  return <NotFoundPage />;
}
