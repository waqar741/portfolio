import { Metadata } from 'next';

import JsonLd from '../../components/JsonLd';


import FaqPage from '../../legacy_pages/FaqPage';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about Waquar Shaikh, a software engineer based in Navi Mumbai.',
  alternates: {
    canonical: 'https://www.waquarshaikh.me/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Waquar Shaikh',
    description: 'Answers to common questions about Waquar Shaikh, a software engineer based in Navi Mumbai.',
    url: 'https://www.waquarshaikh.me/faq',
    type: 'website',
  }
};

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Waquar Shaikh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Waquar Shaikh is a Computer Engineering graduate and a full-stack software engineer specializing in high-performance web applications and API development."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does he use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "He builds applications primarily using React.js, Next.js, TypeScript, Python, FastAPI, and PostgreSQL."
        }
      },
      {
        "@type": "Question",
        "name": "Where is he based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "He is based in Navi Mumbai, Maharashtra, India."
        }
      },
      {
        "@type": "Question",
        "name": "What projects has he built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "He has developed over 14 production projects including the ServiceTrack CMMS, FoodSetu, and clinical AI platforms like MeshMind."
        }
      },
      {
        "@type": "Question",
        "name": "Is he available for work and how can I contact him?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, he is actively open to software engineering and frontend roles. You can contact him via shaikhwaquar.dev@gmail.com or through the contact form on the home page."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <FaqPage />
    </>
  );
}
