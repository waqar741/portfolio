import { useState, useEffect, type FormEvent, useRef } from 'react';
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
    Download,
    Home,
    Send,
    ChevronUp,
    CheckCircle,
    XCircle
} from 'lucide-react';

// Toast Notification Component
const Toast = ({ message, type, onClose }: {
    message: string;
    type: 'success' | 'error';
    onClose: () => void
}) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed top-6 right-6 z-[1000] flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl transform transition-all duration-300 animate-slide-in-right ${type === 'success'
                ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
            }`}>
            {type === 'success' ? (
                <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
            ) : (
                <XCircle className="text-red-600 dark:text-red-400" size={20} />
            )}
            <span className="text-sm font-medium">{message}</span>
            <button
                onClick={onClose}
                className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
                ×
            </button>
        </div>
    );
};

const Portfolio = () => {
    // State for the Loading/Spotlight effect
    const [isLoading, setIsLoading] = useState(true);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // UI States
    const [darkMode, setDarkMode] = useState(true);
    const [coffeeCount, setCoffeeCount] = useState(0);
    const [filter, setFilter] = useState('All');

    // Terminal Typewriter States
    const [typingText, setTypingText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [hasStartedTyping, setHasStartedTyping] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Toast State
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    // Active section state for navbar
    const [activeSection, setActiveSection] = useState('hero');
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Refs for sections
    const heroRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const terminalLines = [
        "> npm init -y waquar_portfolio",
        "> git add skills.js",
        "> git commit -m 'add AI & Full Stack skills'",
        "> npm run build:innovative_solutions"
    ];

    // -------------------------------------------
    //  SCROLL REVEAL ANIMATION LOGIC
    // -------------------------------------------
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50px 0px -50px 0px',
            threshold: 0.1
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = document.querySelectorAll('.scroll-reveal');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    // -------------------------------------------
    //  ACTIVE SECTION DETECTION
    // -------------------------------------------
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);

            const sections = [
                { id: 'hero', ref: heroRef },
                { id: 'skills', ref: skillsRef },
                { id: 'projects', ref: projectsRef },
                { id: 'experience', ref: experienceRef },
                { id: 'contact', ref: contactRef }
            ];

            const currentSection = sections.find(section => {
                if (section.ref.current) {
                    const rect = section.ref.current.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // -------------------------------------------
    //  MOUSE & TOUCH TRACKING (Spotlight Logic)
    // -------------------------------------------
    useEffect(() => {
        const updatePos = (clientX: number, clientY: number) => {
            setMousePos({ x: clientX, y: clientY });
        };

        const handleMouseMove = (e: MouseEvent) => updatePos(e.clientX, e.clientY);
        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            updatePos(touch.clientX, touch.clientY);
        };

        if (isLoading) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleTouchMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isLoading]);

    // -------------------------------------------
    //  TERMINAL TYPING LOGIC
    // -------------------------------------------
    useEffect(() => {
        if (isLoading) return;

        if (!hasStartedTyping) {
            const startTimeout = setTimeout(() => setHasStartedTyping(true), 500);
            return () => clearTimeout(startTimeout);
        }

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
    }, [typingText, currentLine, isLoading, hasStartedTyping]);

    // Theme Toggle
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Prevent scrolling while spotlight is active
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isLoading]);

    // Handle Form Submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
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

            if (result.success) {
                setToast({ message: "Message sent successfully!", type: 'success' });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setToast({ message: "Something went wrong. Please try again.", type: 'error' });
            }
        } catch (error) {
            setToast({ message: "Network error. Please check your connection.", type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Tilt effect handler
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((x - centerX) / centerX) * 2;
        const rotateX = ((centerY - y) / centerY) * 2;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    // -------------------------------------------
    //  DATA
    // -------------------------------------------
    const projects = [
        {
            title: "AI Adaptive Honeypot",
            year: "2025",
            desc: "Proactive defense using AI to detect and deceive attackers. Features real-time threat analysis and adaptive response.",
            stack: ["Python", "ML", "Security", "AI"],
            github: "https://github.com/waqar741",
            live: "#",
            status: "In Progress",
            category: "AI/ML"
        },
        {
            title: "Fintrac Finance",
            year: "2024",
            desc: "Full-stack finance app with TypeScript & Supabase. Real-time expense tracking and secure authentication.",
            stack: ["TypeScript", "Supabase", "React"],
            github: "https://github.com/waqar741",
            live: "https://fintrac-money.vercel.app/",
            status: "Completed",
            category: "Web Dev"
        },
        {
            title: "Railway Concession",
            year: "2024",
            desc: "Automated concession generation system with secure login, digital verification, and centralized database.",
            stack: ["React", "Node", "Firebase"],
            github: "https://github.com/waqar741",
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
            live: "#",
            status: "Completed",
            category: "Web Dev"
        },
        {
            title: "Cuisine Web Scraper",
            year: "2023",
            desc: "Python scraper using BeautifulSoup to gather comprehensive data on Indian cuisine recipes.",
            stack: ["Python", "BS4", "Data"],
            github: "https://github.com/waqar741",
            live: "#",
            status: "Completed",
            category: "AI/ML"
        },
        {
            title: "Face Rec. Attendance",
            year: "2022",
            desc: "Automated attendance tracking using Python, OpenCV for face recognition and SQL for data storage.",
            stack: ["Python", "OpenCV", "SQL"],
            github: "https://github.com/waqar741",
            live: "#",
            status: "Completed",
            category: "AI/ML"
        }
    ];

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    const experience = [
        {
            company: "HealthFirstPriority",
            role: "AI Engineer Intern",
            date: "Aug 2025 – Present",
            details: "Researching distributed LLM architectures for inference optimization. Testing model sharding across decentralized systems.",
            tech: ["LLMs", "Distributed Systems", "Python", "AI Research"],
            logo: "https://ui-avatars.com/api/?name=HFP&background=000&color=fff&size=128"
        }
    ];

    const skills = [
        { icon: <Terminal size={20} />, label: "Python & Java", desc: "Backend Logic" },
        { icon: <Code2 size={20} />, label: "React & JS", desc: "Frontend Magic" },
        { icon: <Palette size={20} />, label: "HTML & CSS", desc: "UI/UX Design" },
        { icon: <Coffee size={20} />, label: "Problem Solving", desc: "DSA & Logic" }
    ];

    const techStack = [
        "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js",
        "Python", "Java", "Vite", "TailwindCSS", "MongoDB", "PostgreSQL",
        "Firebase", "AWS", "Docker", "Git", "GitHub", "Linux"
    ];

    const education = [
        {
            institution: "Terna Engineering College",
            degree: "B.E. Computer Engineering",
            duration: "2022 - 2026",
            location: "Navi Mumbai",
            // grade: "CGPA: 7.5+",
            keyCourses: ["DSA", "DBMS", "AI", "CN"],
            logo: "https://ui-avatars.com/api/?name=TEC&background=fff&color=000&size=128"
        },
        {
            institution: "Shiravane Vidyalaya",
            degree: "HSC (Science)",
            duration: "2020 - 2022",
            location: "Navi Mumbai",
            // grade: "75%",
            keyCourses: [],
            logo: "https://ui-avatars.com/api/?name=SV&background=fff&color=000&size=128"
        },
        {
            institution: "Shiravane Vidyalaya",
            degree: "SSC",
            duration: "2019 - 2020",
            location: "Navi Mumbai",
            // grade: "85%",
            keyCourses: [],
            logo: "https://ui-avatars.com/api/?name=SV&background=fff&color=000&size=128"
        }
    ];

    const certifications = [
        {
            title: "React JS: Beginner to Expert",
            year: "2025",
            provider: "Online Course"
        },
    ];

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Spotlight Overlay */}
            {isLoading && (
                <div
                    className="fixed inset-0 z-[100] cursor-none flex items-end justify-center pb-20 touch-none"
                    onClick={() => setIsLoading(false)}
                    style={{
                        background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0, 0, 0, 0.98) 100%)`
                    }}
                >
                    <div className="text-white/50 font-mono animate-pulse pointer-events-none mb-10 text-center px-4">
                        Tap or Click anywhere to enter
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-difference text-white opacity-20 text-4xl font-bold uppercase tracking-widest text-center px-4">
                        Check out my<br />best work
                    </div>
                </div>
            )}

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-24 right-4 md:right-6 z-50 p-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform hover:bg-white dark:hover:bg-black"
                >
                    <ChevronUp size={20} />
                </button>
            )}

            <div className={`min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans transition-all duration-1000 ease-out`}>
                <div
                    className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]"
                    style={{
                        backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"%3E%3C/path%3E%3C/svg%3E')`
                    }}
                ></div>

                <main className="relative max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-12">

                    {/* Header */}
                    <header ref={heroRef} id="hero" className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
                        <div className={`flex items-center gap-3 transition-all duration-1000 transform ${isLoading ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}>
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-black dark:border-white overflow-hidden relative group">
                                <img
                                    src="images/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Hi, I'm Waquar</h1>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                    <MapPin size={10} />
                                    Mumbai • Software Developer
                                </p>
                            </div>
                        </div>

                        <div className={`flex items-center gap-2 sm:gap-3 transition-all duration-1000 delay-200 transform ${isLoading ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}>
                            <a
                                href="/MyResume.pdf"
                                download
                                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
                            >
                                <Download size={14} />
                                <span className="hidden sm:inline">Resume</span>
                            </a>

                            <button
                                onClick={() => setCoffeeCount(prev => prev + 1)}
                                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors group"
                            >
                                <Coffee size={14} className="group-hover:rotate-12 transition-transform" />
                                <span className="text-sm">
                                    {coffeeCount}
                                </span>
                            </button>

                            <a
                                href="#contact"
                                className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center"
                                aria-label="Contact"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </header>

                    {/* Terminal */}
                    <div className="mb-8 sm:mb-12 p-3 sm:p-4 bg-black dark:bg-gray-900 rounded-lg border border-gray-800 dark:border-gray-700 font-mono text-xs sm:text-sm shadow-xl animate-fade-in-up">
                        <div className="flex items-center gap-2 mb-3 text-green-400">
                            <Terminal size={14} />
                            <span>~/portfolio</span>
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="h-16 sm:h-20 overflow-hidden">
                            {terminalLines.slice(0, currentLine + 1).map((line, idx) => (
                                <div key={idx} className="text-gray-300">
                                    {!hasStartedTyping && idx === 0
                                        ? <span className="animate-pulse">_</span>
                                        : (idx === currentLine ? typingText + '▋' : line)
                                    }
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero section */}
                    <section className="mb-12 sm:mb-16 animate-fade-in-up">
                        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                            <div className="flex-1">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    I build things for the web,
                                    <span className="block text-gray-600 dark:text-gray-400 font-normal">
                                        one <span className="">bug</span> at a time.
                                    </span>
                                </h2>

                                <p className="text-base sm:text-lg mb-6 leading-relaxed">
                                    Computer Engineering student by day,{' '}
                                    <span className="">full-stack developer</span>{' '}
                                    by night. I believe the best products come from solving{' '}
                                    <span className="">real problems</span>.
                                </p>

                                {/* Skills - Grid Cols 2 Fixed for Mobile */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {skills.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex flex-row items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-500 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                                }`}
                                            style={{ transitionDelay: `${idx * 50}ms` }}
                                        >
                                            <div className="text-black dark:text-white flex-shrink-0">
                                                {skill.icon}
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm font-medium leading-tight">{skill.label}</div>
                                                <div className="text-[10px] sm:text-xs text-gray-500">{skill.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="w-full md:w-64">
                                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800">
                                    <h3 className="font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                                        <Palette size={14} />
                                        Quick Stats
                                    </h3>
                                    <div className="space-y-2 sm:space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">Current Role</span>
                                            <span className="font-mono">AI Intern</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">Focus</span>
                                            <span className="font-mono">Distributed LLMs</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">Location</span>
                                            <span>Mumbai, IN</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">Coffee Level</span>
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

                    {/* Technical Skills */}
                    <section ref={skillsRef} id="skills" className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 scroll-reveal">
                            <Code2 size={20} />
                            Technical Skills
                        </h2>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className={`scroll-reveal px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-xs sm:text-sm font-medium hover:border-black dark:hover:border-white transition-all duration-500 cursor-default ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                        }`}
                                    style={{ transitionDelay: `${idx * 20}ms` }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section ref={projectsRef} id="projects" className="mb-12 sm:mb-16">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 scroll-reveal">
                                <Code2 size={20} />
                                Things I've Built
                            </h2>

                            <div className="flex bg-gray-100 dark:bg-gray-900 p-1 rounded-full border border-gray-200 dark:border-gray-800 scroll-reveal w-full sm:w-auto">
                                {['All', 'Web Dev', 'AI/ML'].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setFilter(category)}
                                        className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${filter === category
                                            ? 'bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm'
                                            : 'text-gray-500 hover:text-black dark:hover:text-white'
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

                    {/* Unified Experience, Education & Certs Layout */}
                    <div ref={experienceRef} id="experience" className="mb-12 sm:mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Left Column: Experience */}
                            <div className="space-y-6">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 scroll-reveal">
                                    <Briefcase size={20} />
                                    Experience
                                </h2>

                                <div className="relative space-y-8">
                                    {/* Vertical Connecting Line - Centered relative to 56px logo (Left-27px) */}
                                    <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gray-200 dark:bg-gray-800" />

                                    {experience.map((job, idx) => (
                                        <div key={idx} className="scroll-reveal flex gap-4 items-start relative z-10">
                                            <div className="w-14 h-14 flex-shrink-0 rounded-full border-4 border-white dark:border-black bg-white overflow-hidden shadow-sm">
                                                <img
                                                    src={job.logo}
                                                    alt={job.company}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <div className="pt-1">
                                                <h3 className="font-bold text-base">{job.role}</h3>
                                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{job.company}</div>
                                                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{job.date}</div>

                                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                                                    {job.details}
                                                </p>

                                                <div className="flex flex-wrap gap-1.5">
                                                    {job.tech.map(t => (
                                                        <span key={t} className="px-1.5 py-0.5 text-[10px] bg-gray-100 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-800">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Education & Certifications */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 scroll-reveal">
                                        <GraduationCap size={20} />
                                        Education
                                    </h2>

                                    <div className="relative space-y-8">
                                        {/* Vertical Connecting Line */}
                                        <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gray-200 dark:bg-gray-800" />

                                        {education.map((edu, idx) => (
                                            <div key={idx} className="scroll-reveal flex gap-4 items-start relative z-10">
                                                <div className="w-14 h-14 flex-shrink-0 rounded-full border-4 border-white dark:border-black bg-white overflow-hidden shadow-sm">
                                                    <img
                                                        src={edu.logo}
                                                        alt={edu.institution}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>

                                                <div className="flex-1 pt-1">
                                                    <h3 className="font-bold text-sm">{edu.institution}</h3>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">{edu.degree}</p>
                                                    <div className="flex justify-between items-center mt-1">
                                                        <span className="text-xs text-gray-500">{edu.duration}</span>
                                                        {/* <span className="text-xs font-medium text-green-600 dark:text-green-400">{edu.grade}</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 scroll-reveal">
                                        <Trophy size={20} />
                                        Certifications
                                    </h2>
                                    <div className="grid grid-cols-1 gap-3">
                                        {certifications.map((cert, idx) => (
                                            <div key={idx} className="scroll-reveal p-3 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-colors bg-gray-50/50 dark:bg-gray-900/50">
                                                <h3 className="font-bold text-sm">{cert.title}</h3>
                                                <div className="flex justify-between mt-1 text-xs text-gray-500">
                                                    <span>{cert.provider}</span>
                                                    <span>{cert.year}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <section ref={contactRef} id="contact" className="mb-16 sm:mb-24">
                        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
                            <div className="flex-1 text-left space-y-4 sm:space-y-6">
                                <h3 className="text-2xl sm:text-3xl font-bold scroll-reveal">Let's make something cool</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed scroll-reveal text-sm sm:text-base">
                                    Driven IT engineer skilled in software development. Always aiming to create effective solutions.
                                    Have a project in mind or just want to say hi? I'm always open to discussing new ideas.
                                </p>

                                <div className="space-y-3 pt-2">
                                    <a href="mailto:ahmu741@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group scroll-reveal">
                                        <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform">
                                            <Mail size={16} />
                                        </div>
                                        <span className="font-medium text-sm sm:text-base">ahmu741@gmail.com</span>
                                    </a>
                                    <a href="tel:7021396917" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group scroll-reveal">
                                        <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform">
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">📞</div>
                                        </div>
                                        <span className="font-medium text-sm sm:text-base">+91 7021396917</span>
                                    </a>
                                </div>

                                <div className="flex gap-2 sm:gap-3 pt-4">
                                    {[
                                        { icon: Github, href: "https://github.com/waqar741", label: "GitHub" },
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/shaikh-waquar", label: "LinkedIn" },
                                    ].map((Social, idx) => (
                                        <a
                                            key={idx}
                                            href={Social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-900 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:-translate-y-1 scroll-reveal"
                                            title={Social.label}
                                        >
                                            <Social.icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 scroll-reveal">
                                <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 ml-1">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all placeholder:text-gray-400 text-sm"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 ml-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all placeholder:text-gray-400 text-sm"
                                            placeholder="your@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 ml-1">Message</label>
                                        <textarea
                                            rows={3}
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none placeholder:text-gray-400 text-sm"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>
                                    <button
                                        disabled={isSubmitting}
                                        className="scroll-reveal w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                    >
                                        <Send size={16} />
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    <footer className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                        <div className="flex flex-col items-center gap-3 sm:gap-4">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                <Coffee size={12} />
                                <span>
                                    Made with {coffeeCount > 0 ? `${coffeeCount} cups of coffee` : 'care'} and code
                                </span>
                                <Heart size={12} className="text-red-500" />
                            </div>

                            <p className="text-xs sm:text-sm text-gray-500 mb-5">
                                © 2025 Waquar Shaikh
                            </p>
                        </div>
                    </footer>
                </main>
            </div>

            {/* Floating Navbar */}
            {!isLoading && (
                <div className="fixed bottom-4 sm:bottom-2 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-auto">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full shadow-lg mx-auto max-w-max">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className={`p-1.5 sm:p-2 rounded-full transition-colors ${activeSection === 'hero' ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            <Home size={16} />
                        </button>

                        <button
                            onClick={() => scrollToSection('skills')}
                            className={`p-1.5 sm:p-2 rounded-full transition-colors ${activeSection === 'skills' ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            <Code2 size={16} />
                        </button>

                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`p-1.5 sm:p-2 rounded-full transition-colors ${activeSection === 'projects' ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            <Briefcase size={16} />
                        </button>

                        <button
                            onClick={() => scrollToSection('experience')}
                            className={`p-1.5 sm:p-2 rounded-full transition-colors ${activeSection === 'experience' ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            <GraduationCap size={16} />
                        </button>

                        <div className="w-px h-4 bg-gray-200 dark:bg-gray-800 mx-1"></div>

                        <a
                            href="https://github.com/waqar741"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <Github size={16} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/shaikh-waquar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <Linkedin size={16} />
                        </a>

                        <div className="w-px h-4 bg-gray-200 dark:bg-gray-800 mx-1"></div>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                
                .animate-slide-in-right {
                    animation: slideInRight 0.3s ease-out forwards;
                }
                
                .scroll-reveal {
                    opacity: 0;
                }
                
                .scroll-reveal:nth-child(1) { animation-delay: 0.1s; }
                .scroll-reveal:nth-child(2) { animation-delay: 0.2s; }
                .scroll-reveal:nth-child(3) { animation-delay: 0.3s; }
                .scroll-reveal:nth-child(4) { animation-delay: 0.4s; }
            `}</style>
        </>
    );
};

export default Portfolio;