import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, BookOpen, Newspaper, Video } from "lucide-react";

interface LeadershipContentItem {
  type: "article" | "video" | "publication";
  title: string;
  description: string;
  date: string;
  link: string;
}

interface LeadershipSectionProps {
  content?: LeadershipContentItem[];
}

const LeadershipSection = ({
  content = [
    {
      type: "article",
      title: "The Future of Tech Leadership",
      description:
        "Exploring emerging trends in technology leadership and innovation",
      date: "2024-01-15",
      link: "https://example.com/article1",
    },
    {
      type: "video",
      title: "Building High-Performance Teams",
      description:
        "Key strategies for developing and leading successful tech teams",
      date: "2023-12-10",
      link: "https://example.com/video1",
    },
    {
      type: "publication",
      title: "Digital Transformation Guide",
      description:
        "A comprehensive guide to leading digital transformation initiatives",
      date: "2023-11-20",
      link: "https://example.com/publication1",
    },
  ],
}: LeadershipSectionProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "article":
        return <Newspaper className="h-6 w-6 text-[#64FFDA]" />;
      case "video":
        return <Video className="h-6 w-6 text-[#64FFDA]" />;
      case "publication":
        return <BookOpen className="h-6 w-6 text-[#64FFDA]" />;
      default:
        return <Newspaper className="h-6 w-6 text-[#64FFDA]" />;
    }
  };

  return (
    <section className="w-full min-h-[600px] bg-[#0A192F] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-8">
          Thought Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <Card
              key={index}
              className="bg-[#112240] border-none hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {getIcon(item.type)}
                <CardTitle className="text-xl text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{item.date}</span>
                  <Button
                    variant="ghost"
                    className="text-[#64FFDA] hover:bg-[#1A2F4C]"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
