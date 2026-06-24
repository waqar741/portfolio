import { Briefcase, GraduationCap, Trophy } from 'lucide-react';

interface ExperienceProps {
    experienceRef: React.RefObject<HTMLDivElement | null>;
}

const Experience = ({ experienceRef }: ExperienceProps) => {
    const experience = [
        {
            company: "HealthFirstPriority (HFP)",
            role: "Software Engineer Intern",
            date: "Sept 2025 – Dec 2025",
            details: "Developed scalable application modules and robust REST APIs using Python and FastAPI. Collaborated closely with the design team to build a highly responsive, user-friendly React frontend. Ensured seamless integration between backend microservices and UI components to deliver a smooth end-to-end clinical data experience.",
            tech: ["React", "TypeScript", "FastAPI", "Python", "UI/UX", "PostgreSQL"],
            logo: "./images/hfp.png",
            status: "Completed"
        }
    ];

    const education = [
        {
            institution: "Terna Engineering College, Mumbai University",
            degree: "B.E. in Computer Engineering",
            duration: "2022 - 2026",
            location: "Navi Mumbai",
            keyCourses: ["DSA", "DBMS", "AI", "CN"],
            logo: "./images/terna.png"
        },
        {
            institution: "Shiravane Vidyalaya & Jr. College",
            degree: "Higher Secondary Certificate (HSC)",
            duration: "2022",
            location: "Navi Mumbai",
            keyCourses: [],
            logo: "./images/svs_logo.png"
        },
        {
            institution: "Shiravane Vidyalaya",
            degree: "Secondary School Certificate (SSC)",
            duration: "2020",
            location: "Navi Mumbai",
            keyCourses: [],
            logo: "./images/svs_logo.png"
        }
    ];

    const certifications = [
        {
            title: "Advanced React and Next.js",
            year: "2024",
            provider: "Online Course",
        },
        {
            title: "UI/UX Design Principles & Figma",
            year: "2024",
            provider: "Udemy",
        },
        {
            title: "Full Stack Web Development",
            year: "2023",
            provider: "Online Course",
        },
        {
            title: "Frontend Web UI Frameworks and Tools",
            year: "2025",
            provider: "Coursera",
        },
    ];

    return (
        <div ref={experienceRef} id="experience" className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Column: Experience */}
                <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-outfit font-bold mb-6 flex items-center gap-2 scroll-reveal tracking-wide">
                        <Briefcase size={24} className="text-blue-500" />
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

                                <div className="pt-1.5 glass-card p-5 rounded-2xl flex-1 relative -top-1 transition-all hover:shadow-lg hover:shadow-blue-500/5">
                                    <h3 className="font-outfit font-bold text-lg text-gray-900 dark:text-white">{job.role}</h3>
                                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{job.company}</div>
                                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{job.date}</div>

                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                                        {job.details}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {job.tech.map(t => (
                                            <span key={t} className="px-2 py-0.5 text-[10px] font-medium border border-gray-200 dark:border-gray-700 rounded-full bg-white/50 dark:bg-black/30 text-gray-700 dark:text-gray-300">
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
                        <h2 className="text-2xl sm:text-3xl font-outfit font-bold mb-6 flex items-center gap-2 scroll-reveal tracking-wide">
                            <GraduationCap size={24} className="text-purple-500" />
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

                                    <div className="flex-1 pt-1.5 glass-card p-4 rounded-xl relative -top-1 transition-all hover:shadow-lg">
                                        <h3 className="font-outfit font-bold text-base text-gray-900 dark:text-white">{edu.institution}</h3>
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
                        <h2 className="text-2xl sm:text-3xl font-outfit font-bold mb-6 flex items-center gap-2 scroll-reveal tracking-wide">
                            <Trophy size={24} className="text-yellow-500" />
                            Certifications
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="scroll-reveal p-4 glass-card rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <h3 className="font-outfit font-bold text-base text-gray-900 dark:text-white">{cert.title}</h3>
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
