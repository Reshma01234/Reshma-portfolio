import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <ProjectsSection />
        <div id="skills">
          <SkillsSection />
        </div>
        <CertificationsSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
