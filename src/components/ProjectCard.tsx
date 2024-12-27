import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing key features and technologies used.",
  technologies = ["React", "TypeScript", "Tailwind"],
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  githubUrl = "https://github.com",
  liveUrl = "https://example.com",
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <Card
      className="w-[450px] h-[380px] bg-[#112240] text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="p-4">
        <div
          className="w-full h-48 rounded-lg bg-cover bg-center mb-4"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <CardTitle className="text-xl font-bold text-[#64FFDA]">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <CardDescription className="text-gray-300 line-clamp-2">
          {description}
        </CardDescription>

        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#0A192F] text-[#64FFDA] hover:bg-[#162844]"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 flex justify-end gap-2">
        {githubUrl && (
          <Button
            variant="ghost"
            size="icon"
            className="text-[#64FFDA] hover:bg-[#0A192F]"
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, "_blank");
            }}
          >
            <Github className="h-5 w-5" />
          </Button>
        )}
        {liveUrl && (
          <Button
            variant="ghost"
            size="icon"
            className="text-[#64FFDA] hover:bg-[#0A192F]"
            onClick={(e) => {
              e.stopPropagation();
              window.open(liveUrl, "_blank");
            }}
          >
            <ExternalLink className="h-5 w-5" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
