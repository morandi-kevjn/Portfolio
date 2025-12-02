// src/components/ThemeToggle.tsx
"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
    // Initialize state with a function to avoid the useEffect setState issue
    const [dark, setDark] = useState(() => {
        // This only runs on initial render, avoiding the useEffect setState problem
        if (typeof window !== "undefined") {
            return localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        return false;
    });

    // Only handle DOM manipulation in useEffect, not state setting
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    const toggleTheme = () => {
        setDark((prev) => {
            const next = !prev;
            if (next) {
                document.documentElement.classList.add("dark");
                localStorage.theme = "dark";
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.theme = "light";
            }
            return next;
        });
    };

    return (
        <button
            type="button"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className="fixed top-4 right-4 bg-green-600 text-white rounded-full p-2 shadow-lg z-50 transition hover:bg-green-700"
        >
            {dark ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;