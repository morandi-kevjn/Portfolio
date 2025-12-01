import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center px-4 py-20">
            <section className="max-w-3xl text-center space-y-8 animate-in fade-in duration-1000">
                <h1 className="text-6xl font-bold tracking-tight">
                    Kevjn <span className="text-green-600 dark:text-green-400">Morandi</span>
                </h1>
                <h2 className="text-2xl font-medium text-muted-foreground">
                    Full Stack Engineer
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Building exceptional digital experiences through clean code, thoughtful design,
                    and continuous innovation. Passionate about creating solutions that make a difference.
                </p>
                <div className="flex justify-center space-x-4 pt-8">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                        Get In Touch
                    </Button>
                    <Button variant="outline" size="lg">
                        View Projects
                    </Button>
                </div>
            </section>
        </main>
    );
}