# Antigravity Prompt: SEO + AEO + GEO Implementation for Developer Portfolio

Copy everything below the line into Antigravity.

---

## ROLE

You are a senior Next.js (App Router) engineer and technical SEO specialist. Implement a complete SEO, AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) upgrade on my existing developer portfolio, **waquarshaikh.me**. Work in phases, verify each phase builds, and keep every change reviewable.

## SITE FACTS (single source of truth, never contradict these)

- Name: **Waquar Shaikh**
- Domain (canonical): `https://www.waquarshaikh.me`
- Title: Freelance Web Developer & Software Engineer
- Location: Navi Mumbai, Maharashtra, India (no physical storefront, no Google Business Profile)
- Background: Computer Engineering graduate
- Stack: React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion, Node.js, Express, Python, Django, FastAPI, PostgreSQL, SQLite, Supabase, Vercel, DigitalOcean, AI/LLM API integrations, Git/GitHub
- Projects: FoodSetu, ServiceTrack (CMMS), Samarth Digital, Traxos Finance, AI Adaptive Honeypot
- Profiles: GitHub `https://github.com/waqar741`, LinkedIn `https://www.linkedin.com/in/waquar-shaikh`
- Service area: Navi Mumbai and Mumbai (use `areaServed`, never a fake address)

## NON-NEGOTIABLE RULES

1. **No fabrication.** Do not invent metrics, clients, testimonials, years of experience, revenue, certifications, or features. Anywhere a real number or fact is needed and I have not supplied it, insert a visible `TODO(waquar): ...` marker in code comments and list it in the final report. Before writing any project copy, read the actual project repos/README/data in this codebase and base the text on what is really there. If a claim in my template text (for example "zero-downtime", "multi-tenant", "transactional integrity") cannot be verified from the code, soften or remove it.
2. **No keyword stuffing, no doorway pages.** One homepage plus one `/services` page mention Navi Mumbai/Mumbai naturally. Never create per-neighbourhood pages (Vashi, Nerul, Panvel, etc.).
3. **No LocalBusiness / Organization / fake address schema.** Use `ProfilePage` + `Person` only (plus the page-specific types listed below).
4. **Do not break existing design, routes, or functionality.** Preserve the current visual style. If a route must change, add a redirect in `next.config`.
5. **Server-render everything indexable.** Use Server Components by default; add `"use client"` only for genuinely interactive leaves (animations, forms).
6. Authoritative, definitive tone. Remove hedging and marketing fluff such as "passionate about building cutting-edge experiences".

## PHASE 0: DISCOVERY (do this first, report before changing code)

- Inspect the repo: Next.js version, App Router vs Pages Router, existing `layout.tsx`, metadata, routes, how projects are stored (array, MDX, CMS, DB), image usage, fonts, analytics, and any `"use client"` pages that block server rendering.
- Output a short findings list and a plan. If the project is on the Pages Router, adapt every instruction below to the equivalent (`next/head`, `getStaticProps`, `public/robots.txt`, `next-sitemap`).

## PHASE 1: TECHNICAL FOUNDATION

