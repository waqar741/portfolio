import { Home, Code2, Briefcase, GraduationCap, Github, Linkedin, Sun, Moon } from 'lucide-react';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    isLoading: boolean;
}

const Navbar = ({ activeSection, scrollToSection, darkMode, setDarkMode, isLoading }: NavbarProps) => {
    if (isLoading) return null;

    return (
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
    );
};

export default Navbar;
