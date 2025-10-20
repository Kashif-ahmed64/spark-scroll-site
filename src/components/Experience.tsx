import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

export const Experience = () => {
  const timeline = [
    {
      icon: Briefcase,
      type: "Work Experience",
      badge: "2023 - Present",
      title: "AI/ML Engineer & Full-Stack Developer",
      organization: "Freelance & Personal Projects",
      description: "Developing cutting-edge AI/ML solutions and full-stack applications for various clients and personal projects.",
      highlights: [
        "Built and deployed multiple production-ready applications",
        "Developed high-accuracy machine learning models",
        "Improved development efficiency through automation",
        "Mentored junior developers and team members",
      ],
      color: "cyan",
    },
    {
      icon: GraduationCap,
      type: "Education",
      badge: "2020 - 2024",
      title: "Bachelor of Science in Computer Science",
      organization: "University of Technology",
      description: "Specialized in Artificial Intelligence, Machine Learning, and Software Engineering with focus on practical applications.",
      highlights: [
        "Graduated with excellent academic performance",
        "Completed multiple AI/ML projects",
        "Published research paper on computer vision",
        "Led university tech society as President",
      ],
      color: "cyan",
    },
    {
      icon: Award,
      type: "Certification",
      badge: "2023",
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      description: "Certified in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
      highlights: [
        "Passed with excellent score",
        "Specialized in cloud architecture",
        "Expertise in serverless technologies",
        "Cost optimization strategies",
      ],
      color: "pink",
    },
    {
      icon: Award,
      type: "Certification",
      badge: "2023",
      title: "TensorFlow Developer Certificate",
      organization: "Google",
      description: "Certified in building and training neural networks using TensorFlow for various machine learning applications.",
      highlights: [
        "Advanced deep learning techniques",
        "Computer vision applications",
        "Natural language processing",
        "Model optimization and deployment",
      ],
      color: "pink",
    },
    {
      icon: Code,
      type: "Project",
      badge: "2023",
      title: "Lead Developer - E-Commerce Platform",
      organization: "Ralana Store",
      description: "Led the development of a comprehensive multi-vendor e-commerce platform with advanced features.",
      highlights: [
        "Built scalable microservices architecture",
        "Implemented secure payment processing",
        "Designed intuitive user interfaces",
        "Managed team of 3 developers",
      ],
      color: "cyan",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-border pb-4">
          Experience & Journey
        </h2>
        <p className="text-center text-muted-foreground mb-12">My professional journey and key milestones</p>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-0 md:pl-20 animate-fade-in-up">
                <div className="absolute left-0 top-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 border-primary">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                <Card className="p-6 bg-card border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <Badge 
                      variant="outline" 
                      className={`text-xs border-${item.color}-500 text-${item.color}-500`}
                    >
                      {item.type}
                    </Badge>
                    <Badge className="bg-primary text-primary-foreground">{item.badge}</Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary font-semibold mb-3">{item.organization}</p>
                  <p className="text-muted-foreground mb-4">{item.description}</p>

                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <span className="text-primary mr-2">▸</span>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
