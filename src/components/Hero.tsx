import { TypewriterText } from "./TypewriterText";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full border-4 border-primary/30 p-2 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl animate-pulse" />
            <img
              src={profileImage}
              alt="Kashif Ahmed"
              className="w-full h-full rounded-full object-cover object-top relative z-10"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">Kashif Ahmed</h1>

        <div className="text-2xl md:text-3xl mb-6 h-12">
          <TypewriterText texts={["Software Developer", "ML Engineer", "Full Stack Developer"]} />
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Crafting intelligent solutions that bridge the gap between data and innovation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Work
          </Button>
        </div>
      </div>
    </section>
  );
};
