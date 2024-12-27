import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    details: string;
  };
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    title: "AI-Powered Analytics Platform",
    description:
      "Enterprise-scale data analytics platform with machine learning capabilities",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Python", "TensorFlow"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    details:
      "Led the development of a comprehensive analytics platform that processes over 1M data points daily. Implemented advanced ML algorithms for predictive analytics and automated reporting systems.",
  },
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#112240] text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-[#64FFDA]">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <DialogDescription className="text-gray-300 mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 text-[#64FFDA]">
            Project Details
          </h3>
          <p className="text-gray-300 leading-relaxed">{project.details}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 text-[#64FFDA]">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#0A192F] text-[#64FFDA] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <DialogFooter className="mt-8">
          <div className="flex gap-4 w-full">
            {project.liveUrl && (
              <Button
                className="flex-1 bg-[#64FFDA] text-[#0A192F] hover:bg-[#4CD7B7]"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                className="flex-1 border-[#64FFDA] text-[#64FFDA] hover:bg-[#0A192F]"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
