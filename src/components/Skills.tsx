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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 scroll-reveal">
                {skillsCategories.map((category, catIdx) => (
                    <div
                        key={catIdx}
                        className={`p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-500 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                        style={{ transitionDelay: `${catIdx * 100}ms` }}
                    >
                        <h3 className="text-sm font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></div>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {category.skills.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="px-2.5 py-1 text-[11px] sm:text-xs font-medium bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
