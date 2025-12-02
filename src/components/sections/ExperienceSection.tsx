// src/components/sections/ExperienceSection.tsx
import React from "react";

const experience = [
    {
        role: "Software Engineer",
        company: "Brain Enterprise",
        period: "Jul 2025 – Present",
        details: [
            "Microservices solutions with Kubernetes and Docker",
            "Custom .NET & Python applications; software/database architecture",
            "Designing reliable, modular business apps"
        ]
    },
    {
        role: "Software Engineer",
        company: "Felappigomme",
        period: "Jun 2024 – Jun 2025",
        details: [
            "E-commerce data flow solutions",
            "Tech: Python, Django, Vue, MySQL"
        ]
    },
    {
        role: "Full Stack Engineer",
        company: "Cualeva S.r.l.",
        period: "Feb 2023 – Jun 2024",
        details: [
            "Web/MVC apps, Visual Basic workflows, Blockly JavaScript integrations"
        ]
    },
    {
        role: "Textile Programmer & Maintenance Technician",
        company: "2M S.r.l. (Calzedonia Group)",
        period: "May 2022 – Jan 2023",
        details: [
            "Preventive/corrective maintenance of production machinery",
            "Quality control, production data analytics"
        ]
    },
    {
        role: "Java Developer Intern",
        company: "Panthera S.r.l.",
        period: "Nov 2021 – Apr 2022",
        details: [
            "ERP software customization, team collaboration, documentation"
        ]
    },
];

const ExperienceSection: React.FC = () => (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
            <div className="space-y-8">
                {experience.map((item) => (
                    <div key={item.company + item.role} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-green-600">{item.role} @ {item.company}</h3>
                        <div className="text-gray-500 dark:text-gray-400 mb-2">{item.period}</div>
                        <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200">
                            {item.details.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ExperienceSection;