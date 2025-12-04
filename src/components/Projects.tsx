import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [showAll, setShowAll] = useState(false);
  const [privateDialogOpen, setPrivateDialogOpen] = useState(false);

  const filters = ["All Projects", "Web Apps", "Mobile Apps", "AI/ML", "E-Commerce"];

  const projects = [
    {
      title: "Aurora",
      description: "AI-Powered Team & Workflow Management Platform with Slack/Discord-like features, role-based access, task automation, and AI summaries.",
      tags: ["React", "Node.js", "AI", "WebSocket", "PostgreSQL"],
      category: "Web Apps",
      status: "In Development",
      gradient: "from-violet-500 to-purple-600",
      liveUrl: null,
      isPrivate: true
    },
    {
      title: "Aurelia Store",
      description: "Fully functional multi-vendor e-commerce system with user authentication, product management, and secure checkout flow.",
      tags: ["React", "Node.js", "MongoDB", "JWT Auth"],
      category: "E-Commerce",
      status: "Live",
      gradient: "from-cyan-500 to-blue-600",
      liveUrl: "https://aurelia-store.vercel.app"
    },
    {
      title: "Get It Done – FYP Services",
      description: "Professional portfolio website offering FYP documentation, thesis help, and academic support services.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      category: "Web Apps",
      status: "Live",
      gradient: "from-green-500 to-teal-600",
      liveUrl: "https://get-it-done-fyp-service.vercel.app/"
    },
    {
      title: "CanYuman Books",
      description: "Mobile e-book reading app featuring Turkish romantic series with offline reading and bookmark functionality.",
      tags: ["Flutter", "Firebase", "AdMob"],
      category: "Mobile Apps",
      status: "Completed",
      gradient: "from-purple-500 to-pink-600",
      isPrivate: true
    },
    {
      title: "ReadHub",
      description: "Cross-platform e-book reading app with book listing, reading interface, downloads, and bookmark features built with React Native.",
      tags: ["React Native", "Expo", "Cursor AI"],
      category: "Mobile Apps",
      status: "Completed",
      gradient: "from-amber-500 to-orange-600",
      isPrivate: true
    },
    {
      title: "HealthWiz",
      description: "Healthcare reports and diagnostics app with dashboards for uploading, tracking, and viewing medical test results.",
      tags: ["React", "Tailwind CSS", "Node.js"],
      category: "Web Apps",
      status: "Completed",
      gradient: "from-emerald-500 to-teal-600",
      isPrivate: true
    },
    {
      title: "Dialmind",
      description: "AI-powered communication platform with intelligent conversation management and analytics.",
      tags: ["React", "Node.js", "AI", "WebSocket"],
      category: "Web Apps",
      status: "Completed",
      gradient: "from-indigo-500 to-purple-600",
      isPrivate: true
    },
    {
      title: "ActiVision",
      description: "Advanced computer vision system for real-time object detection and tracking with high accuracy.",
      tags: ["Python", "OpenCV", "TensorFlow", "YOLO"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-orange-500 to-red-600",
      isPrivate: true
    },
    {
      title: "Credit Card Fraud Detection",
      description: "ML pipeline using anomaly detection with 98% precision using ensemble models (Random Forest, XGBoost).",
      tags: ["Python", "Scikit-learn", "XGBoost", "Flask"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-cyan-500 to-indigo-600",
      isPrivate: true
    },
    {
      title: "Emergency Classification System",
      description: "AI-powered emergency classification with BiLSTM, speech-to-text pipeline, and VoIP/GSM integration for real-time reporting.",
      tags: ["Python", "TensorFlow", "React", "VoIP"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-red-500 to-rose-600",
      isPrivate: true
    },
    {
      title: "Churn Prediction System",
      description: "Machine learning model to predict customer churn with 85% accuracy using advanced algorithms.",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-yellow-500 to-orange-600",
      isPrivate: true
    },
  ];

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const remainingCount = filteredProjects.length - 6;

  const handleLiveDemo = (project: typeof projects[0]) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    } else if (project.isPrivate) {
      setPrivateDialogOpen(true);
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-border pb-4">My Projects</h2>
        <p className="text-center text-muted-foreground mb-12">A showcase of my recent work and innovative solutions</p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`cursor-pointer px-4 py-1.5 text-xs md:text-sm transition-all ${
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "border-primary/30 text-foreground hover:border-primary hover:bg-primary/10"
              }`}
              onClick={() => { setActiveFilter(filter); setShowAll(false); }}
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-primary/20 hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className={`h-24 sm:h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center px-3">{project.title}</h3>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge className="bg-background/90 text-foreground border-primary text-xs">{project.status}</Badge>
                </div>
              </div>

              <div className="p-4">
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-[10px] px-2 py-0">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-[10px] px-2 py-0">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 h-8 text-xs bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open("https://github.com/Kashif-ahmed64?tab=repositories", "_blank")}
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 h-8 text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleLiveDemo(project)}
                  >
                    {project.isPrivate && !project.liveUrl ? (
                      <>
                        <Lock className="w-3 h-3 mr-1" />
                        Private
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {remainingCount > 0 && !showAll && (
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              onClick={() => setShowAll(true)}
            >
              Show More Projects ({remainingCount} remaining)
            </Button>
          </div>
        )}

        {showAll && filteredProjects.length > 6 && (
          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </Button>
          </div>
        )}
      </div>

      <Dialog open={privateDialogOpen} onOpenChange={setPrivateDialogOpen}>
        <DialogContent className="bg-card border-primary/30">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Private Project
            </DialogTitle>
            <DialogDescription className="pt-2">
              This project is currently private and not available for public demo. It may contain proprietary code, client work, or be under NDA. 
              <br /><br />
              Feel free to check out my GitHub repositories for open-source projects or contact me for more information about this work.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 mt-4">
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={() => {
                window.open("https://github.com/Kashif-ahmed64?tab=repositories", "_blank");
                setPrivateDialogOpen(false);
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-primary"
              onClick={() => setPrivateDialogOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
