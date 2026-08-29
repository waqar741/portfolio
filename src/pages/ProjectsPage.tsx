import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ParticleCanvas from '../components/ParticleCanvas';
import Footer from '../components/Footer';

const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');
    const [darkMode, setDarkMode] = useState(true);

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
            <header className="relative z-50 p-4 sm:p-6 md:p-8 flex items-center justify-between">
                <Link 
                    to="/" 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                >
                    <ArrowLeft size={16} />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
                
                {/* Theme Toggle Button */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                    aria-label="Toggle Theme"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </header>

            <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
                <div className="mb-12 text-center sm:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center sm:justify-start gap-3">
                        <Code2 className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
                        All Projects
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base md:text-lg">
                        A comprehensive list of my work, side projects, and experiments. 
                        Filter by category to explore different technologies and domains.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center sm:justify-start mb-10">
                    <div className="flex p-1 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                        {filters.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    filter === category
                                        ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                                        : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative p-5 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1 pr-2">
                                        <h3 className="text-lg font-bold group-hover:text-blue-500 transition-colors line-clamp-1">{project.title}</h3>
                                        <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                            project.category === 'Frontend'
                                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                        }`}>
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="flex gap-1 flex-shrink-0">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-50 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors border border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                                            title="GitHub"
                                        >
                                            <Github size={16} />
                                        </a>
                                        {project.live !== '#' && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-gray-50 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors border border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                                                title="Live Site"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
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

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 text-xs font-medium text-gray-500">
                                <span className="flex items-center gap-1">
                                    📅 {project.year}
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
                    ))}
                </div>
            </main>
            
            <Footer coffeeCount={0} />
        </div>
    );
};

export default ProjectsPage;
