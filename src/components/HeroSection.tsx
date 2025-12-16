import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(185_60%_30%/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(200_70%_35%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Name */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-4 animate-fade-up-delay-1">
            Reshma <span className="text-gradient">Mamidi</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6 animate-fade-up-delay-2">
            AI & Full-Stack Developer | CSE (AI & ML) Student | Cloud & Salesforce Certified
          </p>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-10 max-w-3xl animate-fade-up-delay-3">
            Building intelligent, scalable, and user-focused applications using AI, cloud, and modern web technologies.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-1 h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button variant="outline" size="xl" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-1 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="secondary" size="xl" asChild>
              <a href="#" download>
                <Download className="mr-1 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
