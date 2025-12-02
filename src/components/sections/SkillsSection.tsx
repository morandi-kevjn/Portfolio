// src/components/sections/SkillsSection.tsx
import React from "react";

const skills = [
    { title: "Languages", items: ["C#", "JavaScript", "TypeScript", "Python", "Visual Basic", "SQL"] },
    { title: "Frameworks & Libraries", items: [".NET", "Django", "Tailwind CSS", "DevExtreme", "Vue", "PrimeVue", "AgGrid", "Blockly"] },
    { title: "Cloud & Automation", items: ["Azure", "AWS", "Docker", "Kubernetes", "Microservices"] },
    { title: "Tools", items: ["GitHub", "Azure DevOps", "Postman"] },
];

const SkillsSection: React.FC = () => (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {skills.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-xl font-semibold text-green-600 mb-2">{group.title}</h3>
                        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;