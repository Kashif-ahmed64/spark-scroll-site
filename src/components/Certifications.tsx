import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import certAiMl from "@/assets/certificate-ai-ml.jpg";

const certifications = [
  {
    title: "AI / ML Engineer",
    issuer: "micro1",
    date: "March 28, 2026",
    image: certAiMl,
    description:
      "Officially certified as an AI/ML Engineer by micro1 after successfully passing their technical AI Interview, validating expertise in machine learning, deep learning, and applied AI engineering.",
  },
];

export const Certifications = () => {
  const [active, setActive] = useState<typeof certifications[number] | null>(null);

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-border pb-4">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Professional certifications and credentials
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((c, i) => (
            <Card
              key={i}
              onClick={() => setActive(c)}
              className="overflow-hidden bg-card border-primary/20 hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
            >
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <Badge className="bg-primary text-primary-foreground text-xs">{c.issuer}</Badge>
                </div>
                <h3 className="font-bold text-lg mb-1">{c.title}</h3>
                <p className="text-xs text-muted-foreground">{c.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="bg-card border-primary/30 max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  {active.title}
                </DialogTitle>
                <DialogDescription className="pt-1">
                  Issued by <span className="text-primary font-medium">{active.issuer}</span> · {active.date}
                </DialogDescription>
              </DialogHeader>
              <div className="rounded-md overflow-hidden border border-primary/20">
                <img src={active.image} alt={active.title} className="w-full h-auto" />
              </div>
              <p className="text-sm text-muted-foreground">{active.description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
