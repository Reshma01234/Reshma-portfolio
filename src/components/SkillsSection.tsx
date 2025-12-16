import { Code2, Globe, Brain, Cloud, Wrench } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["CNNs", "Computer Vision", "Model Training"],
  },
  {
    title: "Cloud & Platforms",
    icon: Cloud,
    skills: ["AWS", "Google Cloud", "Salesforce"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Technical Expertise
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Skills
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent and scalable applications.
            </p>
          </ScrollReveal>
        </div>
        
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <div className="bg-background rounded-xl p-6 shadow-soft border border-border/50 card-hover h-full">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                
                <h3 className="font-semibold font-display text-lg mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm text-muted-foreground py-1.5 px-3 rounded-md bg-muted/50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SkillsSection;
