import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Loader2, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';

interface VerificationData {
  schema: string;
  developer: string;
  developer_id: string;
  project: string;
  website: string;
  year: number;
  madeby?: string;
}

const MadeBy = () => {
    const [url, setUrl] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'verified' | 'not-found' | 'invalid' | 'error'>('idle');
    const [verificationData, setVerificationData] = useState<VerificationData | null>(null);

    useEffect(() => {
        document.documentElement.classList.add('dark');
        window.scrollTo(0, 0);
    }, []);

    const normalizeUrl = (input: string) => {
        let normalized = input.trim();
        if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
            normalized = 'https://' + normalized;
        }
        try {
            const parsed = new URL(normalized);
            return parsed.origin;
        } catch (e) {
            return null;
        }
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;
        
        const targetOrigin = normalizeUrl(url);
        if (!targetOrigin) {
            setStatus('error');
            return;
        }
        
        setStatus('loading');
        setVerificationData(null);
        
        try {
            const response = await fetch(`${targetOrigin}/.well-known/waquar-verification.json`);
            
            if (response.status === 404) {
                setStatus('not-found');
                return;
            }
            
            if (!response.ok) {
                setStatus('error');
                return;
            }
            
            const data = await response.json();
            
            // Validation
            if (
                data.schema !== 'waquar-developer-verification/v1' ||
                data.developer_id !== 'waquar741' ||
                data.developer !== 'Waquar Shaikh' ||
                !data.project ||
                !data.website ||
                !data.year
            ) {
                setStatus('invalid');
                return;
            }

            // Domain validation
            try {
                const dataOrigin = new URL(data.website).origin;
                if (dataOrigin !== targetOrigin) {
                    setStatus('invalid');
                    return;
                }
            } catch (e) {
                setStatus('invalid');
                return;
            }
            
            setVerificationData(data);
            setStatus('verified');
            
        } catch (error) {
            // This captures network errors, CORS errors, or JSON parsing errors
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans relative flex flex-col items-center justify-center p-6">
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <ParticleCanvas darkMode={true} />
            </div>

            <Link to="/" className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-sm text-gray-400 hover:text-white">
                <ArrowLeft size={14} />
                <span>Return</span>
            </Link>

            <main className="relative z-10 w-full max-w-md mx-auto">
                <div className="bg-[#111] rounded-xl border border-white/10 shadow-2xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                            <Shield size={18} className="text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-white">Verification Engine</h1>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Authenticity Protocol</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                        Enter a website URL to check whether it contains a valid developer attribution issued for Waquar Shaikh.
                    </p>

                    <form onSubmit={handleVerify} className="space-y-3">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => {
                                setUrl(e.target.value);
                                if (status !== 'idle') setStatus('idle');
                            }}
                            placeholder="e.g., textbookpdf.vercel.app"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            disabled={!url.trim() || status === 'loading'}
                            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-white/5 disabled:text-gray-500 disabled:cursor-not-allowed text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 size={14} className="animate-spin" />
                                    Verifying Website...
                                </>
                            ) : (
                                'Verify'
                            )}
                        </button>
                    </form>

                    {/* Results Area */}
                    {status === 'verified' && verificationData && (
                        <div className="mt-5 p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-fade-in-up">
                            <div className="flex items-start gap-3 mb-4">
                                <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" />
                                <div>
                                    <h3 className="text-sm font-medium text-green-400 mb-0.5">✓ Developer Attribution Found</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">This website contains a valid developer attribution for Waquar Shaikh.</p>
                                </div>
                            </div>
                            
                            <div className="bg-black/40 rounded border border-white/5 p-3 mb-4 space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Project</span>
                                    <span className="text-xs text-gray-200 font-medium truncate max-w-[60%] text-right">{verificationData.project}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Website</span>
                                    <span className="text-xs text-gray-200 font-medium truncate max-w-[60%] text-right">{new URL(verificationData.website).hostname}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Year</span>
                                    <span className="text-xs text-gray-200 font-medium">{verificationData.year}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">ID</span>
                                    <span className="text-xs text-blue-400 font-mono">{verificationData.developer_id}</span>
                                </div>
                            </div>

                            {verificationData.madeby && (
                                <a 
                                    href={`${new URL(verificationData.website).origin}${verificationData.madeby}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-xs text-gray-300 hover:text-white transition-colors"
                                >
                                    View Developer Attribution <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                    )}

                    {status === 'not-found' && (
                        <div className="mt-5 p-3.5 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 animate-fade-in-up">
                            <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                            <div>
                                <h3 className="text-sm font-medium text-red-400 mb-0.5">No Developer Attribution Found</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">We couldn't find a valid Waquar Shaikh developer verification file on this website.</p>
                            </div>
                        </div>
                    )}

                    {status === 'invalid' && (
                        <div className="mt-5 p-3.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3 animate-fade-in-up">
                            <XCircle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                            <div>
                                <h3 className="text-sm font-medium text-yellow-400 mb-0.5">Verification Failed</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">The website contains a developer verification file, but the information could not be validated.</p>
                            </div>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="mt-5 p-3.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3 animate-fade-in-up">
                            <XCircle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                            <div>
                                <h3 className="text-sm font-medium text-yellow-400 mb-0.5">Unable to Verify</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">We couldn't reach the website verification endpoint. Please check the URL and try again.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6 text-center">
                    <p className="text-[10px] text-gray-600 font-mono">
                        Waquar Ahmed Shaikh &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </main>
        </div>
    );
};

export default MadeBy;