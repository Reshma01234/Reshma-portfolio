import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Reshma Mamidi. Built with passion.
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Github className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href="mailto:example@email.com"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
