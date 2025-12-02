// src/components/sections/CertificationZone.tsx
const certifications = [
    {
        title: "Introduction to Back-End Development",
        issuer: "Meta",
        date: "Jun 2024",
        credentialId: "XTSDF5CGN3LL",
        // Add the direct credential link if you have it, or leave as "#"
        url: "#"
    },
    {
        title: "Introduction to Cloud Computing",
        issuer: "IBM",
        date: "Jun 2024",
        credentialId: "2FE2HFFXVM63",
        url: "#"
    },
    {
        title: "Introduction to DevOps",
        issuer: "IBM",
        date: "May 2024",
        credentialId: "UMGCCBWNSHFP",
        url: "#"
    },
    {
        title: "Pre Security Certificate",
        issuer: "TryHackMe",
        date: "Issued Sep 2025, Expires Sep 2028",
        credentialId: "THM-YPJ86ODVS2",
        url: "#"
    }
];

export default function CertificationZone() {
    return (
        <section id="certifications" className="py-16 bg-gray-100 dark:bg-gray-700">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <div
                            key={cert.credentialId}
                            className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-2 shadow hover:scale-105 transition"
                        >
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{cert.title}</h3>
                            <p className="text-gray-500 dark:text-gray-300">{cert.issuer}</p>
                            <span className="text-sm text-gray-400 dark:text-gray-500">{cert.date}</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500 mt-2">Credential ID: {cert.credentialId}</span>
                            {cert.url && cert.url !== "#" && (
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-700 dark:text-green-400 hover:underline text-sm mt-2"
                                >
                                    See Credential
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}