1. **`metadataBase`** set to `https://www.waquarshaikh.me` in the root layout. Add `title.template` (`%s | Waquar Shaikh`), default title, description, `alternates.canonical`, `openGraph` (type `website`, `locale: en_IN`, siteName), `twitter` (`summary_large_image`), `robots` (index, follow, max-image-preview large, max-snippet -1), `authors`, `creator`, `keywords` (light, natural, not required).
2. `<html lang="en-IN">`.
3. **`app/robots.ts`**:
   - Allow `/` for all crawlers.
   - Disallow only `/api/`, `/admin/`, `/preview/`.
   - **Do NOT disallow `/_next/`** (Google needs its CSS/JS to render the page; the audit's suggestion to block it is wrong).
   - Add explicit `allow` rules for AI crawlers: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`. Put the list in one constant so I can flip any of them to disallow later.
   - `sitemap: https://www.waquarshaikh.me/sitemap.xml` and `host`.
4. **`app/sitemap.ts`**: dynamic, includes `/`, `/about`, `/projects`, `/services`, `/contact`, `/blog` (if it exists), and every project and blog slug generated from the real data source. `lastModified` from real data (file mtime, frontmatter date, or build date), not `new Date()` on every request for static pages. Set sensible `changeFrequency` and `priority`.
5. **Canonical + host consistency**: redirect apex `waquarshaikh.me` to `www` (or the reverse, but match `metadataBase`). Pick one trailing-slash policy and enforce it in `next.config`.
6. **Per-page metadata** via `generateMetadata` on every route, with unique title, description, canonical, and OG/Twitter data:

| Route | Title | Description |
| --- | --- | --- |
| `/` | Waquar Shaikh \| Freelance Web Developer in Navi Mumbai | Computer Engineer and full-stack developer in Navi Mumbai. Specializing in Next.js, React, and Python to build high-performance web applications. |
| `/about` | About Waquar Shaikh \| Software Engineer in Mumbai | Learn about Waquar Shaikh's background in Computer Engineering, technical stack (React, Django, Node.js), and full-stack engineering approach. |
| `/projects` | Web Development Portfolio & Case Studies | Explore technical case studies by Waquar Shaikh, featuring live web applications like FoodSetu, ServiceTrack, and AI Adaptive Honeypots. |
| `/projects/[slug]` | `<Project name> Case Study` + short stack descriptor | Generated from real project data (max about 155 chars). |

   Keep titles at or under 60 characters and descriptions at or under 155. Use the plain ASCII `|` character, not `│`.
7. **Dynamic OG images**: `opengraph-image.tsx` for the root and for `/projects/[slug]` (project name, stack chips, brand colours, consistent with the site design). Add `twitter-image` equivalents or reuse OG.
8. **Icons**: `icon`, `apple-icon`, `manifest.ts` (name, short_name, theme_color).
9. **Security and performance headers** in `next.config` (X-Content-Type-Options, Referrer-Policy, X-Frame-Options or CSP frame-ancestors, Permissions-Policy). Enable compression. Keep it non-breaking.

## PHASE 2: STRUCTURED DATA (JSON-LD)

Create a reusable `<JsonLd data={...} />` server component. **Escape `<` as `\u003c`** in the serialized JSON to prevent script-injection. Render in the body or head of the relevant page.

1. **Homepage `@graph`**: `WebSite` (with `@id`, `url`, `name`, `inLanguage: en-IN`, `publisher` referencing the Person), `ProfilePage` (`@id #webpage`, `mainEntity` → `#person`, plus `dateCreated` and `dateModified` in ISO 8601 as Google recommends), and `Person` (`@id #person`) with: `name`, `url`, `jobTitle`, `description`, `image` (a real headshot if one exists; else TODO), `sameAs` (GitHub, LinkedIn, and any other real profiles in the codebase), `knowsAbout` (the stack list), `alumniOf` (only with real institution data from the site; else TODO), `address` limited to `addressLocality: Navi Mumbai, addressRegion: Maharashtra, addressCountry: IN` (no street address), `areaServed` (City: Navi Mumbai, Mumbai with Wikipedia `sameAs`), and `hasOfferCatalog` listing the services that actually appear on `/services`.
2. **`BreadcrumbList`** on `/about`, `/projects`, `/projects/[slug]`, `/blog/[slug]`.
3. **Project pages**: `CreativeWork` or `SoftwareApplication` (use `SoftwareSourceCode` only if a public repo exists) with `name`, `description`, `url`, `author` → `#person`, `codeRepository`, `programmingLanguage`, `applicationCategory`, `dateCreated`/`dateModified` if known, and `image`.
4. **Blog posts** (if blog exists): `BlogPosting` with `headline`, `datePublished`, `dateModified`, `author` → `#person`, `image`, `mainEntityOfPage`.
5. **FAQ**: if a visible FAQ section is added (see Phase 3), add matching `FAQPage` JSON-LD. The JSON-LD text must exactly match the visible text.
6. Validate that all `@id` references resolve and nothing in JSON-LD is absent from visible page content.

## PHASE 3: CONTENT AND INFORMATION ARCHITECTURE (AEO + GEO)

Use the following copy as the starting point, then **fact-check it against the repo** and adjust.

**Homepage**
- `H1`: Freelance Web Developer & Software Engineer in Navi Mumbai
- Sub-headline: Computer Engineering graduate specializing in high-performance web architecture using React.js, Next.js, TypeScript, and Python.
- Primary CTA: **View Project Case Studies** → `/projects`. Secondary CTA: **Contact for Freelance Opportunities** → `/contact`.
- `H2` Engineered for Scalability and Performance: a 2 to 3 sentence direct-answer summary (inverted pyramid: who, what, where, stack, for whom).
- `H2` Core Technologies: grouped lists (Frontend, Backend, Database & Cloud, System Integrations) using exactly the stack in SITE FACTS, each item linking out (normal dofollow) to official docs where natural.
- `H2` Selected Engineering Projects: cards linking to each `/projects/[slug]` with descriptive anchor text (for example "View the FoodSetu API architecture", "Explore the ServiceTrack CMMS").
- `H2` Web Development Services in Navi Mumbai & Mumbai: short paragraph, link to `/services`.
- **Quick facts block** near the top (a semantic `<dl>`): Role, Location, Primary stack, Availability for freelance, Contact. LLMs extract these easily.
- **`H2` FAQ (visible, 5 to 6 items)**, answers in 1 to 3 direct sentences each, based only on true facts, for example: *Who is Waquar Shaikh? What technologies does Waquar Shaikh use? Does Waquar take freelance projects in Navi Mumbai and Mumbai? What projects has Waquar built? How can I contact Waquar?*

**About (`/about`)**
- `H1`: Bridging Computer Engineering with Modern Web Development, followed by Technical Philosophy and Professional Focus sections (draft from the audit, but remove any claim you cannot verify).
- Add an education and timeline section only with real data; otherwise leave TODO.

**Services (`/services`) (NEW, single page, not per-city)**
- Services actually offered (for example Custom React & Next.js Development, Full-Stack Web Application Development, REST API and backend development, AI/LLM integration). One short section per service with deliverables and typical stack. Mention Navi Mumbai/Mumbai once or twice naturally. Link each service to a relevant case study. Keep these in sync with `hasOfferCatalog`.

**Projects (`/projects` and `/projects/[slug]`)**
- Convert the single project list into **indexable routes** (`generateStaticParams`) for: `foodsetu`, `servicetrack`, `samarth-digital`, `traxos-finance`, `ai-adaptive-honeypot`.
- Each case study uses this structure: `H1` "Case Study: {Name}", `H2` Project Overview (direct answer first), `H2` The Architecture & Technology Stack, `H2` Implementation & Technical Challenges, `H2` Results (**only real, verifiable numbers**, else TODO), `H2` What I'd Improve Next, links to Live Demo and GitHub repo, outbound links to official docs of the main technologies, a related-projects block, and a CTA "Discuss a freelance project" → `/contact`.
- Add a "Last updated" date.

**Contact (`/contact`)**
- Frictionless mailto link plus a simple form (with server action or API route, validation, spam protection such as a honeypot field, and a success state). Link LinkedIn and GitHub. Make sure this is reachable from the header and footer.

**Blog (optional but recommended; build the scaffolding using MDX or the existing content system)**
- `/blog` and `/blog/[slug]` with frontmatter (title, description, date, updated, tags), RSS at `/rss.xml`, and `BlogPosting` schema. Create **drafts only** (do not publish) for: *Deploying Next.js App Router with Supabase to Vercel*, *Optimizing INP and LCP in React Applications*, *Managing Relational Data with PostgreSQL in Node.js*, *Building FoodSetu: REST API Integration Lessons*, *Architecting an AI Adaptive Honeypot with Python*. Each draft is an outline with real section headings and TODO markers for real details; I will write the final text.

**Internal linking**: Home → each project; About → `/projects`; every project → `/contact` and to related projects; footer sitemap-style links to all main pages; breadcrumbs on deep pages. Use descriptive anchor text, never "click here".

**GEO content rules**
- Prefer concrete, quantified, verifiable statements (for example "reduced X by Y%") **only when real**, otherwise leave a TODO.
- Cite or link authoritative sources (official docs) where technologies are referenced.
- Use definitive language, short paragraphs, descriptive headings, lists and tables for comparisons, one idea per paragraph.

## PHASE 4: AI-DISCOVERABILITY EXTRAS

1. **`/llms.txt`** (route handler or `public/`): concise Markdown summary of who I am, what I do, the key pages with one-line descriptions, and contact/profile links. Optionally also `/llms-full.txt` with the full text of About, Services, and project summaries.
2. **Markdown/plain-text friendliness**: make sure all key content exists in server-rendered HTML (no content hidden behind client-only tabs, accordions that render only on click, or images of text).
3. Add a `humans.txt` and `/.well-known/security.txt` (with my real contact email).
4. **IndexNow** (Bing/others): add a key file and a small script or Vercel deploy hook note so new URLs are pushed on deploy.

## PHASE 5: PERFORMANCE, ACCESSIBILITY, IMAGES

- Use `next/image` for all images with explicit `width`/`height` or `fill` with sized parents; `priority` only on the single LCP image; `sizes` attributes set properly; prefer AVIF/WebP in `next.config`.
- Descriptive, non-stuffed `alt` text (for example "Dashboard interface for ServiceTrack built with Next.js and Tailwind CSS"). Decorative images get `alt=""`.
- `next/font` with `display: swap`, subset to Latin, no render-blocking font CSS.
- Audit and trim client JavaScript: dynamic-import heavy animation code (Framer Motion) below the fold, avoid shipping large libraries to the client, respect `prefers-reduced-motion`.
- Reserve space for all media to avoid CLS. Targets: LCP under 2.5s, INP under 200ms, CLS under 0.1, Lighthouse SEO 100, Accessibility 95 or above, Best Practices 95 or above.
- Semantic HTML: one `H1` per page, ordered headings, `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, a "skip to content" link, visible focus states, WCAG AA contrast, descriptive `aria-label`s on icon links.
- Custom `not-found.tsx` (helpful links back to key pages, returns a real 404 status) and `error.tsx`.

## PHASE 6: ANALYTICS AND MEASUREMENT

- Add lightweight, privacy-friendly analytics (Vercel Web Analytics or Plausible) loaded without hurting LCP. Track custom events: primary CTA click, contact CTA click, project card click, GitHub link click, LinkedIn click, contact form submit.
- Add Google Search Console and Bing Webmaster verification via `metadata.verification` using environment variables (leave values as TODO).
- Add a `lighthouse-ci` config or npm script (`npm run audit:seo`) to run Lighthouse against the production build, plus a small script that validates `sitemap.xml`, `robots.txt`, and JSON-LD parse correctly.

## PHASE 7: VERIFICATION (must pass before you finish)

1. `npm run build` succeeds with no type or lint errors.
2. View-source (or `curl`) of `/`, `/about`, `/projects`, `/projects/foodsetu` shows full content, title, description, canonical, OG tags, and JSON-LD **in the initial HTML**.
3. `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/manifest.webmanifest`, and OG image routes all return 200 with correct content types.
4. JSON-LD parses; every `@id` resolves; no schema property is missing from visible content.
5. No page has more than one `H1`; no broken internal links; every image has appropriate `alt`.
6. Only one canonical host; no redirect chains.

## FINAL REPORT (required output format)

1. Summary of what changed, grouped by phase, with file paths.
2. A table of every `TODO(waquar)` that needs my real data (metrics, headshot, education, repo links, verification codes, email).
3. Any place where you deviated from this prompt and why.
4. Post-deploy checklist for me: submit sitemap in Search Console and Bing Webmaster, run Rich Results Test on `/`, run PageSpeed Insights, update GitHub README and profile bio plus LinkedIn Contact Info and Featured section to link to the site and match the same title, stack, and location wording, and request indexing of the homepage and each project page.

Start with Phase 0 and show me the findings and plan before making changes.
