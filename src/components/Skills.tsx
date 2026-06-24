import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface SkillsProps {
    skillsRef: React.RefObject<HTMLDivElement | null>;
    isLoading: boolean;
}

const Skills = ({ skillsRef, isLoading }: SkillsProps) => {
    const skillsCategories = [
        {
            title: "Frontend & UI/UX",
            skills: ["React JS", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Framer Motion", "HTML/CSS"]
        },
        {
            title: "Backend Dev",
            skills: ["Node.js", "Express", "Python", "FastAPI", "RESTful APIs", "GraphQL"]
        },
        {
            title: "Languages",
            skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "MySQL"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "GitHub", "Vercel", "Docker", "Postman", "Webpack/Vite"]
        },
        {
            title: "Core Concepts",
            skills: ["Responsive Design", "Web Accessibility", "OOP", "DSA", "System Design", "Agile"]
        }
    ];

    return (
        <section ref={skillsRef} id="skills" className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-outfit font-bold mb-6 sm:mb-8 flex items-center gap-2 scroll-reveal tracking-wide">
                <Code2 size={20} />
                Technical Skills
            </h2>

            {/* Desktop View: Categorized Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 scroll-reveal">
                {skillsCategories.map((category, catIdx) => (
                    <div
                        key={catIdx}
                        className={`p-4 sm:p-6 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                        style={{ transitionDelay: `${catIdx * 100}ms` }}
                    >
                        <h3 className="text-sm sm:text-base font-outfit font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white flex items-center gap-2 tracking-wide">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"></div>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                            {category.skills.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium border border-gray-200 dark:border-gray-700/50 rounded-lg bg-white/50 dark:bg-black/30 text-gray-700 dark:text-gray-300 backdrop-blur-sm"
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
