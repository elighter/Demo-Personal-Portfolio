import React from "react";
import { Button } from "./ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { Facebook, Github, Linkedin } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  role?: string;
  description?: string;
  profileImage?: string;
}

const HeroSection = ({
  name = "Jacob Aiden",
  role = "Frontend Developer",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet laborum, quisim quo placeat nulla dolorem nemo velit accusantium voluptatibus.",
  profileImage = "/images/headshot.jpg",
}: HeroSectionProps) => {
  return (
    <div className="min-h-screen w-full bg-[#0A192F] text-white flex items-center justify-between px-4 md:px-20 py-20">
      <ParticlesBackground />
      <div className="flex-1 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-[#00A3FF]">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#00A3FF] mb-6">{role}</h2>
        <p className="text-gray-300 mb-8">{description}</p>

        <div className="flex gap-4 mb-8">
          <Button className="bg-[#00A3FF] text-white hover:bg-[#0081CC]">
            Hire Me
          </Button>
          <Button
            variant="outline"
            className="border-[#00A3FF] text-[#00A3FF] hover:bg-[#112240]"
          >
            Let's Talk
          </Button>
        </div>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#00A3FF] hover:bg-[#112240]"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#00A3FF] hover:bg-[#112240]"
            onClick={() => window.open("https://linkedin.com", "_blank")}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#00A3FF] hover:bg-[#112240]"
            onClick={() => window.open("https://facebook.com", "_blank")}
          >
            <Facebook className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="hidden md:block flex-1">
        <img
          src={profileImage}
          alt={name}
          className="w-full max-w-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
