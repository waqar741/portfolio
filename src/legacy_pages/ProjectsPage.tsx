"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Code2, ExternalLink, Sun, Moon } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { projects } from '../data/projects';
import dynamic from 'next/dynamic';

const ParticleCanvas = dynamic(() => import('../components/ParticleCanvas'), {
    ssr: false,
});
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ProjectsPage = () => {
    const router = useRouter();
    const [filter, setFilter] = useState('All');
    const [darkMode, setDarkMode] = useState(true);

    const scrollToSection = (id: string) => {
        if (id === 'projects') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push(`/?section=${id}`);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const filters = ['All', 'Full Stack', 'Frontend'];

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} font-sans transition-colors duration-500`}>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none opacity-50 z-0">
                <ParticleCanvas darkMode={darkMode} />
            </div>

            {/* Header / Nav */}
            <header className="relative z-50 p-2 sm:p-4 flex items-center justify-between">
                <Link 
                    href="/" 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                >
                    <ArrowLeft size={16} />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </header>

            <main className="relative z-10 max-w-5xl mx-auto px-2 sm:px-4 pt-2 pb-24">
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center sm:justify-start gap-2">
                            <Code2 className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                            All Projects
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm">
                            A comprehensive list of my work, side projects, and experiments. 
                            Filter by category to explore different technologies.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex justify-center sm:justify-start">
                        <div className="flex p-1 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                            {filters.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        filter === category
                                            ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                                            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredProjects.map((project, idx) => {
                        const slug = project.title.toLowerCase().replace(/[\s-]/g, '-').replace(/[^a-z0-9-]/g, '');
                        return (
                        <div
                            key={idx}
                            style={{ animationDelay: `${idx * 100}ms` }}
                            className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl overflow-hidden animate-fade-in-up"
                        >
                            <Link href={`/projects/${slug}`} className="absolute inset-0 z-0" aria-label={`View the ${project.title} case study`}></Link>
                            <div className="flex flex-col relative z-10 pointer-events-none">
                                {project.image && (
                                    <div className="h-48 w-full overflow-hidden relative border-b border-gray-100 dark:border-gray-800">
                                        <Image 
                                            src={project.image} 
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1 pr-2">
                                        <h3 className="text-lg font-bold group-hover:text-blue-500 transition-colors line-clamp-1 pointer-events-auto">
                                            <Link href={`/projects/${slug}`}>{project.title}</Link>
                                        </h3>
                                        <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                            project.category === 'Frontend'
                                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                        }`}>
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="flex gap-1 flex-shrink-0 pointer-events-auto">
                                        {project.github && project.github !== "#" && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-gray-50 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors border border-transparent hover:border-gray-300 dark:hover:border-gray-700 relative z-20"
                                                title="GitHub"
                                                aria-label={`GitHub repository for ${project.title}`}
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {project.live && project.live !== '#' && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-gray-50 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors border border-transparent hover:border-gray-300 dark:hover:border-gray-700 relative z-20"
                                                title="Live Site"
                                                aria-label={`Live site for ${project.title}`}
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4 pointer-events-auto">
                                    {project.stack.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-xs border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50/50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            </div>

                            <div className="mx-5 mb-5 flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 relative z-10 pointer-events-none">
                                <span className="flex items-center gap-1">
                                    {project.year}
                                </span>
                                <span className={`px-2.5 py-1 rounded-full flex items-center gap-1 ${
                                    project.status === 'Completed' 
                                        ? 'bg-green-100/50 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                                        : 'bg-yellow-100/50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                                }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                    {project.status}
                                </span>
                            </div>
                        </div>
                    )})}
                </div>
            </main>
            
            <Footer coffeeCount={0} />
            <Navbar 
                activeSection="projects" 
                scrollToSection={scrollToSection} 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
                isLoading={false} 
            />
        </div>
    );
};

export default ProjectsPage;
