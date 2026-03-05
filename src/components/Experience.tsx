import { Briefcase, GraduationCap, Trophy } from 'lucide-react';

interface ExperienceProps {
    experienceRef: React.RefObject<HTMLDivElement | null>;
}

const Experience = ({ experienceRef }: ExperienceProps) => {
    const experience = [
        {
            company: "HealthFirstPriority",
            role: "AI Engineer Intern",
            date: "Sept 2025 – Present",
            details: "Researching distributed LLM architectures for inference optimization. Testing model sharding across decentralized systems.",
            tech: ["LLMs", "Distributed Systems", "Python", "AI Research"],
            logo: "./images/hfp.png"
        }
    ];

    const education = [
        {
            institution: "Terna Engineering College",
            degree: "B.E. Computer Engineering",
            duration: "2022 - 2026",
            location: "Navi Mumbai",
            // grade: "CGPA: 7.5+",
            keyCourses: ["DSA", "DBMS", "AI", "CN"],
            logo: "./images/terna.png"
        },
        {
            institution: "Shiravane Vidyalaya",
            degree: "HSC (Science)",
            duration: "2020 - 2022",
            location: "Navi Mumbai",
            // grade: "76.5%",
            keyCourses: [],
            logo: "./images/svs_logo.png"
        },
        {
            institution: "Shiravane Vidyalaya",
            degree: "SSC",
            duration: "2019 - 2020",
            location: "Navi Mumbai",
            // grade: "73%",
            keyCourses: [],
            logo: "./images/svs_logo.png"
        }
    ];

    const certifications = [
        {
            title: "React JS: Beginner to Expert",
            year: "2023",
            provider: "Online Course",
        },
    ];

    return (
        <div ref={experienceRef} id="experience" className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Column: Experience */}
                <div className="space-y-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 scroll-reveal">
                        <Briefcase size={20} />
                        Experience
                    </h2>

                    <div className="relative space-y-8">
                        {/* Vertical Connecting Line - Centered relative to 56px logo (Left-27px) */}
                        <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gray-200 dark:bg-gray-800" />

                        {experience.map((job, idx) => (
                            <div key={idx} className="scroll-reveal flex gap-4 items-start relative z-10">
                                <div className="w-14 h-14 flex-shrink-0 rounded-full border-4 border-white dark:border-black bg-white overflow-hidden shadow-sm">
                                    <img
                                        src={job.logo}
                                        alt={job.company}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="pt-1">
                                    <h3 className="font-bold text-base">{job.role}</h3>
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{job.company}</div>
                                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{job.date}</div>

                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                                        {job.details}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {job.tech.map(t => (
                                            <span key={t} className="px-1.5 py-0.5 text-[10px] bg-gray-100 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-800">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Education & Certifications */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 scroll-reveal">
                            <GraduationCap size={20} />
                            Education
                        </h2>

                        <div className="relative space-y-8">
                            {/* Vertical Connecting Line */}
                            <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gray-200 dark:bg-gray-800" />

                            {education.map((edu, idx) => (
                                <div key={idx} className="scroll-reveal flex gap-4 items-start relative z-10">
                                    <div className="w-14 h-14 flex-shrink-0 rounded-full border-4 border-white dark:border-black bg-white overflow-hidden shadow-sm">
                                        <img
                                            src={edu.logo}
                                            alt={edu.institution}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="flex-1 pt-1">
                                        <h3 className="font-bold text-sm">{edu.institution}</h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">{edu.degree}</p>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-xs text-gray-500">{edu.duration}</span>
                                            {/* <span className="text-xs font-medium text-green-600 dark:text-green-400">{edu.grade}</span> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 scroll-reveal">
                            <Trophy size={20} />
                            Certifications
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="scroll-reveal p-3 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-colors bg-gray-50/50 dark:bg-gray-900/50">
                                    <h3 className="font-bold text-sm">{cert.title}</h3>
                                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                                        <span>{cert.provider}</span>
                                        <span>{cert.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
