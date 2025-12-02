import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = ["All Projects", "Web Apps", "Mobile Apps", "AI/ML", "E-Commerce"];

  const projects = [
    {
      title: "Aurora",
      description: "AI-Powered Team & Workflow Management Platform with Slack/Discord-like features, role-based access, task automation, and AI summaries.",
      tags: ["React", "Node.js", "AI", "WebSocket", "PostgreSQL"],
      category: "Web Apps",
      status: "In Development",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "Ralana Store",
      description: "Fully functional multi-vendor e-commerce system with user authentication, product management, and secure checkout flow.",
      tags: ["React", "Node.js", "MongoDB", "JWT Auth"],
      category: "E-Commerce",
      status: "Live",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Get It Done – FYP Services",
      description: "Professional portfolio website offering FYP documentation, thesis help, and academic support services.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      category: "Web Apps",
      status: "Live",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "CanYuman Books",
      description: "Mobile e-book reading app featuring Turkish romantic series with offline reading and bookmark functionality.",
      tags: ["Flutter", "Firebase", "AdMob"],
      category: "Mobile Apps",
      status: "Completed",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "ReadHub",
      description: "Cross-platform e-book reading app with book listing, reading interface, downloads, and bookmark features built with React Native.",
      tags: ["React Native", "Expo", "Cursor AI"],
      category: "Mobile Apps",
      status: "Completed",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "HealthWiz",
      description: "Healthcare reports and diagnostics app with dashboards for uploading, tracking, and viewing medical test results.",
      tags: ["React", "Tailwind CSS", "Node.js"],
      category: "Web Apps",
      status: "Completed",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Dialmind",
      description: "AI-powered communication platform with intelligent conversation management and analytics.",
      tags: ["React", "Node.js", "AI", "WebSocket"],
      category: "Web Apps",
      status: "Completed",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "ActiVision",
      description: "Advanced computer vision system for real-time object detection and tracking with high accuracy.",
      tags: ["Python", "OpenCV", "TensorFlow", "YOLO"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "ML pipeline using anomaly detection with 98% precision using ensemble models (Random Forest, XGBoost).",
      tags: ["Python", "Scikit-learn", "XGBoost", "Flask"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-cyan-500 to-indigo-600"
    },
    {
      title: "Emergency Classification System",
      description: "AI-powered emergency classification with BiLSTM, speech-to-text pipeline, and VoIP/GSM integration for real-time reporting.",
      tags: ["Python", "TensorFlow", "React", "VoIP"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-red-500 to-rose-600"
    },
    {
      title: "Churn Prediction System",
      description: "Machine learning model to predict customer churn with 85% accuracy using advanced algorithms.",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-yellow-500 to-orange-600"
    },
  ];

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-border pb-4">My Projects</h2>
        <p className="text-center text-muted-foreground mb-12">A showcase of my recent work and innovative solutions</p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`cursor-pointer px-6 py-2 text-sm transition-all ${
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "border-primary/30 text-foreground hover:border-primary hover:bg-primary/10"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-primary/20 hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white text-center px-4">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/90 text-foreground border-primary">{project.status}</Badge>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open("https://github.com/Kashif-ahmed64?tab=repositories", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open("https://github.com/Kashif-ahmed64?tab=repositories", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Repository
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              Show More Projects (2 remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
