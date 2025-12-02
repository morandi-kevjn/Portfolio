// src/components/sections/SkillsSection.tsx
import React from 'react';

const SkillsSection: React.FC = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["C#", "JavaScript", "TypeScript", "Python", "Visual Basic", "SQL"]
        },
        {
            title: "Frameworks & Libraries",
            skills: [".NET Framework", "MVC", "Tailwind CSS", "Django", "Vue", "PrimeVue"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["Microsoft Azure", "Amazon AWS", "Docker", "Kubernetes", "GitHub", "Azure DevOps"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Postman", "DevExtreme", "AgGrid", "Blockly"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Technologies and tools I use to build robust applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="text-gray-700 dark:text-gray-300 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;