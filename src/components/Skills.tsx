import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface SkillsProps {
    skillsRef: React.RefObject<HTMLDivElement | null>;
    isLoading: boolean;
}

const Skills = ({ skillsRef, isLoading }: SkillsProps) => {
    const skillsCategories = [
        {
            title: "Languages",
            skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"]
        },
        {
            title: "Frontend",
            skills: ["React", "Vite", "TailwindCSS", "Framer Motion", "Lucide React"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "Firebase", "Supabase", "REST API"]
        },
        {
            title: "Database & Cloud",
            skills: ["MongoDB", "PostgreSQL", "AWS", "Vercel", "Netlify"]
        },
        {
            title: "DevOps & Tools",
            skills: ["Git", "GitHub", "Docker", "Linux", "Postman"]
        },
        {
            title: "AI / ML",
            skills: ["Machine Learning", "Artificial Intelligence", "LLMs", "OpenCV"]
        }
    ];

    return (
        <section ref={skillsRef} id="skills" className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 scroll-reveal">
                <Code2 size={20} />
                Technical Skills
            </h2>

            {/* Desktop View: Categorized Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 scroll-reveal">
                {skillsCategories.map((category, catIdx) => (
                    <div
                        key={catIdx}
                        className={`p-3 sm:p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-500 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                        style={{ transitionDelay: `${catIdx * 100}ms` }}
                    >
                        <h3 className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black dark:bg-white"></div>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                            {category.skills.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View: Flat Wrap List with stagger animation */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.04 } },
                    hidden: {}
                }}
                className="flex sm:hidden flex-wrap gap-2 pt-1"
            >
                {skillsCategories.flatMap(c => c.skills).map((skill, idx) => (
                    <motion.span
                        key={idx}
                        variants={{
                            hidden: { opacity: 0, y: 12, scale: 0.9 },
                            visible: { opacity: 1, y: 0, scale: 1 }
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-xs font-medium hover:border-black dark:hover:border-white transition-all duration-500 cursor-default"
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
