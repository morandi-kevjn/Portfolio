// src/components/sections/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            I&#39;m a passionate Full Stack Software Engineer with experience in web development,
                            ERP customization, data processing, and industrial automation. I specialize in
                            building enterprise-grade applications using modern technologies like .NET, Python,
                            and cloud platforms.
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            My expertise spans across cloud platforms like Azure and AWS, containerization
                            with Docker and Kubernetes, and creating scalable microservices architectures.
                            I believe in writing clean, maintainable code that solves real business problems.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Cloud Platforms</h4>
                                <p className="text-green-700 dark:text-green-400">Azure, AWS</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Architecture</h4>
                                <p className="text-green-700 dark:text-green-400">Microservices, MVC</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-400 to-green-600 p-8 rounded-2xl text-white">
                        <h3 className="text-2xl font-bold mb-6">Core Values</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                                <span>Scalability and reliability in every solution</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                                <span>Continuous learning and technology adoption</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                                <span>Collaborative problem-solving approach</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;