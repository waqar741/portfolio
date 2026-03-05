import { useState, useEffect, type FormEvent, useRef } from 'react';
import { Palette, Coffee, Terminal, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

import Toast from './components/Toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

const Portfolio = () => {
    // State for the Loading/Spotlight effect
    const [isLoading, setIsLoading] = useState(true);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile screens to disable some heavy animations/features natively
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // Check on init
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // UI States
    const [darkMode, setDarkMode] = useState(true);
    const [coffeeCount, setCoffeeCount] = useState(0);

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Toast State
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    // Bug Easter Egg State
    const [bugPos, setBugPos] = useState({ x: -100, y: -100, visible: false, dead: false });

    // Active section state for navbar
    const [activeSection, setActiveSection] = useState('hero');
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Refs for sections
    const heroRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

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

    // Bug movement logic (appears after 15 coffees)
    useEffect(() => {
        if (coffeeCount >= 15 && !bugPos.dead) {
            if (!bugPos.visible) {
                // Spawn the bug just outside the viewport
                setBugPos({ x: -50, y: window.innerHeight / 2, visible: true, dead: false });
            }

            const moveBug = setInterval(() => {
                setBugPos(prev => {
                    if (prev.dead) return prev;
                    if (prev.x > window.innerWidth + 50) {
                        return { ...prev, x: -50, y: Math.random() * window.innerHeight };
                    }
                    return {
                        ...prev,
                        x: prev.x + (Math.random() * 5 + 5), // move right
                        y: prev.y + (Math.random() * 10 - 5) // wobble up/down
                    };
                });
            }, 50);

            return () => clearInterval(moveBug);
        }
    }, [coffeeCount, bugPos.dead, bugPos.visible]);

    const handleSquashBug = () => {
        setBugPos(prev => ({ ...prev, dead: true }));
        setToast({ message: "Bug Squashed! 🐛🔨", type: 'success' });
    };

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

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const skills = [
        { icon: <Terminal size={20} />, label: "Python & Java", desc: "Backend Logic" },
        { icon: <Code2 size={20} />, label: "React & JS", desc: "Frontend Magic" },
        { icon: <Palette size={20} />, label: "HTML & CSS", desc: "UI/UX Design" },
        { icon: <Coffee size={20} />, label: "Problem Solving", desc: "DSA & Logic" }
    ];

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
                    <div className="rotate-180">
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-black dark:border-t-white border-r-[6px] border-r-transparent"></div>
                    </div>
                </button>
            )}

            {/* The Squishable Bug (Easter Egg) */}
            {bugPos.visible && (
                <button
                    onClick={handleSquashBug}
                    className={`fixed z-[200] transition-transform duration-75 p-2 ${bugPos.dead ? 'pointer-events-none' : 'cursor-crosshair'}`}
                    style={{
                        left: bugPos.x,
                        top: bugPos.y,
                        transform: `translate(-50%, -50%) ${bugPos.dead ? 'scale(1.5) rotate(45deg)' : ''}`
                    }}
                >
                    <span className="text-2xl drop-shadow-md select-none pointer-events-none">
                        {bugPos.dead ? '💥' : '🪲'}
                    </span>
                </button>
            )}

            <div className={`min-h-screen ${(coffeeCount >= 10 && darkMode) ? 'bg-slate-950 text-slate-100' : 'bg-white dark:bg-black text-gray-900 dark:text-gray-100'} font-sans transition-colors duration-1000 ease-out`}>

                {/* Advanced Interactive Particle Background */}
                <div className={`transition-opacity duration-1000 ${(coffeeCount >= 10 && darkMode) ? 'opacity-0' : 'opacity-100'}`}>
                    <ParticleCanvas darkMode={darkMode} />
                </div>

                {/* Starry night background (Easter Egg) */}
                <div
                    className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${(coffeeCount >= 10 && darkMode) ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Simplified CSS stars */}
                    <div className="absolute inset-0 z-0 opacity-50" style={{
                        backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #ffffff, rgba(0,0,0,0))`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '200px 200px'
                    }}></div>
                    <div className="absolute inset-0 z-0 opacity-30" style={{
                        backgroundImage: `radial-gradient(1.5px 1.5px at 10px 150px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 60px 10px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 110px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 180px 40px, #ffffff, rgba(0,0,0,0))`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '300px 300px',
                        animation: 'twinkle 4s infinite alternate'
                    }}></div>
                </div>

                <main className="relative max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-12">

                    <Hero
                        heroRef={heroRef}
                        isLoading={isLoading}
                        coffeeCount={coffeeCount}
                        setCoffeeCount={setCoffeeCount}
                    />


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
                                        <motion.div
                                            key={idx}
                                            drag={!isMobile}
                                            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                                            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                                            className={`flex flex-row items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 ${isMobile ? '' : 'cursor-grab'} z-10 transition-colors ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                                }`}
                                            // Keep animation delay but remove transition-all which fights with framer-motion's transform
                                            style={{ animationDelay: `${idx * 50}ms` }}
                                        >
                                            <div className="text-black dark:text-white flex-shrink-0 pointer-events-none">
                                                {skill.icon}
                                            </div>
                                            <div className="text-left pointer-events-none">
                                                <div className="text-sm font-medium leading-tight">{skill.label}</div>
                                                <div className="text-[10px] sm:text-xs text-gray-500">{skill.desc}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <motion.div
                                drag={!isMobile}
                                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                                whileDrag={{ scale: 1.05, rotate: 2, cursor: "grabbing" }}
                                className={`w-full md:w-64 z-20 ${isMobile ? '' : 'cursor-grab'}`}
                            >
                                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
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
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <Skills skillsRef={skillsRef} isLoading={isLoading} />

                    <Projects
                        projectsRef={projectsRef}
                        handleMouseMove={handleMouseMove}
                        handleMouseLeave={handleMouseLeave}
                    />

                    <Experience experienceRef={experienceRef} />

                    <Contact
                        contactRef={contactRef}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                    />

                    <Footer coffeeCount={coffeeCount} />
                </main>
            </div>

            <Navbar
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                isLoading={isLoading}
            />

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