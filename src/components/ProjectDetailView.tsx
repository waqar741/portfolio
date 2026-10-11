"use client";
import { useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    ArrowRight,
    ExternalLink,
    Clock,
    Lock,
} from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { Project } from '../data/projects';
import Footer from './Footer';
import Navbar from './Navbar';

const ParticleCanvas = dynamic(() => import('./ParticleCanvas'), {
    ssr: false,
});

interface ProjectDetailViewProps {
    project: Project;
    prevProject?: Project;
    nextProject?: Project;
}

const emptySubscribe = () => () => {};

export default function ProjectDetailView({ project, prevProject, nextProject }: ProjectDetailViewProps) {
    const router = useRouter();
    const { theme, resolvedTheme } = useTheme();
    const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
    const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

    const scrollToSection = (id: string) => {
        if (id === 'projects') {
            router.push('/projects');
        } else {
            router.push(`/?section=${id}`);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project.slug]);

    return (
        <div className={`min-h-screen ${isDark ? 'bg-[#080808] text-white' : 'bg-[#f9f9f7] text-gray-900'} font-sans transition-colors duration-500`}>

            {/* ── HERO: Full-viewport image with overlay ── */}
            <div className="relative w-full h-[100svh] min-h-[500px] overflow-hidden">

                {/* Background Canvas behind hero */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                    <ParticleCanvas darkMode={true} />
                </div>

                {/* Hero Image */}
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={`${project.title} showcase`}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                ) : (
                    /* Rich designed fallback — uses project data as visual content */
                    <div className="absolute inset-0">
                        {/* Base gradient — category-aware accent */}
                        <div className={`absolute inset-0 ${
                            project.category === 'AI & Systems'
                                ? 'bg-gradient-to-br from-violet-950 via-[#0a0a0f] to-black'
                                : project.category === 'Full Stack'
                                ? 'bg-gradient-to-br from-blue-950 via-[#060810] to-black'
                                : 'bg-gradient-to-br from-gray-900 via-[#080808] to-black'
                        }`} />

                        {/* Subtle dot grid */}
                        <div
                            className="absolute inset-0 opacity-[0.07]"
                            style={{
                                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                backgroundSize: '32px 32px',
                            }}
                        />

                        {/* Giant watermark title */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
                            <span
                                className="font-black uppercase tracking-tighter leading-none text-white/[0.04] text-center px-4"
                                style={{ fontSize: 'clamp(4rem, 18vw, 14rem)' }}
                            >
                                {project.title}
                            </span>
                        </div>

                        {/* Tech stack floating pills — top area */}
                        <div className="absolute top-1/4 left-0 right-0 flex flex-wrap justify-center gap-2 px-8 pointer-events-none">
                            {project.stack.slice(0, 5).map((tech, i) => (
                                <span
                                    key={tech}
                                    className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/10 text-white/25"
                                    style={{ opacity: 0.4 - i * 0.05 }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Glow orb */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full blur-[80px] opacity-[0.12] ${
                            project.category === 'AI & Systems'
                                ? 'bg-violet-400'
                                : project.category === 'Full Stack'
                                ? 'bg-blue-400'
                                : 'bg-slate-400'
                        }`} />
                    </div>
                )}


                {/* Gradient overlay — bottom-heavy so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10" />

                {/* Top bar: back button */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-10 pt-6 pb-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors group"
                    >
                        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                        <span>All Projects</span>
                    </Link>

                    <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
                        {project.year} / {project.category}
                    </span>
                </div>

                {/* Bottom hero content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-10 pb-6 sm:pb-14 max-w-5xl">
                    {/* Status + category pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider ${
                            project.status === 'Completed'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
                            {project.status}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-white/10 text-white/70 border border-white/20">
                            {project.category}
                        </span>
                    </div>

                    {/* Big title */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-2 sm:mb-3">
                        {project.title}
                    </h1>

                    {/* Tagline — hidden on small mobile to save space */}
                    <p className="hidden sm:block text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mb-6">
                        {project.tagline || project.desc}
                    </p>
                    <p className="sm:hidden text-xs text-white/50 leading-snug max-w-xs mb-4 line-clamp-2">
                        {project.tagline || project.desc}
                    </p>

                    {/* Action links */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {project.live && project.live !== '#' ? (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-white text-black rounded-full text-xs sm:text-sm font-bold hover:bg-white/90 transition-all shadow-lg shadow-black/30"
                            >
                                <ExternalLink size={12} />
                                <span className="hidden sm:inline">Visit Live Site</span>
                                <span className="sm:hidden">Live</span>
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium text-white/50 border border-white/15">
                                <Clock size={11} />
                                In Development
                            </span>
                        )}

                        {project.github && project.github !== '#' ? (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-all"
                            >
                                <Github size={13} />
                                GitHub
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium text-white/40 border border-white/10">
                                <Lock size={11} />
                                Private
                            </span>
                        )}
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-6 right-6 sm:right-10 z-20 hidden sm:flex flex-col items-center gap-1.5 text-white/30">
                    <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
                </div>
            </div>

            {/* ── BODY: Editorial prose layout ── */}
            <main className={`relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24`}>

                {/* Tech stack strip */}
                <div className="flex flex-wrap gap-2 mb-16">
                    {project.stack.map(tech => (
                        <span
                            key={tech}
                            className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                                isDark
                                    ? 'bg-white/5 border-white/10 text-white/60'
                                    : 'bg-black/5 border-black/10 text-black/60'
                            }`}
                        >
                            {tech}
                        </span>
                    ))}
                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ml-auto ${
                        isDark
                            ? 'bg-white/5 border-white/10 text-white/40'
                            : 'bg-black/5 border-black/10 text-black/40'
                    }`}>
                        Role: {project.role}
                    </span>
                </div>

                {/* ── Overview ── */}
                <Section number="01" title="Overview" isDark={isDark}>
                    <p className={`text-base sm:text-lg leading-loose ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                        {project.overview}
                    </p>
                </Section>

                {/* ── Problem / Approach ── */}
                <Section number="02" title="Problem & Approach" isDark={isDark}>
                    <div className={`border-l-2 pl-5 mb-8 ${isDark ? 'border-amber-400/60' : 'border-amber-500/70'}`}>
                        <span className={`text-[10px] uppercase tracking-widest font-bold font-mono mb-2 block ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                            The Problem
                        </span>
                        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-white/65' : 'text-gray-600'}`}>
                            {project.problem}
                        </p>
                    </div>

                    <div className={`border-l-2 pl-5 ${isDark ? 'border-emerald-400/60' : 'border-emerald-500/70'}`}>
                        <span className={`text-[10px] uppercase tracking-widest font-bold font-mono mb-2 block ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                            The Engineering Approach
                        </span>
                        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-white/65' : 'text-gray-600'}`}>
                            {project.approach}
                        </p>
                    </div>
                </Section>

                {/* ── Architecture ── */}
                {project.architecture && project.architecture.length > 0 && (
                    <Section number="03" title="System Architecture" isDark={isDark}>
                        <dl className="space-y-0">
                            {project.architecture.map((arch, idx) => (
                                <div
                                    key={idx}
                                    className={`grid grid-cols-[1fr_2fr] gap-6 py-4 border-b ${
                                        isDark ? 'border-white/8' : 'border-black/6'
                                    } last:border-0`}
                                >
                                    <dt className={`text-xs font-bold font-mono uppercase tracking-wider pt-0.5 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                                        {arch.layer}
                                    </dt>
                                    <dd className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                                        {arch.details}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Section>
                )}

                {/* ── Features ── */}
                <Section number="04" title="Features & Deliverables" isDark={isDark}>
                    <ul className="space-y-6">
                        {project.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <span className={`mt-1 text-xs font-mono font-bold tabular-nums w-6 shrink-0 ${isDark ? 'text-white/25' : 'text-black/25'}`}>
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <span className={`text-sm sm:text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {feat.title}
                                        </span>
                                        {feat.status && (
                                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                                                feat.status === 'Implemented'
                                                    ? isDark ? 'bg-emerald-500/15 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                                                    : feat.status === 'In Development'
                                                    ? isDark ? 'bg-amber-500/15 text-amber-300' : 'bg-amber-100 text-amber-700'
                                                    : isDark ? 'bg-blue-500/15 text-blue-300' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                                {feat.status}
                                            </span>
                                        )}
                                    </div>
                                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-white/55' : 'text-gray-500'}`}>
                                        {feat.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* ── Challenges ── */}
                {project.challenges && project.challenges.length > 0 && (
                    <Section number="05" title="Technical Challenges" isDark={isDark}>
                        <div className="space-y-8">
                            {project.challenges.map((item, idx) => (
                                <div key={idx}>
                                    <p className={`text-sm sm:text-base font-semibold mb-2 ${isDark ? 'text-white/85' : 'text-gray-800'}`}>
                                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded mr-2 align-middle ${
                                            isDark ? 'bg-red-500/15 text-red-400' : 'bg-red-100 text-red-600'
                                        }`}>
                                            Problem
                                        </span>
                                        {item.challenge}
                                    </p>
                                    <p className={`text-xs sm:text-sm leading-relaxed pl-0 ${isDark ? 'text-white/55' : 'text-gray-500'}`}>
                                        <span className={`font-bold font-mono mr-1 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                                            Resolution:
                                        </span>
                                        {item.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {/* ── Contributions & Learnings ── */}
                <Section number="06" title="Contributions & Takeaways" isDark={isDark}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div>
                            <h3 className={`text-[10px] uppercase tracking-widest font-bold font-mono mb-4 ${isDark ? 'text-white/35' : 'text-black/35'}`}>
                                My Contributions
                            </h3>
                            <ul className="space-y-3">
                                {project.contributions.map((contrib, idx) => (
                                    <li key={idx} className={`text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 ${isDark ? 'text-white/65' : 'text-gray-600'}`}>
                                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isDark ? 'bg-white/40' : 'bg-black/30'}`} />
                                        {contrib}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className={`text-[10px] uppercase tracking-widest font-bold font-mono mb-4 ${isDark ? 'text-white/35' : 'text-black/35'}`}>
                                Key Learnings
                            </h3>
                            <ul className="space-y-3">
                                {project.learnings.map((learn, idx) => (
                                    <li key={idx} className={`text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 ${isDark ? 'text-white/65' : 'text-gray-600'}`}>
                                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isDark ? 'bg-emerald-400/60' : 'bg-emerald-500/60'}`} />
                                        {learn}
                                    </li>
                                ))}
                                {project.futureWork && project.futureWork.map((fw, idx) => (
                                    <li key={`fw-${idx}`} className={`text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isDark ? 'bg-amber-400/50' : 'bg-amber-500/50'}`} />
                                        {fw}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* ── Prev / Next Navigation ── */}
                <div className={`mt-16 pt-5 border-t flex items-center justify-between gap-2 ${isDark ? 'border-white/10' : 'border-black/8'}`}>
                    {/* Prev */}
                    {prevProject ? (
                        <Link
                            href={`/projects/${prevProject.slug}`}
                            className={`group flex items-center gap-1.5 max-w-[45%] transition-colors ${
                                isDark ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'
                            }`}
                        >
                            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold truncate">{prevProject.title}</span>
                        </Link>
                    ) : <span />}

                    {/* Next */}
                    {nextProject ? (
                        <Link
                            href={`/projects/${nextProject.slug}`}
                            className={`group flex items-center gap-1.5 max-w-[45%] text-right transition-colors ${
                                isDark ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'
                            }`}
                        >
                            <span className="text-xs sm:text-sm font-semibold truncate">{nextProject.title}</span>
                            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
                        </Link>
                    ) : <span />}
                </div>

                {/* ── Contact prompt ── */}
                <div className="mt-16 text-center">
                    <p className={`text-xs sm:text-sm mb-4 ${isDark ? 'text-white/35' : 'text-gray-400'}`}>
                        Interested in discussing this project or working together?
                    </p>
                    <Link
                        href="/#contact"
                        className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold transition-colors underline underline-offset-4 ${
                            isDark ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                        }`}
                    >
                        Get in touch
                        <ArrowRight size={13} />
                    </Link>
                </div>

            </main>

            <Footer coffeeCount={0} />
            <Navbar
                activeSection="projects"
                scrollToSection={scrollToSection}
                isLoading={false}
            />
        </div>
    );
}

/* ── Section wrapper component ── */
function Section({
    number,
    title,
    isDark,
    children,
}: {
    number: string;
    title: string;
    isDark: boolean;
    children: React.ReactNode;
}) {
    return (
        <section className="mb-16 sm:mb-20">
            <div className="flex items-baseline gap-3 mb-7">
                <span className={`text-[11px] font-mono font-bold tabular-nums ${isDark ? 'text-white/25' : 'text-black/25'}`}>
                    {number}
                </span>
                <h2 className={`text-lg sm:text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h2>
            </div>
            {children}
        </section>
    );
}
