import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  highlights,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-card p-8 card-hover border border-border/50">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-display mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      {/* Highlights */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
          Key Highlights
        </h4>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Technologies */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        {githubUrl && (
          <Button variant="default" size="default" asChild>
            <a href="https://github.com/Reshma01234/Detect-Shop-Lifting" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="outline" size="default" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
