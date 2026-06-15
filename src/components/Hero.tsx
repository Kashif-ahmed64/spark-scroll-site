import { TypewriterText } from "./TypewriterText";
import { Button } from "@/components/ui/button";
import { Briefcase, Globe, Users } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const StatusBadge = ({
  icon: Icon,
  text,
  animationClass,
  positionClass,
}: {
  icon: React.ElementType;
  text: string;
  animationClass: string;
  positionClass: string;
}) => (
  <div
    className={`hidden lg:flex absolute items-center gap-2 px-4 py-2.5 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm text-sm font-medium text-muted-foreground ${animationClass} ${positionClass} cursor-default hover:border-primary/40 transition-colors duration-300`}
  >
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
    </span>
    <Icon className="w-4 h-4 text-primary" />
    <span className="highlight-hover">{text}</span>
  </div>
);

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Floating status badges — left & right */}
      <StatusBadge
        icon={Globe}
        text="Open to Remote Work"
        animationClass="animate-float"
        positionClass="left-8 xl:left-16 top-1/3"
      />
      <StatusBadge
        icon={Users}
        text="Open to Collaborations"
        animationClass="animate-float-delayed"
        positionClass="right-8 xl:right-16 top-[28%]"
      />
      <StatusBadge
        icon={Briefcase}
        text="Actively Looking for Jobs"
        animationClass="animate-float"
        positionClass="left-12 xl:left-24 bottom-[30%]"
      />

      <div className="container mx-auto text-center animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full border-4 border-primary/30 p-2 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl animate-pulse" />
            <img
              src={profileImage}
              alt="Kashif Ahmed"
              className="w-full h-full rounded-full object-cover relative z-10 scale-110"
              style={{ objectPosition: "50% 25%" }}
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
