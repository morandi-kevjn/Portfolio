// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="w-full py-6 px-30 flex flex-col md:flex-row justify-between items-center border-t">
            <span className="text-sm text-gray-500">© 2025 Kevjn Morandi</span>
            <a
                href="https://buymeacoffee.com/kevjnmorandi"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-500"
            >
                ☕ Buy Me a Coffee
            </a>
        </footer>
    );
}