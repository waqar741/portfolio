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
            skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "C"]
        },
        {
            title: "Frontend",
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML", "CSS"]
        },
        {
            title: "Backend Dev",
            skills: ["Node.js", "Express", "Python", "FastAPI", "RESTful APIs", "GraphQL", "REST API Fundamentals"]
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "MySQL"]
        },
        {
            title: "Data Analytics",
            skills: ["Pandas", "NumPy", "Data Cleaning", "EDA", "Excel"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "Vercel", "Docker", "Postman", "Webpack/Vite", "VS Code"]
        },
        {
            title: "Concepts",
            skills: ["OOP", "DSA", "System Design", "Agile", "DBMS", "Linux", "ML", "Problem Solving", "API Integration", "Responsive Design", "Web Accessibility"]
        },
        {
            title: "AI/ML",
            skills: ["LLMs", "Prompt Engineering", "Agentic Systems", "Distributed Inference", "General ML"]
        }
    ];

    return (
        <section ref={skillsRef} id="skills" className="mb-12 sm:mb-20">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 scroll-reveal">
                <Code2 size={20} />
                Technical Skills
            </h2>

            {/* Desktop View: Categorized Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 scroll-reveal">
                {skillsCategories.map((category, catIdx) => (
                    <div
                        key={catIdx}
                        className={`p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-500 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                        style={{ transitionDelay: `${catIdx * 100}ms` }}
                    >
                        <h3 className="text-xs sm:text-sm font-bold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black dark:bg-white"></div>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {category.skills.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="px-2 py-0.5 sm:px-2 sm:py-0.5 text-[10px] sm:text-[11px] font-medium bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
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
