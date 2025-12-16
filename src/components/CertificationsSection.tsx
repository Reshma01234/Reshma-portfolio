import { Award, Briefcase } from "lucide-react";

const certifications = [
  { title: "Salesforce AI Associate", type: "certification" },
  { title: "Salesforce Certified Platform Developer", type: "certification" },
  { title: "Salesforce Agentforce Specialist", type: "certification" },
  { title: "Google Cloud Associate Cloud Engineer", type: "certification" },
];

const experiences = [
  { title: "AWS Cloud Virtual Internship", type: "experience" },
  { title: "Java Full Stack Developer Virtual Internship", type: "experience" },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(185_60%_30%/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Credentials
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Certifications & Experience
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications and hands-on experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Award className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-display">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border/50 card-hover flex items-center gap-4"
                >
                  <div className="w-3 h-3 rounded-full gradient-primary shrink-0" />
                  <span className="font-medium">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-display">Experience</h3>
            </div>
            
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border/50 card-hover flex items-center gap-4"
                >
                  <div className="w-3 h-3 rounded-full gradient-primary shrink-0" />
                  <span className="font-medium">{exp.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
