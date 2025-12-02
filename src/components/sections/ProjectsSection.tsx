// src/components/sections/ProjectsSection.tsx
import React from "react";

const projects = [
    {
        title: "Portfolio Website",
        description: "This site – built with Next.js, Tailwind. Showcases my professional projects and skills.",
        link: "https://github.com/morandi-kevjn/Portfolio",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
        title: "MSSQL Docker",
        description: "Docker containerization for easy local and cloud MSSQL Server setups. Configured for development and CI workflows.",
        link: "https://github.com/morandi-kevjn/MSSQL_Docker",
        stack: ["Docker", "MSSQL"]
    },
    {
        title: "Blackjack Game",
        description: "A fully playable Blackjack card game written in Python and JavaScript to practice OOP and UI logic.",
        link: "https://github.com/morandi-kevjn/blackjack",
        stack: ["JavaScript", "Python"]
    }
];

const ProjectsSection: React.FC = () => (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
            <div className="grid gap-8">
                {projects.map((project) => (
                    <div key={project.title} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">{project.title}</h3>
                        <p className="text-gray-800 dark:text-gray-200">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-green-700 dark:text-green-400 hover:underline"
                        >
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ProjectsSection;