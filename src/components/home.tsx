import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AwardsSection from "./AwardsSection";
import LeadershipSection from "./LeadershipSection";
import CTASection from "./CTASection";

const Home = () => {
  const [isNavFloating, setIsNavFloating] = useState(false);

  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      setIsNavFloating(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F]">
      <NavBar onNavigate={handleScroll} isFloating={isNavFloating} />

      <main className="space-y-20">
        <section id="hero">
          <HeroSection
            name="Emre Çakmak"
            role="Digital Solution Architect"
            description="Experienced digital transformation leader specializing in implementing innovative technology solutions, streamlining processes, and driving business growth."
            profileImage="/images/headshot.jpg"
          />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="awards">
          <AwardsSection />
        </section>

        <section id="leadership">
          <LeadershipSection />
        </section>

        <section id="contact">
          <CTASection />
        </section>
      </main>
    </div>
  );
};

export default Home;
