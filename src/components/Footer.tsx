import { Coffee, Heart } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
    coffeeCount: number;
}

const Footer = ({ coffeeCount }: FooterProps) => {
    return (
        <footer className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <Coffee size={12} />
                    <span>
                        Made with {coffeeCount > 0 ? `${coffeeCount} cups of coffee` : 'care'} and code
                    </span>
                    <Heart size={12} className="text-red-500" />
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <Link href="/madeby" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">Built by Waquar Shaikh</Link>
                    <span>|</span>
                    <Link href="/faq" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">FAQ</Link>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-5">
                    © 2026 Waquar Shaikh
                </p>
            </div>
        </footer>
    );
};

export default Footer;
