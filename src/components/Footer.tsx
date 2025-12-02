// components/Footer.tsx

export default function Footer() {
    return (
        <footer className="w-full py-6 px-30 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <span className="text-sm text-gray-500 dark:text-gray-400">© 2025 Kevjn Morandi</span>
            <a
                href="https://buymeacoffee.com/kevjnmorandi"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-500 dark:hover:bg-yellow-600"
            >
                ☕ Buy Me a Coffee
            </a>
        </footer>
    );
}