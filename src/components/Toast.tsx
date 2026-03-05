import { useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
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

export default Toast;
