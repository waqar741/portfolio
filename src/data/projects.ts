export interface Project {
    title: string;
    slug: string;
    year: string;
    tagline: string;
    desc: string;
    stack: string[];
    github: string;
    live: string;
    status: 'Completed' | 'In Progress';
    category: 'Full Stack' | 'Frontend' | 'AI & Systems';
    image?: string;
    role: string;
    overview: string;
    problem: string;
    approach: string;
    features: {
        title: string;
        desc: string;
        status?: 'Implemented' | 'In Development' | 'Planned';
    }[];
    architecture: {
        layer: string;
        details: string;
    }[];
    challenges: {
        challenge: string;
        solution: string;
    }[];
    contributions: string[];
    learnings: string[];
    futureWork?: string[];
}

export const projects: Project[] = [
    {
        title: "FoodSetu",
        slug: "foodsetu",
        year: "2026",
        tagline: "Mobile-first food commerce platform & PWA enabling independent food sellers to operate direct digital storefronts.",
        desc: "An actively developed food commerce platform intended for restaurants and independent food sellers, featuring a mobile-first PWA storefront, multi-tenant menus, and direct ordering.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA", "PostgreSQL", "REST APIs"],
        github: "https://github.com/waqar741",
        live: "https://www.foodsetu.shop/",
        status: "In Progress",
        category: "Full Stack",
        image: "/images/FoodSetu.webp",
        role: "Full Stack Developer",
        overview: "FoodSetu is an actively developed food commerce platform engineered specifically for independent restaurants, home chefs, and local food sellers. By leveraging Progressive Web App (PWA) capabilities, FoodSetu provides a native-app-like ordering experience directly through browser URLs without requiring diners to download heavy native app packages or sellers to sacrifice high commission cuts.",
        problem: "Independent food sellers and neighborhood restaurants face steep aggregator commissions (25% to 35%), restrictive platform control, and high customer friction when trying to launch independent branded applications.",
        approach: "Architecting a multi-tenant platform with a mobile-first PWA storefront. The frontend focuses on instant load times, smooth thumb-zone navigation, and lightweight cart management, backed by relational data schemas in PostgreSQL.",
        features: [
            {
                title: "Mobile-First PWA Storefront",
                desc: "Installable directly to home screens with instant app-like launching, zero app store friction, and responsive touch layouts.",
                status: "Implemented"
            },
            {
                title: "Multi-Tenant Menu & Catalog Architecture",
                desc: "Tenant-specific catalog support allowing restaurants to manage categories, item pricing, dietary tags, and dish availability.",
                status: "Implemented"
            },
            {
                title: "Client-Side Cart & Checkout Flow",
                desc: "Fast in-memory shopping cart with item quantity adjustments, pricing calculation, and delivery option selection.",
                status: "Implemented"
            },
            {
                title: "Tenant Administration & Store Settings",
                desc: "Merchant interface for updating menu items, pricing, and operating status.",
                status: "Implemented"
            },
            {
                title: "Tenant Routing & Slug Resolution",
                desc: "Dynamic URL routing (/store/[tenant-slug]) ensuring each restaurant possesses an isolated digital presence.",
                status: "In Development"
            },
            {
                title: "Role-Based Access Control (RBAC)",
                desc: "Differentiated permissions separating platform administration from tenant store owners.",
                status: "In Development"
            },
            {
                title: "Automated Order Notifications",
                desc: "Direct webhook and messaging notifications for kitchen order alerts.",
                status: "Planned"
            },
            {
                title: "Offline Menu Browsing & Sync",
                desc: "Service worker caching to allow offline menu browsing with queued order actions upon reconnection.",
                status: "Planned"
            }
        ],
        architecture: [
            { layer: "Frontend / Storefront", details: "Next.js App Router, React, TypeScript, and Tailwind CSS configured for PWA installation." },
            { layer: "API & Backend", details: "Modular REST API endpoints handling menu data, tenant profiles, and order payloads." },
            { layer: "Database", details: "PostgreSQL relational schemas with foreign key relationships for tenants, items, categories, and orders." }
        ],
        challenges: [
            {
                challenge: "Ensuring near-instant page loads on low-bandwidth mobile connections without layout shift.",
                solution: "Engineered responsive menu cards with fixed aspect ratios and optimized SVG iconography, minimizing client payload and prioritizing critical render paths."
            },
            {
                challenge: "Architecting clean tenant data separation without creating monolithic database bottlenecks.",
                solution: "Designed tenant-isolated query filters with relational schema indexing, ensuring each restaurant's requests only touch relevant catalog records."
            }
        ],
        contributions: [
            "Designed and built the mobile-first storefront UI with responsive touch controls and cart drawer.",
            "Configured PWA manifest, service worker lifecycle, and install prompt behaviors.",
            "Engineered the relational database schema in PostgreSQL for multi-tenant catalog management.",
            "Implemented REST API endpoints for catalog queries and cart persistence."
        ],
        learnings: [
            "PWAs significantly reduce customer drop-off compared to requiring native app downloads for simple ordering.",
            "Multi-tenant state requires strict boundary validation at both the route level and the database query layer."
        ],
        futureWork: [
            "Complete tenant custom domain mapping.",
            "Integrate secure payment gateway checkout flows.",
            "Implement live kitchen display system (KDS) order status polling."
        ]
    },
    {
        title: "Colors And Waves Media",
        slug: "colors-and-waves-media",
        year: "2026",
        tagline: "Immersive production house web platform featuring interactive 3D graphics and cinematic showreels.",
        desc: "A modern, immersive web application for a Mumbai-based film and video production house. Built with Next.js App Router and features interactive 3D graphics using Three.js and React Three Fiber.",
        stack: ["Next.js", "React", "Three.js", "React Three Fiber", "Tailwind CSS"],
        github: "#",
        live: "https://www.colorsandwavesmedia.com/",
        status: "Completed",
        category: "Frontend",
        image: "/images/ColourAndWaves.webp",
        role: "Frontend Developer",
        overview: "A modern, immersive web platform designed and built for Colors and Waves Media, a film and video production house based in Mumbai. Leverages Next.js App Router alongside Three.js and React Three Fiber to showcase video showreels, cinematic aesthetics, and creative capabilities.",
        problem: "Creative production agencies require high-impact visual presentation that showcases their film reels and visual quality without sacrificing mobile loading performance or frame rates.",
        approach: "Blended modern web design with 3D canvas elements using React Three Fiber, pairing custom shaders with lazy-loaded video showreels and responsive typography.",
        features: [
            {
                title: "Interactive 3D Graphics",
                desc: "3D visual elements powered by Three.js and React Three Fiber reacting to user scroll and cursor interactions.",
                status: "Implemented"
            },
            {
                title: "Cinematic Video Showreel Player",
                desc: "Custom video player modal with responsive controls showcasing studio commercial and film projects.",
                status: "Implemented"
            },
            {
                title: "Brand Story & Production Services",
                desc: "Clean sections presenting pre-production, cinematography, editing, and color grading services.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend Framework", details: "Next.js App Router with TypeScript and React Server Components." },
            { layer: "3D Graphics Engine", details: "Three.js with React Three Fiber and Drei helper utilities." },
            { layer: "Styling", details: "Tailwind CSS with dark cinematic aesthetic and smooth transitions." }
        ],
        challenges: [
            {
                challenge: "Preventing mobile performance drops from WebGL 3D rendering alongside high-resolution video embeds.",
                solution: "Implemented device-aware rendering quality scaling, reducing canvas pixel ratios on mobile devices and pausing WebGL rendering when out of viewport view."
            }
        ],
        contributions: [
            "Developed the responsive Next.js frontend and Three.js canvas integration.",
            "Optimized media loading and video asset delivery for mobile devices.",
            "Implemented sleek dark-mode visual hierarchy aligned with studio branding."
        ],
        learnings: [
            "Integrating 3D elements requires careful lifecycle management to avoid memory leaks on route changes.",
            "Cinematic typography and generous contrast enhance visual storytelling for creative studios."
        ]
    },
    {
        title: "Navi Tech",
        slug: "navi-tech",
        year: "2026",
        tagline: "Digital agency web platform exploring AI-assisted product engineering and rapid frontend assembly.",
        desc: "A comprehensive digital agency platform designed for local businesses, offering custom software development, SEO strategies, chatbots, and web solutions.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        github: "#",
        live: "https://navitechsystem.vercel.app/",
        status: "Completed",
        category: "Frontend",
        image: "/images/NaviTech.webp",
        role: "Full Stack Engineer & Solo Creator",
        overview: "Navi Tech was built end-to-end to explore how quickly modern frontend development and end-to-end product delivery could be accomplished using AI-assisted coding workflows. Initially conceived alongside an exploration into starting a digital agency for local businesses, the engineering project was completed while the business concept was intentionally dropped to focus on core software engineering and scalable backend systems.",
        problem: "Local businesses in regional markets often struggle with fragmented digital presence, outdated legacy websites, and high agency costs. I wanted to build a production-grade showcase platform while testing how modern AI tooling could accelerate the end-to-end development cycle.",
        approach: "Leveraged Next.js App Router and TypeScript to structure a modular component library, using AI-assisted prompt workflows to rapidly scaffold boilerplate UI elements, forms, and service cards, followed by rigorous manual engineering for type safety, design tokens, and performance.",
        features: [
            {
                title: "Digital Agency Service Showcase",
                desc: "Interactive service cards detailing software development, local SEO strategies, AI chatbot integration, and web design.",
                status: "Implemented"
            },
            {
                title: "Lead Generation & Client Inquiries",
                desc: "Integrated inquiry forms and structured communication entry points for prospective local business clients.",
                status: "Implemented"
            },
            {
                title: "Responsive Agency Brand Identity",
                desc: "Dark and light theme support, cohesive typography, and responsive grid layouts tested across mobile and desktop.",
                status: "Implemented"
            },
            {
                title: "Optimized Vercel Deployment",
                desc: "Configured build scripts, automated deployments, and metadata configurations for search engine indexing.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend Framework", details: "Next.js App Router with React Server Components and TypeScript." },
            { layer: "Styling & UI", details: "Tailwind CSS utility tokens, responsive grid layouts, and custom theme variables." },
            { layer: "Hosting & CI/CD", details: "Deployed on Vercel edge infrastructure with automated build pipelines." }
        ],
        challenges: [
            {
                challenge: "Balancing AI-assisted code generation speed with long-term code quality and maintainability.",
                solution: "Established strict TypeScript interfaces and component boundaries upfront. While AI generated initial markup, all state management, CSS layouts, and component structures were manually refactored to eliminate redundant code bloat."
            },
            {
                challenge: "Structuring clear service messaging without relying on generic marketing filler.",
                solution: "Designed concrete service specifications covering technical deliverables (SEO audits, custom portals, web apps) rather than ambiguous marketing buzzwords."
            }
        ],
        contributions: [
            "Architected and developed the complete Next.js codebase end-to-end as a solo developer.",
            "Designed and implemented all responsive UI components, service layouts, and interaction flows.",
            "Benchmarked and evaluated AI-assisted programming workflows across component scaffolding and debugging.",
            "Conducted end-to-end deployment, DNS routing, and production optimization on Vercel."
        ],
        learnings: [
            "AI-assisted workflows dramatically reduce time spent on boilerplate scaffolding, but human architectural judgment is vital for type integrity and component cleanliness.",
            "Validating product ideas through fast technical prototypes provides quick clarity on whether to pursue a business venture or pivot to deeper engineering interests."
        ],
        futureWork: [
            "Archived as a completed rapid-development case study; codebase retained for architectural reference."
        ]
    },
    {
        title: "ServiceTrack",
        slug: "servicetrack",
        year: "2026",
        tagline: "Document Center & Task Management CMMS platform using Google Sheets as a live backend data store.",
        desc: "Task and document management platform using React and Google Sheets as a live backend. Features a synchronized caching layer for real-time accuracy and automated PDF receipt generation.",
        stack: ["React", "Vite", "jsPDF", "Google Sheets API", "Tailwind CSS"],
        github: "https://github.com/waqar741/ServiceTrack",
        live: "https://service-track-seven.vercel.app/",
        status: "Completed",
        category: "Frontend",
        image: "/images/ServiceTrack.webp",
        role: "Sole Developer",
        overview: "ServiceTrack is a complete Document Center and Task Management (CMMS) solution built with React and Vite. It addresses small service business operations by utilizing Google Sheets as a zero-cost, real-time backend data store, coupled with a synchronized client-side caching layer and instant client-side PDF receipt generation.",
        problem: "Small service centers and repair operations need an organized way to track customer work orders, equipment statuses, and receipts, but commercial CMMS software is cost-prohibitive and overly complex.",
        approach: "Coupled React with Google Sheets via secure API endpoints, creating an in-memory caching system that maintains data consistency while generating customer PDF receipts entirely client-side using jsPDF.",
        features: [
            {
                title: "Google Sheets Live Synchronization",
                desc: "Uses Google Sheets as a real-time relational backend, eliminating hosting and database subscription costs.",
                status: "Implemented"
            },
            {
                title: "Synchronized Caching Layer",
                desc: "Intelligent in-memory cache layer preventing API rate limits while keeping task and customer records synchronized.",
                status: "Implemented"
            },
            {
                title: "Automated PDF Receipt Generation",
                desc: "Instant client-side PDF generation via jsPDF with serial numbers, service items, and payment receipts.",
                status: "Implemented"
            },
            {
                title: "Task Lifecycle Management",
                desc: "Status tracking for incoming tasks (Pending, In Progress, Completed) with fast filtering and search.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend UI", details: "React, Vite, and Tailwind CSS for rapid client rendering." },
            { layer: "PDF Generation", details: "jsPDF library running in the browser to compile transaction receipts." },
            { layer: "Data Layer", details: "Google Sheets REST API with synchronized caching to prevent rate-limit throttling." }
        ],
        challenges: [
            {
                challenge: "Google Sheets API rate limits and network latency on repeated data fetches.",
                solution: "Engineered a local caching layer that stores fetched records and only invalidates specific row indices upon confirmed create, update, or delete actions."
            },
            {
                challenge: "Producing consistent, high-fidelity PDF documents across varying device screen sizes.",
                solution: "Implemented fixed-coordinate layout generation in jsPDF, calculating exact millimetric offsets for tables, headers, and signature lines."
            }
        ],
        contributions: [
            "Conceived, designed, and developed the entire application from ground up.",
            "Engineered the Google Sheets integration and custom caching logic.",
            "Designed and implemented the jsPDF template layout and printing pipeline.",
            "Deployed and maintained the live production application on Vercel."
        ],
        learnings: [
            "Google Sheets can serve as an effective serverless database for low-concurrency operational workflows when paired with caching.",
            "Client-side PDF generation reduces server load and delivers immediate feedback to users."
        ]
    },
    {
        title: "Samarth Digital E Seva Kendra",
        slug: "samarth-digital-e-seva-kendra",
        year: "2026",
        tagline: "Local business platform and service catalog digitizing inquiries for a government e-seva center.",
        desc: "Live business website for a government-services center replacing manual inquiries with an online service listing and direct WhatsApp enquiry flows. Implemented technical SEO to improve local search visibility.",
        stack: ["React", "Vite", "Tailwind CSS", "Technical SEO"],
        github: "#",
        live: "https://samarthdigitalseva.vercel.app",
        status: "Completed",
        category: "Frontend",
        image: "/images/SamarthDigital.webp",
        role: "Frontend & Technical SEO Developer",
        overview: "A live business web platform built for Samarth Digital E Seva Kendra, an authorized government-services facilitation center in Navi Mumbai. The application replaced time-consuming physical inquiries with an online catalog of 40+ government schemes and direct WhatsApp enquiry flows, supported by local technical SEO.",
        problem: "Citizens frequently waited in long physical lines simply to ask what documentation was needed for government certificates (caste, income, domicile, voter IDs), resulting in administrative bottlenecks.",
        approach: "Developed an ultra-fast, mobile-first single page application in React with Vite and Tailwind CSS. Structured each service with required documentation checklists and pre-filled WhatsApp action buttons.",
        features: [
            {
                title: "40+ Government Services Catalog",
                desc: "Detailed documentation requirements for Aadhaar updates, PAN cards, domicile, income, and welfare schemes.",
                status: "Implemented"
            },
            {
                title: "Pre-Configured WhatsApp Inquiries",
                desc: "One-tap inquiry triggers that pre-populate the exact service name into WhatsApp messages for instant triage.",
                status: "Implemented"
            },
            {
                title: "Local Search Optimization",
                desc: "Localized on-page SEO targeting Navi Mumbai search queries, driving organic walk-in inquiries.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend UI", details: "React with Vite and Tailwind CSS for instant initial page loading." },
            { layer: "Routing & Actions", details: "Client-side category filtering with WhatsApp deep-link URL protocol integration." }
        ],
        challenges: [
            {
                challenge: "Designing an interface accessible to elderly citizens and non-technical mobile users.",
                solution: "Employed high-contrast typography, clear Marathi and English service names, and prominent touch targets with zero registration requirements."
            }
        ],
        contributions: [
            "Built and deployed the complete website end-to-end.",
            "Organized documentation checklists for over 40 distinct government and citizen services.",
            "Implemented WhatsApp deep-link generation and localized SEO metadata."
        ],
        learnings: [
            "Direct messaging integrations often provide higher conversion rates for hyper-local businesses than complex form submission backends.",
            "Sub-second page speeds significantly improve engagement for users on congested mobile cellular networks."
        ]
    },
    {
        title: "Personal Portfolio",
        slug: "personal-portfolio",
        year: "2026",
        tagline: "High-performance developer portfolio with Next.js App Router, dynamic theming, and SEO/AEO optimization.",
        desc: "Interactive personal portfolio featuring engaging UI animations, dynamic dark mode, and a responsive layout to comprehensively showcase my software engineering projects.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/waqar741/portfolio",
        live: "https://www.waquarshaikh.me/",
        status: "Completed",
        category: "Frontend",
        image: "/images/WaquarPortfolio.webp",
        role: "Sole Developer & Designer",
        overview: "The portfolio platform you are browsing right now. Originally built as a Vite SPA, it was migrated to Next.js App Router to achieve server-side rendering, instant search engine indexability, zero-CLS layout stability, and comprehensive SEO/AEO/GEO optimization. Features an interactive HTML5 particle canvas, seamless dark/light theme switching, and structured JSON-LD schemas.",
        problem: "Engineering portfolios frequently rely on generic templates, lack technical depth, suffer from poor Core Web Vitals, and are invisible to modern answer engines and LLM search agents.",
        approach: "Built with Next.js App Router and TypeScript, implementing an evidence-based dossier structure with detailed case studies, semantic HTML5 tags, Schema.org graph markup, and responsive UI components.",
        features: [
            {
                title: "Next.js App Router Architecture",
                desc: "Server-rendered HTML with static generation for high-speed delivery and Core Web Vitals optimization.",
                status: "Implemented"
            },
            {
                title: "Interactive Canvas Particle Engine",
                desc: "Custom HTML5 Canvas particle system responsive to mouse movement and dark/light color schemes.",
                status: "Implemented"
            },
            {
                title: "Comprehensive SEO, AEO & GEO Markup",
                desc: "Structured Schema.org JSON-LD (Person, ProfilePage, ItemList, SoftwareApplication) and llms.txt.",
                status: "Implemented"
            },
            {
                title: "Dynamic next-themes Integration",
                desc: "Zero-flash dark/light mode toggling with custom CSS variables and Tailwind variant support.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Framework", details: "Next.js App Router with React Server Components and Turbopack compiler." },
            { layer: "Styling & Tokens", details: "Tailwind CSS custom dark variants, glassmorphism blur layers, and CSS keyframe animations." },
            { layer: "SEO & Discoverability", details: "Automated sitemap.xml, robots.txt, OpenGraph card generation, and JSON-LD structured data." }
        ],
        challenges: [
            {
                challenge: "Hydration mismatch issues between server-rendered HTML and client-specific theme / canvas states.",
                solution: "Dynamically imported the canvas engine with ssr: false and implemented mounted state gating for the next-themes provider to guarantee zero hydration errors."
            },
            {
                challenge: "Achieving optimal Core Web Vitals while rendering complex interactive graphics.",
                solution: "Isolated canvas execution outside the main React re-render cycle using requestAnimationFrame and decoupled particle ticks from DOM updates."
            }
        ],
        contributions: [
            "Engineered complete Next.js migration from previous Vite architecture.",
            "Designed and authored all responsive UI components, animations, and typography tokens.",
            "Implemented structured data schemas and technical SEO recommendations.",
            "Created reusable case study layout system and dynamic project routes."
        ],
        learnings: [
            "Evidence-based case studies create significantly stronger technical credibility than simple bullet points.",
            "Decoupling heavy canvas rendering from React state avoids unnecessary component re-renders."
        ]
    },
    {
        title: "MeshMind - AI Platform",
        slug: "meshmind-ai-platform",
        year: "2025",
        tagline: "Distributed clinical assistant platform with 20+ REST APIs, RAG semantic search, and mesh inference.",
        desc: "Modular clinical platform featuring a highly responsive React frontend and a robust FastAPI backend. Designed with user-centric workflows and accessible data visualization to present complex analytical information clearly.",
        stack: ["React", "FastAPI", "Python", "PostgreSQL", "Go", "Caddy", "Tailscale"],
        github: "https://github.com/waqar741/Frontend-HFP",
        live: "https://dev-ai.nomineelife.com/",
        status: "Completed",
        category: "Full Stack",
        image: "/images/hfp.webp",
        role: "AI Engineer Intern at HealthFirstPriority (HFP)",
        overview: "Developed during my Software Engineering Internship at HealthFirstPriority (HFP), MeshMind is a distributed clinical assistant and analytical platform. It features over 20 REST API endpoints, distributed inference using Caddy load balancing and Tailscale VPN mesh networking across multiple AI worker nodes, RAG semantic search, JWT authentication, and real-time streaming summaries.",
        problem: "Clinicians face high cognitive load when parsing lengthy medical records. They need accurate, low-latency AI summaries without risking data privacy or experiencing slow API response bottlenecks.",
        approach: "Engineered a distributed microservice architecture pairing a FastAPI backend with Go middleware, a PostgreSQL database, and a React frontend. Configured Tailscale VPN mesh networking and Caddy reverse proxy to distribute inference across worker nodes.",
        features: [
            {
                title: "Distributed AI Inference Network",
                desc: "Multi-node inference pipeline balanced by Caddy across a secure Tailscale VPN mesh.",
                status: "Implemented"
            },
            {
                title: "Retrieval-Augmented Generation (RAG)",
                desc: "Semantic search and document chunk retrieval over clinical records for evidence-grounded AI responses.",
                status: "Implemented"
            },
            {
                title: "Real-Time Streaming Responses",
                desc: "Server-Sent Events (SSE) streaming delivering conversational output token-by-token directly to the UI.",
                status: "Implemented"
            },
            {
                title: "20+ Validated REST Endpoints",
                desc: "Comprehensive API suite covering authentication, patient context, document ingestion, and analytics.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend Interface", details: "React, Next.js, and TypeScript with real-time stream consumer hooks." },
            { layer: "Backend API & Middleware", details: "FastAPI (Python) and Go middleware for fast request routing and authentication." },
            { layer: "Database", details: "PostgreSQL storing patient records, embeddings, and conversation histories." },
            { layer: "Networking & Mesh", details: "Caddy load balancer and Tailscale zero-trust private mesh connecting distributed inference workers." }
        ],
        challenges: [
            {
                challenge: "High API response latency during heavy clinical document parsing and inference.",
                solution: "Profiled bottlenecks across database queries and Python execution; optimized indexing and refactored distributed endpoints, achieving approximately 30% reduction in API response time."
            },
            {
                challenge: "Ensuring secure, zero-trust communication between geographically distributed inference worker nodes.",
                solution: "Integrated Tailscale VPN mesh to provide end-to-end encrypted node-to-node routing without exposing internal ports to the public internet."
            }
        ],
        contributions: [
            "Built and tested Python backend code across 15+ core features as part of a 4-developer engineering team.",
            "Designed and implemented distributed inference routing with Caddy and Tailscale.",
            "Developed RAG semantic retrieval, JWT authentication, and SSE streaming endpoints.",
            "Collaborated on responsive clinical interface improvements using React."
        ],
        learnings: [
            "Distributed AI systems require robust network telemetry and zero-trust mesh infrastructure to ensure reliability.",
            "Server-Sent Events provide significantly better perceived UX for LLM interactions compared to blocking HTTP requests."
        ]
    },
    {
        title: "TextBook",
        slug: "textbook",
        year: "2026",
        tagline: "PDF library management and offline-first reading platform with student study tracking.",
        desc: "A comprehensive platform bridging PDF Library Management, Offline Reading, and Advanced Student Performance Tracking. Features spatial sticky notes, offline-first sync, role-based access control, and automated PDF/Excel reports.",
        stack: ["Next.js", "React", "Supabase", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/waqar741/TextBook",
        live: "https://textbookpdf.vercel.app/",
        status: "Completed",
        category: "Full Stack",
        role: "Full Stack Developer",
        overview: "TextBook is an academic document and reading management platform designed for students and educators. It unifies cloud PDF storage, offline-first reading capabilities, spatial coordinate-based sticky notes, and student performance tracking into a cohesive web application.",
        problem: "Students frequently lose annotations across disparate PDF reader apps, lack centralized tracking for their revision milestones, and struggle to study when internet access is intermittent.",
        approach: "Engineered a Next.js application backed by Supabase (PostgreSQL and Authentication), incorporating coordinate-anchored note overlays on PDF canvas pages and client caching for offline reading.",
        features: [
            {
                title: "Cloud PDF Library & Categorization",
                desc: "Upload, organize, and search textbooks and research papers with subject tags.",
                status: "Implemented"
            },
            {
                title: "Spatial Coordinate Sticky Notes",
                desc: "Pin annotations directly onto specific PDF page coordinates that persist across viewports.",
                status: "Implemented"
            },
            {
                title: "Offline-First Synchronization",
                desc: "IndexedDB client caching allowing document reading and note creation without active connectivity.",
                status: "Implemented"
            },
            {
                title: "Student Progress Analytics",
                desc: "Reading time logs, chapter completion tracking, and exportable PDF/Excel progress summaries.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend Application", details: "Next.js App Router, TypeScript, Tailwind CSS, and PDF.js canvas rendering." },
            { layer: "Database & Auth", details: "Supabase PostgreSQL with Row Level Security (RLS) and storage buckets for PDF files." }
        ],
        challenges: [
            {
                challenge: "Accurately anchoring sticky notes to dynamic PDF page dimensions across zoom levels and mobile viewports.",
                solution: "Stored annotation coordinates as relative percentages rather than absolute pixels, re-computing screen positions during canvas viewport redraws."
            }
        ],
        contributions: [
            "Designed and built the full-stack Next.js application and Supabase database schema.",
            "Implemented the coordinate-based PDF annotation system using PDF.js.",
            "Engineered the offline caching logic and student analytics export modules."
        ],
        learnings: [
            "Relative coordinate scaling is essential when persisting interactive overlays on variable-zoom document viewers.",
            "Supabase Row Level Security simplifies multi-user document privacy without complex custom middleware."
        ]
    },
    {
        title: "ExamGrid",
        slug: "examgrid",
        year: "2025",
        tagline: "Academic examination administration dashboard for scheduling, attendance, and invigilator rosters.",
        desc: "Comprehensive management dashboard with an intuitive UI for scheduling, attendance, and administration of examination staff. Features responsive design, seamless navigation, and a modern aesthetic built with Tailwind CSS.",
        stack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
        github: "https://github.com/waqar741/ExamGrid",
        live: "https://examgridapp.vercel.app/",
        status: "Completed",
        category: "Full Stack",
        role: "Full Stack Developer",
        overview: "ExamGrid is an examination logistics and staff administration dashboard built for college examination departments. It streamlines scheduling invigilators, assigning exam halls, tracking daily faculty attendance, and generating duty rosters.",
        problem: "University examination committees manage dozens of exam rooms and hundreds of faculty duties using disjointed manual spreadsheets, leading to double-booked invigilators and attendance tracking errors.",
        approach: "Built a responsive Next.js web application connected to Supabase PostgreSQL, incorporating conflict-detection validation when assigning faculty to rooms and shifts.",
        features: [
            {
                title: "Interactive Examination Scheduling Grid",
                desc: "Visual timetable for mapping dates, subjects, session times, and room allocations.",
                status: "Implemented"
            },
            {
                title: "Conflict Detection Engine",
                desc: "Validates teacher allocations in real time, preventing simultaneous duty assignments across different halls.",
                status: "Implemented"
            },
            {
                title: "Staff Attendance Logging",
                desc: "Quick-toggle attendance tracking for reporting duty presence, substitutions, and absences.",
                status: "Implemented"
            },
            {
                title: "Test Account Credentials",
                desc: "Configured public demonstration access (test@gmail.com / password-password) for evaluation.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend UI", details: "Next.js, React, and Tailwind CSS with responsive table and grid components." },
            { layer: "Backend & Database", details: "Supabase PostgreSQL with relational foreign keys linking teachers, shifts, and rooms." }
        ],
        challenges: [
            {
                challenge: "Handling complex date-time overlap queries efficiently without locking database records.",
                solution: "Implemented client-side preemptive conflict checks backed by composite database constraints on teacher and session slots."
            }
        ],
        contributions: [
            "Architected and implemented the full dashboard UI and scheduling grid.",
            "Designed the Supabase relational database schema and security rules.",
            "Built authentication, test credentials, and roster export views."
        ],
        learnings: [
            "Clear administrative tabular interfaces with immediate validation save hours of manual cross-referencing.",
            "Preemptive client-side validation paired with database constraints prevents concurrency conflicts."
        ]
    },
    {
        title: "EchoAI Avatar",
        slug: "echoai-avatar",
        year: "2025",
        tagline: "Voice-driven conversational AI assistant with animated HTML5 Canvas avatar and low-latency SSE.",
        desc: "Engaging AI voice chatbot featuring a custom-designed animated avatar. Focused heavily on micro-interactions and smooth Canvas rendering to create an immersive, low-latency conversational user experience.",
        stack: ["React", "TypeScript", "FastAPI", "Web Speech API", "Server-Sent Events"],
        github: "https://github.com/waqar741/EchoAI",
        live: "https://avatar.nomineelife.com/",
        status: "Completed",
        category: "Frontend",
        role: "Frontend & AI Engineer",
        overview: "EchoAI Avatar is an interactive conversational AI voice assistant featuring a custom-rendered animated avatar on HTML5 Canvas. It integrates voice input, dynamic LLM responses streamed via Server-Sent Events (SSE), and speech synthesis with visual avatar lip-sync animations.",
        problem: "Conversational voice assistants often feel disconnected due to static visual representations and high round-trip latency pauses before voice responses start playing.",
        approach: "Engineered an HTML5 Canvas rendering engine for the avatar's facial expressions, connected to a FastAPI backend streaming LLM tokens via Server-Sent Events with approximately 1 second initial response latency.",
        features: [
            {
                title: "Animated Canvas Avatar Engine",
                desc: "Custom procedural Canvas rendering animating facial micro-expressions and speech lip sync.",
                status: "Implemented"
            },
            {
                title: "Speech-to-Text & Text-to-Speech",
                desc: "Integrated Web Speech API for low-friction voice capture and synthetic audio playback.",
                status: "Implemented"
            },
            {
                title: "Low-Latency SSE Streaming",
                desc: "Server-Sent Events streaming delivering immediate response tokens with ~1s latency.",
                status: "Implemented"
            },
            {
                title: "Reactive State Micro-Interactions",
                desc: "Visual cues indicating listening, thinking, speaking, and idle states.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend Canvas & UI", details: "React, TypeScript, and HTML5 Canvas API with procedural animation ticks." },
            { layer: "Voice Interface", details: "Browser Web Speech API (SpeechRecognition and SpeechSynthesis)." },
            { layer: "Backend Streaming", details: "FastAPI server generating LLM responses streamed via Server-Sent Events (SSE)." }
        ],
        challenges: [
            {
                challenge: "Synchronizing avatar mouth animation frames with speech synthesis audio playback without audio stutter.",
                solution: "Designed a lightweight amplitude estimator tied to the Web Speech utterance boundaries, modulating Canvas mouth geometry smoothly."
            }
        ],
        contributions: [
            "Engineered the procedural HTML5 Canvas avatar renderer and animation state machine.",
            "Implemented the Web Speech API voice capture and playback pipelines.",
            "Integrated FastAPI SSE stream listener in TypeScript for real-time response rendering."
        ],
        learnings: [
            "First-token latency matters more for conversational perceived speed than total generation time.",
            "Procedural 2D canvas animation provides a lightweight alternative to heavy 3D avatar meshes for web browsers."
        ]
    },
    {
        title: "Traxos Finance Tracker",
        slug: "traxos-finance-tracker",
        year: "2024",
        tagline: "Personal finance tracker with interactive data visualization charts and Supabase CRUD workflows.",
        desc: "Sleek personal finance management app with a beautifully crafted dashboard. Features dark mode support, intuitive expense categorization, and interactive data visualization charts tailored for a seamless mobile experience.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
        github: "https://github.com/waqar741/traxos",
        live: "https://traxos.vercel.app/",
        status: "Completed",
        category: "Frontend",
        role: "Full Stack Developer",
        overview: "Traxos is a modern personal finance tracking application built to help users understand their spending patterns. It features secure authentication, categorized income and expense transactions, responsive dashboard data visualization, and complete dark mode support.",
        problem: "Commercial budgeting apps frequently enforce intrusive bank syncing, contain advertisements, or present cluttered interfaces that discourage consistent transaction tracking.",
        approach: "Engineered a clean React application backed by Supabase PostgreSQL, incorporating interactive charts for spending distributions, quick transaction entry, and mobile-first responsive layouts.",
        features: [
            {
                title: "Transaction CRUD Management",
                desc: "Fast creation, editing, and deletion of categorized income and expense records.",
                status: "Implemented"
            },
            {
                title: "Interactive Data Visualization",
                desc: "Visual expense distribution charts showing breakdown across categories and monthly trends.",
                status: "Implemented"
            },
            {
                title: "Secure Supabase Authentication",
                desc: "User account security with Row Level Security isolating individual user records.",
                status: "Implemented"
            },
            {
                title: "Responsive Dark/Light Theme",
                desc: "Thoughtfully styled interface tailored for comfortable mobile and desktop budgeting.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend UI", details: "React, TypeScript, and Tailwind CSS with custom charting components." },
            { layer: "Backend & Database", details: "Supabase (PostgreSQL) with Row Level Security policies and optimized transaction queries." }
        ],
        challenges: [
            {
                challenge: "Optimizing database aggregation queries for monthly and category totals as transaction history grows.",
                solution: "Designed targeted database indexes on user_id and transaction_date columns, calculating aggregate values efficiently."
            }
        ],
        contributions: [
            "Designed and implemented the full frontend dashboard and charting interface.",
            "Structured the Supabase database schema, authentication, and RLS security policies.",
            "Optimized on-page SEO, metadata, and mobile responsive behavior."
        ],
        learnings: [
            "Row Level Security in PostgreSQL ensures bulletproof multi-tenant privacy at the database layer.",
            "Interactive visual charts encourage consistent user engagement with financial data."
        ]
    },
    {
        title: "AI Adaptive Cyber-Honeypot",
        slug: "ai-adaptive-cyber-honeypot",
        year: "2025",
        tagline: "AI-driven cyber deception platform for detecting, analyzing, and logging suspicious network attacks.",
        desc: "An AI-driven deception platform engineered to detect, analyze, and log malicious network activity and attack patterns, simulating vulnerable services with offline LLM-based threat analysis.",
        stack: ["Python", "FastAPI", "PostgreSQL", "Network Monitoring"],
        github: "https://github.com/waqar741",
        live: "#",
        status: "Completed",
        category: "AI & Systems",
        role: "Systems & Security Developer",
        overview: "The AI Adaptive Cyber-Honeypot is an intelligent network deception platform designed to detect, capture, and analyze suspicious intrusion attempts. By simulating authentic service endpoints and analyzing captured payloads with offline LLM scripts, the system isolates attacker behavior and generates structured intrusion intelligence.",
        problem: "Static firewalls and passive signature matching struggle to detect zero-day probing patterns and automated credential-stuffing scanners before they identify vulnerabilities in production networks.",
        approach: "Engineered synthetic service listening layers in Python that capture connection attempts, log session commands into PostgreSQL, and run automated analysis to classify attack vectors.",
        features: [
            {
                title: "Synthetic Service Emulation",
                desc: "Simulates common network ports and services to attract and detain automated malicious scanners.",
                status: "Implemented"
            },
            {
                title: "Network Activity Logging",
                desc: "Captures IP origin, timestamp, command payloads, and connection protocols into structured PostgreSQL tables.",
                status: "Implemented"
            },
            {
                title: "Offline LLM Threat Classification",
                desc: "Evaluates captured shell commands and payload sequences to classify threat severity and intent.",
                status: "Implemented"
            },
            {
                title: "Analytical Reporting Dashboard",
                desc: "Filters and queries monitoring datasets to highlight repeated intrusion attempts and anomalous traffic.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Capture Engine", details: "Python network socket listeners emulating vulnerable service interaction responses." },
            { layer: "Storage Layer", details: "PostgreSQL database storing raw session telemetry, IP headers, and attack traces." },
            { layer: "Analysis Pipeline", details: "Python threat classification scripts evaluating attacker payloads." }
        ],
        challenges: [
            {
                challenge: "Ensuring the honeypot capture environment remains isolated and cannot be leveraged for pivoting into internal hosts.",
                solution: "Confined listening sockets to sandboxed network namespaces with zero outbound routing capabilities."
            }
        ],
        contributions: [
            "Architected the Python network listeners and socket handling logic.",
            "Designed the PostgreSQL telemetry schema and query mechanisms for intrusion analysis.",
            "Implemented offline LLM threat analysis scripts to classify attack patterns."
        ],
        learnings: [
            "Deception technology provides invaluable early-warning telemetry on automated scanning tools.",
            "Structured database logging enables effective pattern recognition across distributed network probes."
        ]
    },
    {
        title: "Railway Concession System",
        slug: "railway-concession-system",
        year: "2024",
        tagline: "Digital workflow platform automating university railway concession applications and admin approvals.",
        desc: "Digitized railway concession workflow prioritizing accessibility and ease of use. Implemented a clean, user-friendly interface for digital verification and admin approval processes, minimizing friction for users.",
        stack: ["HTML", "CSS", "JavaScript", "Firebase"],
        github: "https://github.com/waqar741/railway-concession-portal",
        live: "https://railwayconcession.vercel.app/",
        status: "Completed",
        category: "Full Stack",
        role: "Full Stack Developer",
        overview: "A web-based concession management portal designed for college students to request subsidized railway travel passes. It replaced manual paper submissions and long queues with a streamlined digital verification and administrative approval workflow.",
        problem: "Thousands of students stood in physical administrative queues each semester with paper application forms, burdening office staff with manual document checks and slow certificate issuance.",
        approach: "Built a responsive web application using JavaScript and Firebase Authentication/Firestore, providing dedicated portals for student submissions and administrative approval processing.",
        features: [
            {
                title: "Digital Concession Request Submission",
                desc: "Students submit pass requirements, route details, and verify ID documents online.",
                status: "Implemented"
            },
            {
                title: "Admin Approval & Verification Dashboard",
                desc: "Administrative staff verify student eligibility and update pass status in real time.",
                status: "Implemented"
            },
            {
                title: "Status Tracking Pipeline",
                desc: "Real-time visibility into application progress (Submitted, Under Review, Approved, Ready for Collection).",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend UI", details: "HTML5, CSS3, and modern Vanilla JavaScript with responsive layouts." },
            { layer: "Backend & Auth", details: "Firebase Authentication and Cloud Firestore for real-time document storage." }
        ],
        challenges: [
            {
                challenge: "Preventing students from submitting overlapping duplicate concession applications.",
                solution: "Implemented Firestore query constraints validating existing active pass expiry dates before allowing new submissions."
            }
        ],
        contributions: [
            "Developed the student application and administrative review portals.",
            "Configured Firebase authentication and Firestore database security rules.",
            "Reduced manual administrative processing time for college concession workflows."
        ],
        learnings: [
            "Digitizing paper-based bureaucratic workflows delivers immense time savings for both administrators and end users.",
            "Clear status indicators eliminate anxiety and repetitive inquiry visits for users."
        ]
    },
    {
        title: "Tech Rental Platform",
        slug: "tech-rental-platform",
        year: "2023",
        tagline: "Marketplace web platform for renting electronics and tech gadgets with structured catalogs.",
        desc: "Modern marketplace for renting tech gadgets with a focus on product discovery and clean typography. Built a responsive catalog and streamlined checkout process using React and Firebase.",
        stack: ["React", "Express", "Firebase"],
        github: "https://github.com/waqar741",
        live: "https://gadget-rental-4314b.web.app/",
        status: "Completed",
        category: "Full Stack",
        role: "Full Stack Developer",
        overview: "A responsive gadget rental marketplace designed to allow users to rent consumer electronics, camera gear, and hardware. Focuses on intuitive product discovery, rental duration calculations, and clean checkout workflows.",
        problem: "Purchasing expensive creative tech equipment for short-term projects is economically inefficient, yet rental platforms often feature clunky booking flows with unclear pricing.",
        approach: "Engineered a React frontend backed by Express and Firebase, implementing clear rental duration tiers, item filtering by category, and responsive cart review.",
        features: [
            {
                title: "Gadget Catalog & Filtering",
                desc: "Browse products by category (cameras, drones, gaming, audio) with price and spec overviews.",
                status: "Implemented"
            },
            {
                title: "Rental Duration Pricing Calculator",
                desc: "Dynamic daily and weekly rental cost calculation based on selected rental duration.",
                status: "Implemented"
            },
            {
                title: "Streamlined Booking Inquiries",
                desc: "Cart review and rental order submission with customer contact verification.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Frontend", details: "React with modular CSS components and responsive grid layouts." },
            { layer: "Backend & Database", details: "Express API with Firebase Firestore for product listings and reservation logs." }
        ],
        challenges: [
            {
                challenge: "Accurately calculating tiered rental pricing across variable dates.",
                solution: "Created reusable utility calculations that apply discounts as rental days exceed threshold durations."
            }
        ],
        contributions: [
            "Built the catalog browsing and cart checkout flows in React.",
            "Integrated Firebase Firestore for dynamic product inventory management.",
            "Deployed and configured hosting on Firebase Hosting."
        ],
        learnings: [
            "Transparent pricing and clear rental terms are paramount in electronics rental e-commerce.",
            "Component reusability simplifies catalog expansion and feature iteration."
        ]
    },
    {
        title: "SmartNote",
        slug: "smartnote",
        year: "2022",
        tagline: "Minimalist, distraction-free web note-taking application with instant local persistence.",
        desc: "Minimalist web-based tool for efficient note-taking. Designed with a distraction-free interface and thoughtful typography to capture ideas effortlessly and organize tasks with high visual clarity.",
        stack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        github: "https://github.com/waqar741/notess",
        live: "https://smartnote.vercel.app/",
        status: "Completed",
        category: "Frontend",
        role: "Sole Developer",
        overview: "SmartNote is an ultra-minimalist web-based note-taking application created to provide a distraction-free environment for quick thought capture. Built entirely with vanilla web technologies, it emphasizes speed, typography, and zero-friction persistence.",
        problem: "Heavyweight note-taking tools require sign-ins, load slowly, and overwhelm users with unnecessary formatting bars when all that is needed is immediate idea capture.",
        approach: "Built a zero-dependency web application using HTML5, CSS3, and JavaScript, leveraging browser LocalStorage for instantaneous, private offline persistence.",
        features: [
            {
                title: "Distraction-Free Text Workspace",
                desc: "Clean canvas with deliberate typographic hierarchy optimized for writing and reading clarity.",
                status: "Implemented"
            },
            {
                title: "Automatic LocalStorage Persistence",
                desc: "Notes save automatically as the user types, preserving content across browser restarts.",
                status: "Implemented"
            },
            {
                title: "Instant Search & Note Organization",
                desc: "Quick search and delete operations running entirely in the client with zero network latency.",
                status: "Implemented"
            }
        ],
        architecture: [
            { layer: "Core UI", details: "Semantic HTML5 and CSS3 with custom responsive styling." },
            { layer: "Logic & Storage", details: "Vanilla JavaScript utilizing the browser LocalStorage API." }
        ],
        challenges: [
            {
                challenge: "Preventing lag and unnecessary writes during rapid typing.",
                solution: "Implemented an input debouncing handler that batches LocalStorage write operations."
            }
        ],
        contributions: [
            "Designed and programmed the entire lightweight application from scratch.",
            "Implemented debounced autosave logic using native browser APIs.",
            "Deployed the application on Vercel."
        ],
        learnings: [
            "Vanilla JavaScript remains unmatched for zero-dependency, ultra-fast utilities.",
            "Removing unnecessary features often creates a vastly superior user experience."
        ]
    }
];

export function getProjectSlug(project: Project): string {
    return project.slug;
}

export function findProjectBySlug(slug: string): Project | undefined {
    if (!slug) return undefined;
    const normalized = slug.toLowerCase();
    return projects.find((p) => {
        if (p.slug.toLowerCase() === normalized) return true;
        const legacySlug1 = p.title.toLowerCase().replace(/[\s-]/g, '-').replace(/[^a-z0-9-]/g, '');
        if (legacySlug1 === normalized) return true;
        const legacySlug2 = p.title.toLowerCase().replace(/[\s-]+/g, '-').replace(/[^a-z0-9-]/g, '');
        if (legacySlug2 === normalized) return true;
        return false;
    });
}
