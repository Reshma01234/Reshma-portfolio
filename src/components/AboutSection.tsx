const AboutSection = () => {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            About Me
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
            Professional Summary
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I am a Computer Science Engineering student specializing in Artificial Intelligence 
              and Machine Learning, with hands-on experience in building AI-driven and full-stack 
              web applications. I enjoy solving real-world problems by combining machine learning, 
              cloud platforms, and clean web design.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
              Through internships and personal projects, I've worked with{" "}
              <span className="text-foreground font-medium">Python, Java, AWS, Salesforce</span>, 
              and modern web technologies to develop scalable and impactful solutions. I am eager 
              to learn, collaborate, and grow as a software engineer while contributing to 
              meaningful technology.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
            {[
              { value: "2+", label: "Projects Built" },
              { value: "5+", label: "Certifications" },
              { value: "3+", label: "Technologies" },
              { value: "100%", label: "Passion" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-display text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
