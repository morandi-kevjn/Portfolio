// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import ThemeToggle from "@/components/ThemeToggle";

interface RootLayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: 'Kevjn Morandi Portfolio',
    description: 'Full Stack Engineer – Portfolio of Software Projects & Skills',
};

export default function RootLayout({ children }: RootLayoutProps ) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen antialiased transition-colors duration-300">
        <ThemeToggle/>
        {children}
        </body>
        </html>
    );
}