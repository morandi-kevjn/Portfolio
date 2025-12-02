// src/components/ThemeToggle.tsx
"use client";
import React from "react";

const ThemeToggle: React.FC = () => {
    const toggleTheme = () => {
        if (typeof window !== "undefined") {
            const html = document.documentElement;
            html.classList.toggle("dark");
            localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
        }
    };

    // For display, you can read from localStorage directly (not via state)
    const isDark =
        typeof window !== "undefined"
            ? document.documentElement.classList.contains("dark")
            : false;

    return (
        <button
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 bg-green-600 text-white rounded-full p-2 shadow-lg transition hover:bg-green-700"
            style={{ fontSize: 24 }}
        >
            {isDark ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;