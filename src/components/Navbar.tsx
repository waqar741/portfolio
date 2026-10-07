import { Home, Code2, Briefcase, GraduationCap, Sun, Moon } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
    isLoading: boolean;
}

const Navbar = ({ activeSection, scrollToSection, isLoading }: NavbarProps) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (isLoading) return null;

    const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

    return (
        <div className="fixed bottom-4 sm:bottom-2 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-auto">
            <div className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full shadow-lg mx-auto max-w-max">
                <button
                    onClick={() => scrollToSection('hero')}
                    className={`p-1.5 sm:p-2 rounded-full transition-colors ${activeSection === 'hero' ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    aria-label="Home"
                >
                    <Home size={16} />
                </button>

                <button
                    onClick={() => scrollToSection('skills')}
                    className={`p-1.5 sm:p-2 rounded-full transition-colors ${activeSection === 'skills' ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    aria-label="Skills"
                >
                    <Code2 size={16} />
                </button>

                <button
                    onClick={() => scrollToSection('projects')}
                    className={`p-1.5 sm:p-2 rounded-full transition-colors ${activeSection === 'projects' ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    aria-label="Projects"
                >
                    <Briefcase size={16} />
                </button>

                <button
                    onClick={() => scrollToSection('experience')}
                    className={`p-1.5 sm:p-2 rounded-full transition-colors ${activeSection === 'experience' ? 'bg-black dark:bg-white text-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    aria-label="Experience"
                >
                    <GraduationCap size={16} />
                </button>

                <div className="w-px h-4 bg-gray-200 dark:bg-gray-800 mx-1"></div>

                <a
                    href="https://github.com/waqar741"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="GitHub Profile"
                >
                    <Github size={16} />
                </a>

                <a
                    href="https://www.linkedin.com/in/shaikh-waquar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="LinkedIn Profile"
                >
                    <Linkedin size={16} />
                </a>

                <div className="w-px h-4 bg-gray-200 dark:bg-gray-800 mx-1"></div>

                <button
                    onClick={() => setTheme(isDark ? 'light' : 'dark')}
                    className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle Theme"
                >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
