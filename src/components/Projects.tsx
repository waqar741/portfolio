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
            title: "HealthFirstPriority Distributed AI Platform",
            year: "2025",
            desc: "Distributed AI-powered clinical platform with modular Python/FastAPI backend, PostgreSQL data storage, and React frontend. Applied OOP principles, designed database schemas, and built secure REST APIs for structured data workflows.",
            stack: ["Python", "FastAPI", "PostgreSQL", "React JS"],
            github: "https://github.com/waqar741/Frontend-HFP",
            live: "https://dev-ai.nomineelife.com/",
            status: "Completed",
            category: "AI/ML"
        },
        {
            title: "EchoAI Avatar",
            year: "2025",
            desc: "AI voice chatbot with animated avatar using Web Speech API, Canvas rendering, and LLM API integration. Implemented real-time communication via Server-Sent Events (SSE) with a React + FastAPI + TypeScript stack.",
            stack: ["React", "FastAPI", "TypeScript", "SSE"],
            github: "https://github.com/waqar741/EchoAI",
            live: "https://avatar.nomineelife.com/",
            status: "Completed",
            category: "AI/ML"
        },
        {
            title: "E-Commerce Sales Analysis",
            year: "2025",
            desc: "End-to-end data analysis project using Python and Pandas to process 50,000+ transaction records. Performed EDA, data cleaning, and trend analysis. Visualized KPIs including revenue trends, top-selling categories, and customer segmentation using Matplotlib and Seaborn.",
            stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Excel"],
            github: "https://github.com/waqar741",
            live: "#",
            status: "Completed",
            category: "Data"
        },
        {
            title: "AI Honeypot Analytics",
            year: "2025",
            desc: "Network monitoring system capturing and analyzing suspicious traffic patterns. Processed log data using Python and PostgreSQL, applied pattern-matching algorithms, and generated analytical reports identifying repeated intrusion attempts.",
            stack: ["Python", "PostgreSQL", "Network Monitoring"],
            github: "https://github.com/waqar741/AI-Based-Honeypot",
            live: "#",
            status: "In Progress",
            category: "AI/ML"
        },
        {
            title: "Traxos Finance Tracker",
            year: "2024",
            desc: "Full-stack personal finance management app with real-time expense tracking, income/expense categorization, and spending analytics dashboard. Built with TypeScript, Supabase, and React with secure authentication and CRUD operations.",
            stack: ["TypeScript", "Supabase", "React"],
            github: "https://github.com/waqar741/traxos",
            live: "https://traxos.vercel.app/",
            status: "Completed",
            category: "Web Dev"
        },
        {
            title: "Face Recognition Attendance",
            year: "2022",
            desc: "Automated attendance management system using Python and OpenCV for facial data processing. Applied DSA concepts for efficient record management and integrated SQL database for attendance storage, retrieval, and report generation.",
            stack: ["Python", "OpenCV", "SQL"],
            github: "https://github.com/waqar741/Attendance-Management-System",
            live: "#",
            status: "Completed",
            category: "AI/ML"
        },
        {
            title: "Railway Concession System",
            year: "2024",
            desc: "Web-based system automating railway concession workflows with digital verification and centralized record management. Implemented authentication, CRUD operations, and admin approval workflows to reduce manual overhead.",
            stack: ["HTML", "CSS", "JavaScript", "Firebase"],
            github: "https://github.com/rahul4287452/rcm",
            live: "https://trcp-e37b7.web.app/",
            status: "Completed",
            category: "Web Dev"
        },
        {
            title: "Tech Rental Platform",
            year: "2023",
            desc: "FERN stack marketplace for renting tech gadgets with inventory tracking, rental period management, and user authentication. Deployed with Firebase hosting and real-time database sync.",
            stack: ["Firebase", "Express", "React"],
            github: "https://github.com/waqar741",
            live: "https://gadget-rental-4314b.web.app/",
            status: "Completed",
            category: "Web Dev"
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

    const filters = ['All', 'Web Dev', 'Data', 'AI/ML'];

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
                    {filters.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${filter === category
                                ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                                : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                                }`}
                        >
                            {category === 'Data' ? (
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
                        className="group relative p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white bg-white dark:bg-black transition-all duration-300 hover:shadow-lg flex flex-col justify-between animate-fade-in-up"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div>
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1 mr-2">
                                    <h3 className="text-base font-bold group-hover:underline line-clamp-1">{project.title}</h3>
                                    <span className={`inline-block mt-0.5 text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wider ${project.category === 'Data'
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                        : project.category === 'AI/ML'
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
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                            title="Live Site"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-3">
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
