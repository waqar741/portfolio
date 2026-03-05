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
        <section ref={contactRef} id="contact" className="mb-16 sm:mb-24">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-4xl mx-auto">
                <div className="flex-1 text-left space-y-4 sm:space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold scroll-reveal">Let's make something cool</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed scroll-reveal text-sm sm:text-base">
                        Driven IT engineer skilled in software development. Always aiming to create effective solutions.
                        Have a project in mind or just want to say hi? I'm always open to discussing new ideas.
                    </p>

                    <div className="space-y-3 pt-2">
                        <a href="mailto:ahmu741@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group scroll-reveal">
                            <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform">
                                <Mail size={16} />
                            </div>
                            <span className="font-medium text-sm sm:text-base">ahmu741@gmail.com</span>
                        </a>
                        <a href="tel:7021396917" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group scroll-reveal">
                            <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">📞</div>
                            </div>
                            <span className="font-medium text-sm sm:text-base">+91 7021396917</span>
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
                                className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-900 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:-translate-y-1 scroll-reveal"
                                title={Social.label}
                            >
                                <Social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex-1 bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 scroll-reveal">
                    <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1 ml-1">Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 ml-1">Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="your@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 ml-1">Message</label>
                            <textarea
                                rows={3}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none placeholder:text-gray-400 text-sm"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            disabled={isSubmitting}
                            className="scroll-reveal w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
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
