import { Rocket, Laptop, Trophy, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const About = () => {
  const stats = [
    { icon: Rocket, title: "Multiple", subtitle: "Projects Completed" },
    { icon: Laptop, title: "Diverse", subtitle: "Technologies Mastered" },
    { icon: Trophy, title: "Professional", subtitle: "Certifications" },
    { icon: Users, title: "High", subtitle: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-border pb-4">About</h2>

        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12 text-muted-foreground">
          <p className="text-lg">
            I'm a passionate AI/ML Engineer and Full-Stack Developer with a strong foundation in computer science. I
            specialize in building intelligent systems that solve real-world problems using cutting-edge technologies.
          </p>
          <p className="text-lg">
            With expertise in machine learning, deep learning, and full-stack development, I create scalable solutions
            that bridge the gap between data science and practical applications. My journey includes developing
            e-commerce platforms, AI-powered applications, and mobile solutions.
          </p>
          <p className="text-lg">
            I'm always eager to learn new technologies and take on challenging projects that push the boundaries of
            what's possible with AI and modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <stat.icon className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold text-primary">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            Download CV
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
