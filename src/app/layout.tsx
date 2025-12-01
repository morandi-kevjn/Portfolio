// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: 'Kevjn Morandi Portfolio',
    description: 'Full Stack Engineer – Portfolio of Software Projects & Skills',
};

export default function RootLayout({ children }: RootLayoutProps ) {
    return (
        <html lang="en">
        <body className="bg-background text-foreground min-h-screen antialiased">
        {children}
        </body>
        </html>
    );
}