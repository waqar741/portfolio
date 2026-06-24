import { Mail, Github, Linkedin, Send } from 'lucide-react';
import React from 'react';

interface ContactProps {
    contactRef: React.RefObject<HTMLDivElement | null>;
    formData: { name: string; email: string; message: string };
    setFormData: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    isSubmitting: boolean;
}

const Contact = ({ contactRef, formData, setFormData, handleSubmit, isSubmitting }: ContactProps) => {
    return (
        <section ref={contactRef} id="contact" className="mb-12 sm:mb-16 scroll-reveal">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start glass-card p-6 sm:p-10 rounded-3xl">
                <div className="flex-1 text-left space-y-4 sm:space-y-6">
                    <h3 className="text-3xl sm:text-4xl font-outfit font-bold scroll-reveal tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Open to new opportunities</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed scroll-reveal text-sm sm:text-base">
                        Software developer and UI/UX designer with experience in full-stack development, creating intuitive interfaces, and building scalable web applications. 
                        Looking for roles in software engineering or frontend development where I can build impactful, user-centric solutions. 
                        Have a project or opportunity in mind? Let's connect.
                    </p>

                    <div className="space-y-3 pt-2">
                        <a href="mailto:shaikhwaquar741@gmail.com" className="flex items-center gap-3 p-3 glass-card rounded-xl hover:-translate-y-1 transition-all group">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</div>
                                <div className="text-sm font-medium">shaikhwaquar741@gmail.com</div>
                            </div>
                        </a>
                        <a href="tel:7021396917" className="flex items-center gap-3 p-3 glass-card rounded-xl hover:-translate-y-1 transition-all group">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                                <div className="w-5 h-5 flex items-center justify-center font-bold">📞</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone</div>
                                <div className="text-sm font-medium">+91 7021396917</div>
                            </div>
                        </a>
                    </div>

                    <div className="flex gap-2 sm:gap-3 pt-4">
                        {[
                            { icon: Github, href: "https://github.com/waqar741", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/shaikh-waquar", label: "LinkedIn" },
                        ].map((Social, idx) => (
                            <a
                                key={idx}
                                href={Social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:-translate-y-1 scroll-reveal"
                                title={Social.label}
                            >
                                <Social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 scroll-reveal">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-white/50 dark:bg-black/30 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all glass-card"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-white/50 dark:bg-black/30 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all glass-card"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-white/50 dark:bg-black/30 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all glass-card resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            <Send size={16} />
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
