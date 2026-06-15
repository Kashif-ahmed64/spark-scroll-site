import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

export const Experience = () => {
  const timeline = [
    {
      icon: Briefcase,
      type: "Work Experience",
      badge: "2025 - Present",
      title: "IT Intern — Software Development & Infrastructure",
      organization: "Liberty Daharki Powers Ltd (LDPL) — 235 MW Power Plant",
      description: "Building and deploying internal operations software for a large-scale power plant, replacing legacy paper-based and MP2 workflows.",
      highlights: [
        "Developed & deployed the LDPL Operations Management Portal (React, TypeScript, PostgreSQL)",
        "Digitised gate pass, visitor, and fleet management workflows",
        "Built role-based approval flows, dashboards, and document generation",
        "Delivered a CMMS prototype replacing the legacy MP2 maintenance system",
      ],
      color: "cyan",
    },
    {
      icon: Briefcase,
      type: "Work Experience",
      badge: "Remote",
      title: "AI Evaluator & Workflow Testing Contributor",
      organization: "Turing",
      description: "Evaluating AI-generated responses and multi-step agent workflows across real-world desktop and browser environments.",
      highlights: [
        "Tested AI agent task execution, reasoning accuracy, and usability",
        "Identified edge cases and workflow failures to improve reliability",
        "Performed structured evaluation tasks and quality assurance",
        "Collaborated in fast-paced evaluation cycles with detailed reporting",
      ],
      color: "cyan",
    },
    {
      icon: Briefcase,
      type: "Work Experience",
      badge: "Feb 2024 – Aug 2024",
      title: "Software Engineer (Full-Stack / Backend Focus)",
      organization: "HealthWiz — Healthcare Management System",
      description: "Designed and implemented a healthcare system to improve patient data management and workflow efficiency.",
      highlights: [
        "Developed modular backend components using OOP and clean architecture",
        "Optimised queries and structured database management",
        "Worked in fast-paced cycles ensuring maintainability and scalability",
      ],
      color: "cyan",
    },
    {
      icon: Briefcase,
      type: "Work Experience",
      badge: "Sept 2023 – Dec 2023",
      title: "AI Model Trainer & Response Improvement Specialist",
      organization: "Remotask (Scale AI)",
      description: "Trained AI models in mathematical and CS domains to improve accuracy and understanding. Enhanced dialogue models using contextual feedback and response optimization.",
      highlights: [
        "Trained AI models in mathematical and CS domains",
        "Enhanced dialogue models using contextual feedback",
        "Performed data labeling and AI training tasks",
        "Contributed to response optimization for LLMs",
      ],
      color: "cyan",
    },
    {
      icon: GraduationCap,
      type: "Education",
      badge: "2020 - 2024",
      title: "Bachelor of Science in Computer Science",
      organization: "Institute of Business Administration (IBA), Sukkur",
      description: "Specialised in Software Engineering, Machine Learning, and full-stack development.",
      highlights: [
        "Awarded Top 10 Merit-Based Scholarship",
        "Completed multiple AI/ML and full-stack projects",
        "Strong foundation in DSA, OOP, and system design",
      ],
      color: "cyan",
    },
    {
      icon: Code,
      type: "Project",
      badge: "2023",
      title: "Lead Developer",
      organization: "Dialmind & Aurelia Store",
      description: "Led the development of two major platforms: AI-powered emergency assistant (Dialmind) and a multi-vendor e-commerce platform (Aurelia Store).",
      highlights: [
        "Built scalable microservices architecture for both platforms",
        "Implemented secure payment processing and real-time features",
        "Designed intuitive user interfaces with modern UX principles",
        "Managed development team and coordinated project deliverables",
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
