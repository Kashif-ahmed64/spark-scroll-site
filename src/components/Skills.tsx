import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const categories = ["All Skills", "Frontend", "Backend", "AI/ML", "Mobile", "Tools"];

  const skills = [
    { name: "React", category: "Frontend", level: "Expert", color: "bg-blue-500" },
    { name: "JavaScript", category: "Frontend", level: "Advanced", color: "bg-yellow-500" },
    { name: "TypeScript", category: "Frontend", level: "Advanced", color: "bg-blue-600" },
    { name: "HTML/CSS", category: "Frontend", level: "Expert", color: "bg-orange-500" },
    { name: "Tailwind CSS", category: "Frontend", level: "Advanced", color: "bg-cyan-500" },
    { name: "Next.js", category: "Frontend", level: "Advanced", color: "bg-gray-800" },
    { name: "Node.js", category: "Backend", level: "Advanced", color: "bg-green-600" },
    { name: "Python", category: "Backend", level: "Expert", color: "bg-blue-500" },
    { name: "Express.js", category: "Backend", level: "Advanced", color: "bg-gray-700" },
    { name: "MongoDB", category: "Backend", level: "Advanced", color: "bg-green-500" },
    { name: "PostgreSQL", category: "Backend", level: "Intermediate", color: "bg-blue-700" },
    { name: "REST APIs", category: "Backend", level: "Expert", color: "bg-purple-600" },
    { name: "TensorFlow", category: "AI/ML", level: "Expert", color: "bg-orange-600" },
    { name: "PyTorch", category: "AI/ML", level: "Advanced", color: "bg-red-600" },
    { name: "Scikit-learn", category: "AI/ML", level: "Advanced", color: "bg-orange-500" },
    { name: "OpenCV", category: "AI/ML", level: "Advanced", color: "bg-green-700" },
    { name: "NLP", category: "AI/ML", level: "Advanced", color: "bg-indigo-600" },
    { name: "React Native", category: "Mobile", level: "Advanced", color: "bg-blue-500" },
    { name: "Flutter", category: "Mobile", level: "Intermediate", color: "bg-blue-400" },
    { name: "Git", category: "Tools", level: "Expert", color: "bg-red-500" },
    { name: "Docker", category: "Tools", level: "Advanced", color: "bg-blue-600" },
  ];

  const filteredSkills = activeCategory === "All Skills" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const primaryLanguages = [
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "Python", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-border pb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12">Technologies I work with to build amazing solutions</p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-6 py-2 text-sm transition-all ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "border-primary/30 text-foreground hover:border-primary hover:bg-primary/10"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {filteredSkills.map((skill, index) => (
            <Card
              key={index}
              className="p-4 bg-card border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 text-center"
            >
              <div className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg`}>
                {skill.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
              <p className="text-xs text-primary">{skill.level}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Primary Languages</h3>
          <div className="space-y-6">
            {primaryLanguages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-primary">{lang.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${lang.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
