import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mqayjrlg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        console.log("Message sent successfully at:", new Date().toISOString());
        toast({
          title: "✅ Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "⚠️ Message failed to send",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      subtitle: "Quick chat",
      link: "https://wa.me/923341024347",
      color: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "ikashifahmed786@gmail.com",
      link: "mailto:ikashifahmed786@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Kashif Ahmed",
      link: "https://www.linkedin.com/in/kashif-ahmed-38b2b739a",
      color: "text-blue-600",
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "View my code",
      link: "https://github.com/Kashif-ahmed64",
      color: "text-gray-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-border pb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12">
          Ready to collaborate or have a question? Let's connect!
        </p>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-primary/20 mb-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name *</label>
                <Input
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email *</label>
                <Input
                  required
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message *</label>
                <Textarea
                  required
                  placeholder="Tell me about your project or question..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div>
            <h3 className="text-2xl font-bold text-center mb-6">Or reach out directly</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-6 bg-card border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 text-center group">
                    <method.icon className={`w-12 h-12 ${method.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                    <h4 className="font-semibold mb-1">{method.title}</h4>
                    <p className="text-sm text-muted-foreground">{method.subtitle}</p>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
