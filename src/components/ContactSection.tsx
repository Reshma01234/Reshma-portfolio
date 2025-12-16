import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code2, Trophy } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:example@email.com", value: "example@email.com" },
  { icon: Github, label: "GitHub", href: "https://github.com", value: "github.com/reshma" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", value: "linkedin.com/in/reshma" },
  { icon: Code2, label: "HackerRank", href: "https://hackerrank.com", value: "hackerrank.com/reshma" },
  { icon: Trophy, label: "LeetCode", href: "https://leetcode.com", value: "leetcode.com/reshma" },
];

const ContactSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Get In Touch
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Let's Connect
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm actively seeking internship and entry-level opportunities where I can apply 
              my skills, learn from experienced teams, and build impactful software.
            </p>
          </ScrollReveal>
          
          {/* Contact Links */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12" staggerDelay={0.1}>
            {contactLinks.map((link, index) => (
              <StaggerItem key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl bg-background shadow-soft border border-border/50 card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:gradient-primary transition-all duration-300">
                    <link.icon className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">{link.label}</div>
                    <div className="font-medium text-foreground">{link.value}</div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:example@email.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me a Message
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
