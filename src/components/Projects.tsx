import { Code2, ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import React, { useState } from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';

interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement | null>;
    handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Projects = ({ projectsRef, handleMouseMove, handleMouseLeave }: ProjectsProps) => {
    const [filter, setFilter] = useState('All');

    // Projects data is now imported from ../data/projects

    const filters = ['All', 'Full Stack', 'Frontend'];

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    }).slice(0, 4); // Only show top 4 on home page

    return (
        <section ref={projectsRef} id="projects" className="mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 scroll-reveal">
                    <Code2 size={20} />
                    Featured Projects
                </h2>

                <div className="flex p-1 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 scroll-reveal w-full sm:w-auto">
                    {filters.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${filter === category
                                ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                                : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                                }`}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((project, idx) => {
                    const slug = project.title.toLowerCase().replace(/[\s-]/g, '-').replace(/[^a-z0-9-]/g, '');
                    return (
                    <div
                        key={idx}
                        className="group relative flex flex-col justify-between rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white bg-white dark:bg-black transition-all duration-300 hover:shadow-lg animate-fade-in-up overflow-hidden"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link href={`/projects/${slug}`} className="absolute inset-0 z-0" aria-label={`View the ${project.title} case study`}></Link>
                        <div className="flex flex-col relative z-10 pointer-events-none">
                            {project.image && (
                                <div className="h-40 w-full overflow-hidden relative border-b border-gray-100 dark:border-gray-800">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            )}
                            <div className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                <div className="flex-1 mr-2">
                                    <h3 className="text-base font-bold group-hover:underline line-clamp-1 pointer-events-auto">
                                        <Link href={`/projects/${slug}`}>{project.title}</Link>
                                    </h3>
                                    <span className={`inline-block mt-0.5 text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wider ${project.category === 'Frontend'
                                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                        : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>

                                <div className="flex gap-2 flex-shrink-0 pointer-events-auto">
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative z-20"
                                            title="GitHub"
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}
                                    {project.live && project.live !== '#' && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative z-20"
                                            title="Live Site"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3 group-hover:line-clamp-none leading-relaxed transition-all duration-300">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-3 pointer-events-auto">
                                {project.stack.slice(0, 4).map(tech => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 text-[10px] sm:text-xs border border-gray-300 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-900"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        </div>

                        <div className="mx-4 mb-4 flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 text-[10px] sm:text-xs text-gray-500 relative z-10 pointer-events-none">
                            <span>{project.year}</span>
                            <span className={`px-2 py-0.5 rounded-full ${project.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                }`}>
                                {project.status}
                            </span>
                        </div>
                    </div>
                )})}
            </div>

            <div className="mt-8 flex justify-center scroll-reveal">
                <Link
                    href="/projects"
                    className="group flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                >
                    <span>View All Projects</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

export default Projects;
