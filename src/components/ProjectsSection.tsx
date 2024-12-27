import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  details: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = [
    {
      id: "1",
      title: "AI Analytics Dashboard",
      description:
        "Enterprise-scale data analytics platform with machine learning capabilities",
      technologies: ["React", "TypeScript", "Python", "TensorFlow"],
      imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
      githubUrl: "https://github.com/example/project1",
      liveUrl: "https://example.com/project1",
      details:
        "Led the development of a comprehensive analytics platform that processes over 1M data points daily. Implemented advanced ML algorithms for predictive analytics and automated reporting systems.",
    },
    {
      id: "2",
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with real-time inventory management",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
      githubUrl: "https://github.com/example/project2",
      liveUrl: "https://example.com/project2",
      details:
        "Built a scalable e-commerce platform handling thousands of transactions daily. Implemented real-time inventory tracking and automated order fulfillment systems.",
    },
    {
      id: "3",
      title: "Blockchain DApp",
      description:
        "Decentralized application for secure digital asset management",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
      githubUrl: "https://github.com/example/project3",
      liveUrl: "https://example.com/project3",
      details:
        "Developed a decentralized application for managing digital assets on the Ethereum blockchain. Implemented smart contracts and web3 integration.",
    },
  ],
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="w-full min-h-screen bg-[#0A192F] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#64FFDA] mb-8">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            isOpen={true}
            onClose={() => setSelectedProject(null)}
            project={{
              title: selectedProject.title,
              description: selectedProject.description,
              image: selectedProject.imageUrl,
              technologies: selectedProject.technologies,
              githubUrl: selectedProject.githubUrl,
              liveUrl: selectedProject.liveUrl,
              details: selectedProject.details,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
