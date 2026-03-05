import { MapPin, Download, Coffee, Mail } from 'lucide-react';
import React from 'react';

interface HeroProps {
    heroRef: React.RefObject<HTMLDivElement | null>; // More robust React ref type
    isLoading: boolean;
    coffeeCount: number;
    setCoffeeCount: React.Dispatch<React.SetStateAction<number>>;
}

const Hero = ({ heroRef, isLoading, coffeeCount, setCoffeeCount }: HeroProps) => {
    return (
        <>
            {/* Header */}
            <header ref={heroRef} id="hero" className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
                <div className={`flex items-center gap-3 transition-all duration-1000 transform ${isLoading ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-black dark:border-white overflow-hidden relative group">
                        <img
                            src="images/profile.png"
                            alt="Waquar Shaikh - Full Stack Developer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Sunglasses Easter Egg */}
                        <div
                            className={`absolute top-1/4 left-0 right-0 flex justify-center transition-all duration-700 pointer-events-none z-10 ${coffeeCount >= 5 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-0'}`}
                        >
                            <svg width="40" height="15" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15L15 10H85L95 15M5 15C5 25 15 35 30 35C45 35 48 20 50 20C52 20 55 35 70 35C85 35 95 25 95 15M5 15H95" stroke="currentColor" strokeWidth="4" className="text-black dark:text-white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 15C5 25 15 35 30 35C45 35 48 20 50 20C52 20 55 35 70 35C85 35 95 25 95 15H5Z" fill="currentColor" fillOpacity="0.8" className="text-black dark:text-gray-900" />
                            </svg>
                        </div>
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
                        href="/Waquar-Resume.pdf"
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
        </>
    );
};

export default Hero;
