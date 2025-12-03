import { useState, useEffect, type FormEvent } from 'react';
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Coffee,
    Palette,
    Moon,
    Sun,
    Heart,
    Terminal,
    Code2,
    Briefcase,
    GraduationCap,
    Trophy,
    MapPin,
    Calendar,
    Download,
    Cpu,
    Home,
    Send,
    Shield,
    Database,
    Globe
} from 'lucide-react';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [coffeeCount, setCoffeeCount] = useState(0);
    const [typingText, setTypingText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [filter, setFilter] = useState('All');

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const terminalLines = [
        "> npm init -y waquar_portfolio",
        "> git add skills.js",
        "> git commit -m 'add AI & Full Stack skills'",
        "> npm run build:innovative_solutions"
    ];

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (typingText.length < terminalLines[currentLine].length) {
                setTypingText(prev => prev + terminalLines[currentLine][typingText.length]);
            } else {
                setTimeout(() => {
                    if (currentLine < terminalLines.length - 1) {
                        setCurrentLine(prev => prev + 1);
                        setTypingText('');
                    }
                }, 800);
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [typingText, currentLine]);

    // Handle Form Submission via Web3Forms
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: import.meta.env.VITE_ACCESS_KEY,

                name: formData.name,
                email: formData.email,
                message: formData.message,
            }),
        });

        const result = await response.json();
        setIsSubmitting(false);

        if (result.success) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    const projects = [
        {
            title: "AI Adaptive Cyber-Honeypot",
            year: "2025",
            desc: "A proactive cybersecurity defense system using AI to detect and deceive attackers. Features real-time threat analysis and an adaptive response mechanism to study attacker behavior.",
            stack: ["Python", "Machine Learning", "Network Security", "AI"],
            github: "https://github.com/waqar741",
            live: "#",
            status: "In Progress",
            icon: <Shield size={24} />,
            category: "AI/ML",
            image: null
        },
        {
            title: "Fintrac Finance Tracker",
            year: "2024-25",
            desc: "Developed a full-stack application using TypeScript and Supabase. Managed real-time expense tracking and secure user authentication with a responsive dashboard.",
            stack: ["TypeScript", "Supabase", "React"],
            github: "https://github.com/waqar741",
            live: "https://fintrac-money.vercel.app/",
            status: "Completed",
            icon: <Database size={24} />,
            category: "Web Dev",
            image: null
        },
        {
            title: "Railway Concession System",
            year: "2024-25",
            desc: "Built a System with automated concession generation. Added secure login, digital verification, and centralized database for efficiency.",
            stack: ["React.js", "Node.js", "Firebase"],
            github: "https://github.com/waqar741",
            live: "https://trcp-e37b7.web.app/",
            status: "Completed",
            icon: <Globe size={24} />,
            category: "Web Dev",
            image: null
        },
        {
            title: "Tech Gadget Rental Platform",
            year: "2023-24",
            desc: "Developed a full-stack website using the FERN stack (Firebase, Express, React, Node). Managed inventory tracking and user rental periods efficiently.",
            stack: ["Firebase", "Express", "React", "Node.js"],
            github: "https://github.com/waqar741",
            live: "#",
            status: "Completed",
            icon: <Cpu size={24} />,
            category: "Web Dev",
            image: null
        },
        {
            title: "Web Scraping for Indian Cuisine",
            year: "2023-24",
            desc: "Scraping of recipes done using Python's built-in libraries. Beautiful-Soup was used for scraping to gather data on Indian cuisine.",
            stack: ["Python", "BeautifulSoup", "Data Science"],
            github: "https://github.com/waqar741",
            live: "#",
            status: "Completed",
            icon: <Code2 size={24} />,
            category: "AI/ML",
            image: null
        },
        {
            title: "Attendance Management System",
            year: "2022-23",
            desc: "Used OpenCV in python for face recognition. Retrieval of data using Python and SQL for efficient attendance tracking.",
            stack: ["Python", "OpenCV", "SQL"],
            github: "https://github.com/waqar741",
            live: "#",
            status: "Completed",
            icon: <Terminal size={24} />,
            category: "AI/ML",
            image: null
        }
    ];

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    const experience = [
        {
            company: "HealthFirstPriority (HFP)",
            role: "AI Engineer Intern",
            date: "Aug 2025 – Present",
            details: "Researching distributed Large Language Model (LLM) architectures to optimize inference and scalability. Testing model sharding techniques to evaluate performance across decentralized systems.",
            tech: ["LLMs", "Distributed Systems", "Python", "AI Research"],
            icon: <Cpu size={24} />
        }
    ];

    const skills = [
        { icon: <Terminal />, label: "Python & Java", desc: "Backend Logic" },
        { icon: <Code2 />, label: "React & JS", desc: "Frontend Magic" },
        { icon: <Palette />, label: "HTML & CSS", desc: "UI/UX Design" },
        { icon: <Coffee />, label: "Problem Solving", desc: "DSA & Logic" }
    ];

    const techStack = [
        "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js",
        "Python", "Java", "Vite", "TailwindCSS", "MongoDB", "PostgreSQL",
        "Firebase", "AWS", "Docker", "Git", "GitHub", "Linux"
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans transition-colors duration-500">

            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]"
                style={{
                    backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"%3E%3C/path%3E%3C/svg%3E')`
                }}
            ></div>

            <main className="relative max-w-4xl mx-auto px-4 py-8 md:py-12">

                {/* Header with personality */}
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-full border-2 border-black dark:border-white overflow-hidden relative">
                            <img
                                src="images/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Waquar Shaikh</h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                <MapPin size={12} />
                                Mumbai • Software Developer
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="/MyResume.pdf"
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            <Download size={16} />
                            <span className="hidden sm:inline">Resume</span>
                        </a>

                        <button
                            onClick={() => setCoffeeCount(prev => prev + 1)}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors group"
                        >
                            <Coffee size={16} className="group-hover:rotate-12 transition-transform" />
                            <span className="text-sm">
                                {coffeeCount}
                            </span>
                        </button>

                        {/* <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button> */}
                        <a
                            href="#contact"
                            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center"
                            aria-label="Contact"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </header>

                {/* Terminal typing effect */}
                <div className="mb-12 p-4 bg-black dark:bg-gray-900 rounded-lg border border-gray-800 dark:border-gray-700 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-3 text-green-400">
                        <Terminal size={16} />
                        <span>~/portfolio</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div className="h-20 overflow-hidden">
                        {terminalLines.slice(0, currentLine + 1).map((line, idx) => (
                            <div key={idx} className="text-gray-300">
                                {idx === currentLine ? typingText + '▋' : line}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero section with personality */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                I build things for the web,
                                <span className="block text-gray-600 dark:text-gray-400 font-normal">
                                    one <span className="">bug</span> at a time.
                                </span>
                            </h2>

                            <p className="text-lg mb-6 leading-relaxed">
                                Computer Engineering student by day,{' '}
                                <span className="">full-stack developer</span>{' '}
                                by night. I believe the best products come from solving{' '}
                                <span className="">real problems</span> (usually your own).
                            </p>

                            <div className="flex flex-wrap gap-3 mb-6">
                                {skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-3 py-2 bg-gray-5 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800"
                                    >
                                        {skill.icon}
                                        <div>
                                            <div className="text-sm font-medium">{skill.label}</div>
                                            <div className="text-xs text-gray-500">{skill.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-64">
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <Palette size={16} />
                                    Quick Stats
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Projects shipped</span>
                                        <span className="font-mono">6+</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">All-nighters</span>
                                        <span className="font-mono">∞</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Current obsession</span>
                                        <span>AI</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Motivation</span>
                                        <span className="flex">
                                            {[...Array(3)].map((_, i) => (
                                                <Coffee key={i} size={12} className="ml-1" />
                                            ))}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Skills Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Code2 />
                        Technical Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium hover:border-black dark:hover:border-white transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Projects - with personality */}
                <section className="mb-16">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Code2 />
                            Things I've Built
                        </h2>

                        {/* Filter Toggle - Pill Style */}
                        <div className="flex bg-gray-100 dark:bg-gray-900 p-1 rounded-full border border-gray-200 dark:border-gray-800">
                            {['All', 'Web Dev', 'AI/ML'].map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                                        ? 'bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm'
                                        : 'text-gray-500 hover:text-black dark:hover:text-white'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group relative p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white bg-white dark:bg-black transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-black dark:text-white">{project.icon}</span>
                                            <div>
                                                <h3 className="text-xl font-bold group-hover:underline">{project.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <Calendar size={12} />
                                                    {project.year}
                                                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-xs">
                                                        {project.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                            {project.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.stack.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-700 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex md:flex-col gap-2">
                                        <a
                                            href={project.github}
                                            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center gap-2"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                        <a
                                            href={project.live}
                                            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                                        >
                                            <ExternalLink size={16} />
                                            Visit
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience & Education side by side */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Experience */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Briefcase />
                            Where I've Learned
                        </h2>

                        <div className="space-y-6">
                            {experience.map((job, idx) => (
                                <div
                                    key={idx}
                                    className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700"
                                >
                                    <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full border-2 border-white dark:border-black bg-gray-300 dark:bg-gray-700"></div>

                                    <div className="mb-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-black dark:text-white">{job.icon}</span>
                                            <h3 className="font-bold text-lg leading-none">{job.company}</h3>
                                        </div>
                                        <span className="text-sm font-medium text-black dark:text-white mt-1 block">{job.role}</span>
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">{job.date}</span>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                                        {job.details}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.tech.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="space-y-8">
                        {/* Education */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <GraduationCap />
                                Education
                            </h2>

                            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                                        <span className="text-white dark:text-black font-bold">T</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Terna Engineering College</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Bachelor of Computer Engineering</p>
                                        <p className="text-sm text-gray-500 mt-1">2022 - 2026 • Mumbai</p>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        <span>Shiravane Vidyalaya & Jr College (HSC 2022, SSC 2020)</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Trophy />
                                Certifications
                            </h2>

                            <div className="space-y-4">
                                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold">Hands On React JS From Beginner to Expert</h3>
                                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded">
                                            Udemy
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500">2025</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Contact & Message Me */}
                <section className="mb-24" id="contact">
                    <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
                        {/* Contact Info */}
                        <div className="flex-1 text-left space-y-6">
                            <h3 className="text-3xl font-bold">Let's make something cool</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Driven IT engineer skilled in software development. Always aiming to create effective solutions.
                                Have a project in mind or just want to say hi? I'm always open to discussing new ideas.
                            </p>

                            <div className="space-y-4 pt-4">
                                <a href="mailto:ahmu741@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
                                    <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-medium">ahmu741@gmail.com</span>
                                </a>
                                <a href="tel:7021396917" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
                                    <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform">
                                        <div className="w-5 h-5 flex items-center justify-center font-bold">📞</div>
                                    </div>
                                    <span className="font-medium">+91 7021396917</span>
                                </a>
                            </div>

                            <div className="flex gap-3 pt-6">
                                {[
                                    { icon: Github, href: "https://github.com/waqar741", label: "GitHub" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/shaikh-waquar", label: "LinkedIn" },
                                ].map((Social, idx) => (
                                    <a
                                        key={idx}
                                        href={Social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:-translate-y-1"
                                        title={Social.label}
                                    >
                                        <Social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Message Form with Web3Forms */}
                        <div className="flex-1 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium mb-1.5 ml-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all placeholder:text-gray-400"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1.5 ml-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all placeholder:text-gray-400"
                                        placeholder="your@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1.5 ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none placeholder:text-gray-400"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} />
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer with personality */}
                <footer className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Coffee size={14} />
                            <span>
                                Made with {coffeeCount > 0 ? `${coffeeCount} cups of coffee` : 'care'} and code
                            </span>
                            <Heart size={14} className="text-red-500" />
                        </div>

                        <p className="text-sm text-gray-500 mb-4">
                            © 2025 Waquar Shaikh
                        </p>
                    </div>
                </footer>
            </main>

            {/* Floating Navbar */}
            <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full shadow-lg">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors tooltip"
                        title="Home"
                    >
                        <Home size={20} />
                    </button>
                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-800"></div>
                    <a
                        href="https://github.com/waqar741"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shaikh-waquar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <div className="w-px h-4 bg-gray-200 dark:bg-gray-800"></div>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Portfolio;