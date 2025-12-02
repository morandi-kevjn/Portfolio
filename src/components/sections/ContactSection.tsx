// src/components/sections/ContactSection.tsx
"use client";
import React, { useState } from "react";
import ContactForm from "../ContactForm";

const ContactSection: React.FC = () => {
    // simple local state (expand for full backend integration)
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact</h2>
                <ContactForm />
                <div className="flex space-x-4 justify-center">
                    <a
                        href="https://github.com/morandi-kevjn"
                        target="_blank"
                        aria-label="GitHub"
                        className="text-green-600 hover:text-green-800 text-3xl"
                    >🐙</a>
                    <a
                        href="https://www.linkedin.com/in/kevjn-morandi-924110215/"
                        target="_blank"
                        aria-label="LinkedIn"
                        className="text-green-600 hover:text-green-800 text-3xl"
                    >💼</a>
                    {/* Add additional buttons/icons as needed */}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;