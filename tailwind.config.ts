// tailwind.config.ts (in project root, same level as package.json)
import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'blog-bg': {
                    light: '#ffffff',
                    dark: '#111827',
                },
                'blog-text': {
                    light: '#1f2937',
                    dark: '#e5e7eb',
                },
                'blog-accent': {
                    light: '#f3f4f6',
                    dark: '#1f2937'
                },
            },
        },
    },
    plugins: [],
}

export default config