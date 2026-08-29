import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Loader2, CheckCircle2, XCircle, Code, Copy, Check } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';

const MadeBy = () => {
    const [url, setUrl] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'verified' | 'unverified' | 'error'>('idle');
    const [copied1, setCopied1] = useState(false);
    const [copied2, setCopied2] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add('dark');
        window.scrollTo(0, 0);
    }, []);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        let targetUrl = url.trim();
        if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
            targetUrl = 'https://' + targetUrl;
        }

        setStatus('loading');

        try {
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
            const response = await fetch(proxyUrl);

            if (!response.ok) throw new Error('Network error');

            const data = await response.json();
            const html = data.contents;

            if (!html) throw new Error('No content');

            const metaAuthorRegex = /<meta\s+name=["']author["']\s+content=["'][^"']*Waquar[^"']*["']\s*\/?>/i;
            const customKeyRegex = /waquar-signature-741/i;

            if (metaAuthorRegex.test(html) || customKeyRegex.test(html)) {
                setStatus('verified');
            } else {
                setStatus('unverified');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const copyCode = async (code: string, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            await navigator.clipboard.writeText(code);
            setter(true);
            setTimeout(() => setter(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    const code1 = `<meta name="author" content="Waquar Ahmed Shaikh" />`;
    const code2 = `<!-- waquar-signature-741 -->`;

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
                        Enter a website URL below. The engine will scan the source code for my encrypted cryptographic signature.
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
                                    Scanning Source...
                                </>
                            ) : (
                                'Scan & Verify'
                            )}
                        </button>
                    </form>

                    {status === 'verified' && (
                        <div className="mt-5 p-3.5 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" />
                            <div>
                                <h3 className="text-sm font-medium text-green-400 mb-0.5">Signature Verified</h3>
                                <p className="text-xs text-gray-400">Authentic project engineered by Waquar Ahmed Shaikh.</p>
                            </div>
                        </div>
                    )}

                    {status === 'unverified' && (
                        <div className="mt-5 p-3.5 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                            <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                            <div>
                                <h3 className="text-sm font-medium text-red-400 mb-0.5">Signature Not Found</h3>
                                <p className="text-xs text-gray-400">This website does not contain a valid creator signature.</p>
                            </div>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="mt-5 p-3.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3">
                            <XCircle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                            <div>
                                <h3 className="text-sm font-medium text-yellow-400 mb-0.5">Connection Error</h3>
                                <p className="text-xs text-gray-400">Could not connect to the URL. Ensure it is publicly accessible.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-[#111] rounded-xl border border-white/5 p-4">
                    <h4 className="text-xs font-semibold text-gray-300 flex items-center gap-2 mb-2.5">
                        <Code size={13} className="text-blue-400" /> For Developers (How to implement)
                    </h4>
                    <p className="text-xs text-gray-500 mb-3">
                        To make a client's website verifiable, add either of these to their HTML <code className="text-gray-400 bg-white/5 px-1 rounded">&lt;head&gt;</code>:
                    </p>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between bg-black/50 border border-white/5 rounded-lg p-2.5">
                            <code className="text-[10px] md:text-xs font-mono text-blue-300 overflow-hidden whitespace-nowrap text-ellipsis mr-2">
                                {code1}
                            </code>
                            <button
                                onClick={() => copyCode(code1, setCopied1)}
                                className="shrink-0 flex items-center justify-center w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                                title="Copy signature"
                            >
                                {copied1 ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between bg-black/50 border border-white/5 rounded-lg p-2.5">
                            <code className="text-[10px] md:text-xs font-mono text-emerald-400/80 overflow-hidden whitespace-nowrap text-ellipsis mr-2">
                                {code2}
                            </code>
                            <button
                                onClick={() => copyCode(code2, setCopied2)}
                                className="shrink-0 flex items-center justify-center w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                                title="Copy signature"
                            >
                                {copied2 ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                            </button>
                        </div>
                    </div>
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