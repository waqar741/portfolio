"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleCanvas = dynamic(() => import('../components/ParticleCanvas'), {
    ssr: false,
});
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useTheme } from 'next-themes';

const FaqPage = () => {
    const router = useRouter();
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

    const scrollToSection = (id: string) => {
        if (id === 'faq') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push(`/?section=${id}`);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'} font-sans transition-colors duration-500`}>
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none opacity-50 z-0">
                <ParticleCanvas darkMode={isDark} />
            </div>

            {/* Header / Nav */}
            <header className="relative z-50 p-2 sm:p-4 flex items-center justify-between">
                <Link 
                    href="/" 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                >
                    <ArrowLeft size={16} />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </header>

            <main className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 pt-2 pb-24">
                <section className="mb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h1>
                        <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4 hidden sm:block"></div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                            <h2 className="text-xl font-bold mb-2">Who is Waquar Shaikh?</h2>
                            <p className="text-gray-700 dark:text-gray-300">Waquar Shaikh is a Computer Engineering graduate and a full-stack software engineer specializing in high-performance web applications and API development.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                            <h2 className="text-xl font-bold mb-2">What technologies does he use?</h2>
                            <p className="text-gray-700 dark:text-gray-300">He builds applications primarily using React.js, Next.js, TypeScript, Python, FastAPI, and PostgreSQL.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                            <h2 className="text-xl font-bold mb-2">Where is he based?</h2>
                            <p className="text-gray-700 dark:text-gray-300">He is based in Navi Mumbai, Maharashtra, India.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                            <h2 className="text-xl font-bold mb-2">What projects has he built?</h2>
                            <p className="text-gray-700 dark:text-gray-300">He has developed over 14 production projects including the ServiceTrack CMMS, FoodSetu, and clinical AI platforms like MeshMind.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                            <h2 className="text-xl font-bold mb-2">Is he available for work and how can I contact him?</h2>
                            <p className="text-gray-700 dark:text-gray-300">Yes, he is actively open to software engineering and frontend roles. You can contact him via shaikhwaquar.dev@gmail.com or through the <Link href="/#contact" className="text-blue-500 hover:underline">contact form on the home page</Link>.</p>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer coffeeCount={0} />
            <Navbar 
                activeSection="faq" 
                scrollToSection={scrollToSection} 
                isLoading={false} 
            />
        </div>
    );
};

export default FaqPage;
