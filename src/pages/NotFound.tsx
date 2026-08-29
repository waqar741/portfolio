import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans relative flex flex-col items-center justify-center p-6 text-center">
            <div className="absolute inset-0 z-0">
                <ParticleCanvas darkMode={true} />
            </div>

            <div className="relative z-10 animate-fade-in-up">
                <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4 text-black dark:text-white">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Page Not Found
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    Oops! It looks like you're lost. The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                    <Home size={18} />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
