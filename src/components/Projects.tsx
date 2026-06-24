import { Code2, Github, ExternalLink, BarChart3 } from 'lucide-react';
import React, { useState } from 'react';

interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement | null>;
    handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Projects = ({ projectsRef, handleMouseMove, handleMouseLeave }: ProjectsProps) => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "ExamGrid",
            year: "2025",
            desc: "Comprehensive management dashboard with an intuitive UI for scheduling, attendance, and administration of examination staff. Features responsive design, seamless navigation, and a modern aesthetic built with Tailwind CSS. (Test: test@gmail.com / password-password)",
            stack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
            github: "https://github.com/waqar741/ExamGrid",
            live: "https://examgridapp.vercel.app/",
            status: "Completed",
            category: "Full Stack"
        },
        {
            title: "MeshMind - AI Platform",
            year: "2025",
            desc: "Modular clinical platform featuring a highly responsive React frontend and a robust FastAPI backend. Designed with user-centric workflows and accessible data visualization to present complex analytical information clearly.",
            stack: ["React JS", "FastAPI", "Python", "PostgreSQL"],
            github: "https://github.com/waqar741/Frontend-HFP",
            live: "https://dev-ai.nomineelife.com/",
            status: "Completed",
            category: "Full Stack"
        },
        {
            title: "EchoAI Avatar",
            year: "2025",
            desc: "Engaging AI voice chatbot featuring a custom-designed animated avatar. Focused heavily on micro-interactions and smooth Canvas rendering to create an immersive, low-latency conversational user experience.",
            stack: ["React", "TypeScript", "FastAPI", "Web Speech API"],
            github: "https://github.com/waqar741/EchoAI",
            live: "https://avatar.nomineelife.com/",
            status: "Completed",
            category: "UI/UX"
        },
        {
            title: "Traxos Finance Tracker",
            year: "2024",
            desc: "Sleek personal finance management app with a beautifully crafted dashboard. Features dark mode support, intuitive expense categorization, and interactive data visualization charts tailored for a seamless mobile experience.",
            stack: ["TypeScript", "React", "Tailwind CSS", "Supabase"],
            github: "https://github.com/waqar741/traxos",
            live: "https://traxos.vercel.app/",
            status: "Completed",
            category: "Frontend"
        },
        {
            title: "Railway Concession System",
            year: "2024",
            desc: "Digitized railway concession workflow prioritizing accessibility and ease of use. Implemented a clean, user-friendly interface for digital verification and admin approval processes, minimizing friction for users.",
            stack: ["HTML", "CSS", "JavaScript", "Firebase"],
            github: "https://github.com/waqar741/railway-concession-portal",
            live: "https://railwayconcession.vercel.app/",
            status: "Completed",
            category: "Full Stack"
        },
        {
            title: "Tech Rental Platform",
            year: "2023",
            desc: "Modern marketplace for renting tech gadgets with a focus on product discovery and clean typography. Built a responsive catalog and streamlined checkout process using React and Firebase.",
            stack: ["React", "Express", "Firebase"],
            github: "https://github.com/waqar741",
            live: "https://gadget-rental-4314b.web.app/",
            status: "Completed",
            category: "Full Stack"
        },
        {
            title: "SmartNote",
            year: "2022",
            desc: "Minimalist web-based tool for efficient note-taking. Designed with a distraction-free interface and thoughtful typography to capture ideas effortlessly and organize tasks with high visual clarity.",
            stack: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/waqar741/notess",
            live: "https://smartnote.vercel.app/",
            status: "Completed",
            category: "Frontend"
        }
    ];

    const filters = ['All', 'Full Stack', 'Frontend', 'UI/UX'];

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    return (
        <section ref={projectsRef} id="projects" className="mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h2 className="text-2xl sm:text-3xl font-outfit font-bold flex items-center gap-2 scroll-reveal tracking-wide">
                    <Code2 size={20} />
                    Things I've Built
                </h2>

                <div className="flex p-1.5 glass-card rounded-xl scroll-reveal w-full sm:w-auto overflow-x-auto hide-scrollbar">
                    {filters.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${filter === category
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                        >
                            {category === 'UI/UX' ? (
                                <span className="flex items-center gap-1">
                                    <BarChart3 size={12} />
                                    {category}
                                </span>
                            ) : category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group relative p-5 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between animate-fade-in-up"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div>
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1 mr-2">
                                    <h3 className="text-lg font-outfit font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">{project.title}</h3>
                                    <span className={`inline-block mt-0.5 text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wider ${project.category === 'UI/UX'
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                        : project.category === 'Frontend'
                                            ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>

                                <div className="flex gap-2 flex-shrink-0">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                        title="GitHub"
                                    >
                                        <Github size={16} />
                                    </a>
                                    {project.live !== '#' && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 glass-card rounded-full hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
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

                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {project.stack.slice(0, 4).map(tech => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 text-[10px] sm:text-xs font-medium border border-gray-200 dark:border-gray-800 rounded-full bg-white/50 dark:bg-black/50 text-gray-700 dark:text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 text-[10px] sm:text-xs text-gray-500">
                            <span>{project.year}</span>
                            <span className={`px-2 py-0.5 rounded-full ${project.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                }`}>
                                {project.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
