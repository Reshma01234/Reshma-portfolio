import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Shoplifting Detection System",
    description:
      "An AI-powered surveillance system designed to detect shoplifting activities in real time using computer vision techniques.",
    highlights: [
      "Built a real-time video analysis system using Python and OpenCV",
      "Trained a CNN model to identify suspicious behavior based on posture, movement patterns, and object interaction",
      "Improved security monitoring by automating suspicious activity detection",
    ],
    technologies: ["Python", "Keras", "OpenCV", "CNN"],
    githubUrl: "https://github.com",
  },
  {
    title: "AI Mock Interview Web Application",
    description:
      "A full-stack AI-powered web application that helps users prepare for interviews through realistic mock interview experiences.",
    highlights: [
      "Developed dynamic interview question generation based on user-selected domains",
      "Implemented real-time interaction and personalized feedback",
      "Integrated open-source language models using Django to enhance interview preparation",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Django", "GitHub Models API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(185_60%_30%/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Featured Work
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Projects
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing my expertise in AI, machine learning, 
            and full-stack development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
