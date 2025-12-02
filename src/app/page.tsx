import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            {/* Hero */}
            {/* Hero */}
            <main className="flex min-h-screen items-center justify-center px-4 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <section className="max-w-3xl text-center space-y-8 animate-in fade-in">
                    <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Kevjn <span className="text-green-600 dark:text-green-400">Morandi</span>
                    </h1>
                    <h2 className="text-2xl font-medium text-muted-foreground dark:text-gray-300">
                        Cloud &amp; Software Engineer / Architect
                    </h2>
                    <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                        I design scalable, fault-tolerant systems—turning complex ideas into
                        resilient cloud solutions.
                    </p>
                    <div className="flex justify-center gap-4 pt-8">
                        <a href="#contact">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                                Let's Connect
                            </Button>
                        </a>
                        <a href="#projects">
                            <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                                View Work
                            </Button>
                        </a>
                    </div>
                </section>
            </main>

            {/* Other Sections */}
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            <ContactSection />
            <Footer />
        </>
    );
}