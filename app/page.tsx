import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-16 md:px-10 lg:px-12">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
