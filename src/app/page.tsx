import Portfolio from "../Portfolio";
import JsonLd from "../components/JsonLd";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.waquarshaikh.me/#website",
        "url": "https://www.waquarshaikh.me/",
        "name": "Waquar Shaikh",
        "inLanguage": "en-IN",
        "publisher": {
          "@id": "https://www.waquarshaikh.me/#person"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://www.waquarshaikh.me/#webpage",
        "url": "https://www.waquarshaikh.me/",
        "name": "Waquar Shaikh | Web Developer in Navi Mumbai",
        "mainEntity": {
          "@id": "https://www.waquarshaikh.me/#person"
        },
        "dateCreated": "2026-01-01T00:00:00Z",
        "dateModified": "2026-10-07T00:00:00Z"
      },
      {
        "@type": "Person",
        "@id": "https://www.waquarshaikh.me/#person",
        "name": "Waquar Shaikh",
        "alternateName": "Waquar Ahmed Shaikh",
        "url": "https://www.waquarshaikh.me/",
        "image": "https://www.waquarshaikh.me/images/waquar-ahmed-shaikh-profile.webp",
        "jobTitle": "Software Engineer",
        "description": "Computer Engineering graduate specializing in high-performance web architecture using React.js, Next.js, TypeScript, and Python.",
        "email": "mailto:shaikhwaquar.dev@gmail.com",
        "sameAs": [
          "https://github.com/waqar741",
          "https://www.linkedin.com/in/shaikh-waquar"
        ],
        "knowsAbout": [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Framer Motion",
          "Node.js",
          "Express",
          "Python",
          "Django",
          "FastAPI",
          "PostgreSQL",
          "SQLite",
          "Supabase",
          "Vercel",
          "DigitalOcean",
          "AI/LLM API integrations",
          "Git/GitHub"
        ],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Terna Engineering College"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Navi Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
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
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Frontend Web UI Frameworks and Tools",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Coursera"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Advanced React and Next.js"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Full Stack Web Development"
          }
        ]
      }
    ]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Portfolio />
    </>
  );
}
