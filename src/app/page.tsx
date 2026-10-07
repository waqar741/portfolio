import Portfolio from "../Portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://www.waquarshaikh.me/#webpage",
        "url": "https://www.waquarshaikh.me/",
        "name": "Waquar Shaikh - Web Developer Navi Mumbai",
        "mainEntity": {
          "@id": "https://www.waquarshaikh.me/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.waquarshaikh.me/#person",
        "name": "Waquar Shaikh",
        "url": "https://www.waquarshaikh.me/",
        "jobTitle": "Web Developer & Software Engineer",
        "description": "Computer Engineering graduate and full-stack web developer specializing in Next.js, React, and Python, based in Navi Mumbai.",
        "sameAs": [
          "https://github.com/waqar741",
          "https://www.linkedin.com/in/waquar-shaikh"
        ],
        "knowsAbout": [
          "React.js",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "PostgreSQL",
          "Tailwind CSS",
          "FastAPI",
          "Django",
          "Generative AI Integrations"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom React & Next.js Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full-Stack Web Application Development"
              }
            }
          ]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Navi Mumbai",
            "sameAs": "https://en.wikipedia.org/wiki/Navi_Mumbai"
          },
          {
            "@type": "City",
            "name": "Mumbai",
            "sameAs": "https://en.wikipedia.org/wiki/Mumbai"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Portfolio />
    </>
  );
}
