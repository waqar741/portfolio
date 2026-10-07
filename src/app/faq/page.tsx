import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import { ArrowLeft } from 'lucide-react';

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
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <JsonLd data={jsonLd} />
      
      <Link href="/" className="inline-flex items-center text-gray-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Link>

      <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
              <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
              <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4"></div>
          </div>
          <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-bold mb-2">Who is Waquar Shaikh?</h2>
                  <p className="text-gray-700 dark:text-gray-300">Waquar Shaikh is a Computer Engineering graduate and a full-stack software engineer specializing in high-performance web applications and API development.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-bold mb-2">What technologies does he use?</h2>
                  <p className="text-gray-700 dark:text-gray-300">He builds applications primarily using React.js, Next.js, TypeScript, Python, FastAPI, and PostgreSQL.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-bold mb-2">Where is he based?</h2>
                  <p className="text-gray-700 dark:text-gray-300">He is based in Navi Mumbai, Maharashtra, India.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-bold mb-2">What projects has he built?</h2>
                  <p className="text-gray-700 dark:text-gray-300">He has developed over 14 production projects including the ServiceTrack CMMS, FoodSetu, and clinical AI platforms like MeshMind.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-bold mb-2">Is he available for work and how can I contact him?</h2>
                  <p className="text-gray-700 dark:text-gray-300">Yes, he is actively open to software engineering and frontend roles. You can contact him via shaikhwaquar.dev@gmail.com or through the <Link href="/#contact" className="text-blue-500 hover:underline">contact form on the home page</Link>.</p>
              </div>
          </div>
      </section>
    </main>
  );
}
