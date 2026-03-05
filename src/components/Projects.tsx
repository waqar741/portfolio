import { Code2, Github, ExternalLink } from 'lucide-react';
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
            title: "AI Adaptive Honeypot",
            year: "2025",
            desc: "Proactive defense using AI to detect and deceive attackers. Features real-time threat analysis and adaptive response.",
            stack: ["Python", "ML", "Security", "AI"],
            github: "https://github.com/waqar741/AI-Based-Honeypot",
            live: "#",
            status: "In Progress",
            category: "AI/ML"
        },
        {
            title: "HealthFirstPriority",
            year: "2025",
            desc: "AI-powered clinical chat platform with multi-node selection, offline PDF knowledge base, and streaming responses via SSE.",
            stack: ["Next.js", "TypeScript", "Zustand"],
            github: "https://github.com/waqar741/Frontend-HFP",
            live: "https://dev-ai.nomineelife.com/",
            status: "Completed",
            category: "AI/ML"
        },
        {
            title: "EchoAI Avatar",
            year: "2025",
            desc: "Voice-driven AI chatbot with animated avatar that displays GIF expressions while talking using Web Speech API and Canvas rendering.",
            stack: ["React", "FastAPI", "TypeScript"],
            github: "https://github.com/waqar741/EchoAI",
            live: "https://avatar.nomineelife.com/",
            status: "Completed",
            category: "AI/ML"
        },
        {
            title: "Traxos Finance",
            year: "2024",
            desc: "Full-stack finance app with TypeScript & Supabase. Real-time expense tracking and secure authentication.",
            stack: ["TypeScript", "Supabase", "React"],
            github: "https://github.com/waqar741/traxos",
            live: "https://traxos.vercel.app/",
            status: "Completed",
            category: "Web Dev"
        },
        {
            title: "Railway Concession",
            year: "2024",
            desc: "Automated concession generation system with secure login, digital verification, and centralized database.",
            stack: ["React", "Node", "Firebase"],
            github: "https://github.com/rahul4287452/rcm",
            live: "https://trcp-e37b7.web.app/",
            status: "Completed",
            category: "Web Dev"
        },
        {
            title: "Tech Rental Platform",
            year: "2023",
            desc: "FERN stack website for renting tech gadgets. Includes inventory tracking and rental period management.",
            stack: ["Firebase", "Express", "React"],
            github: "https://github.com/waqar741",
            live: "https://gadget-rental-4314b.web.app/",
            status: "Completed",
            category: "Web Dev"
        },
        {
            title: "Face Rec. Attendance",
            year: "2022",
            desc: "Automated attendance tracking using Python, OpenCV for face recognition and SQL for data storage.",
            stack: ["Python", "OpenCV", "SQL"],
            github: "https://github.com/waqar741/Attendance-Management-System",
            live: "#",
            status: "Completed",
            category: "AI/ML"
        },
        // {
        //     title: "Tic-Tac-Toe Game",
        //     year: "2022",
        //     desc: "A lightweight, interactive game featuring a 'Win If You Can' challenge and instant replay functionality, deployed via GitHub Pages.",
        //     stack: ["HTML", "CSS", "JavaScript"],
        //     github: "https://github.com/waqar741/tictactoe",
        //     live: "https://waqar741.github.io/tictactoe/",
        //     status: "Completed",
        //     category: "Web Dev"
        // },
        {
            title: "Notes Website",
            year: "2022",
            desc: "SmartNote is a minimalist web-based tool for quick and efficient note-taking. It features a clean interface designed to capture ideas and organize tasks effortlessly.",
            stack: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/waqar741/notess",
            live: "https://smartnote.vercel.app/",
            status: "Completed",
            category: "Web Dev"
        }
    ];

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    return (
        <section ref={projectsRef} id="projects" className="mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 scroll-reveal">
                    <Code2 size={20} />
                    Things I've Built
                </h2>

                <div className="flex p-1 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 scroll-reveal w-full sm:w-auto">
                    {['All', 'Web Dev', 'AI/ML'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${filter === category
                                ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                                : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group relative p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white bg-white dark:bg-black transition-all duration-300 hover:shadow-lg flex flex-col justify-between animate-fade-in-up"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div>
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-base font-bold group-hover:underline line-clamp-1">{project.title}</h3>

                                <div className="flex gap-2">
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
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                            title="Live Site"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {project.stack.slice(0, 3).map(tech => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 text-[10px] sm:text-xs border border-gray-300 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-900"
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
