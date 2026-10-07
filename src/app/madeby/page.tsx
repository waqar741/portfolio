import { Metadata } from 'next';
import MadeBy from '../../legacy_pages/MadeBy';

export const metadata: Metadata = {
  title: 'Site Credits | Waquar Shaikh',
  description: 'Credits and technology stack used to build the portfolio of Waquar Shaikh, a Web Developer & Software Engineer in Navi Mumbai.',
  alternates: {
    canonical: 'https://www.waquarshaikh.me/madeby',
  },
  openGraph: {
    title: 'Site Credits | Waquar Shaikh',
    description: 'Credits and technology stack used to build this portfolio.',
    url: 'https://www.waquarshaikh.me/madeby',
    type: 'website',
  }
};

export default function Page() {
  return <MadeBy />;
}
