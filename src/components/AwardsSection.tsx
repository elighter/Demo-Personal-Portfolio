import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trophy, Award, Star } from "lucide-react";

interface AwardProps {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: "trophy" | "award" | "star";
}

interface AwardsSectionProps {
  awards?: AwardProps[];
}

const AwardsSection = ({
  awards = [
    {
      title: "Tech Leadership Excellence",
      organization: "Global Tech Awards",
      year: "2023",
      description:
        "Recognized for outstanding leadership in digital transformation initiatives.",
      icon: "trophy",
    },
    {
      title: "Innovation Pioneer",
      organization: "Industry Leaders Forum",
      year: "2022",
      description:
        "Awarded for breakthrough contributions in enterprise software solutions.",
      icon: "award",
    },
    {
      title: "Distinguished Speaker",
      organization: "Tech Conference Series",
      year: "2021",
      description:
        "Honored for impactful presentations on emerging technologies.",
      icon: "star",
    },
  ],
}: AwardsSectionProps) => {
  const iconMap = {
    trophy: Trophy,
    award: Award,
    star: Star,
  };

  return (
    <section className="w-full min-h-[600px] bg-[#0A192F] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#64FFDA] mb-12 text-center">
          Awards & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const IconComponent = iconMap[award.icon];
            return (
              <Card
                key={index}
                className="bg-[#112240] border-none hover:scale-105 transition-transform duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-[#0A192F]">
                      <IconComponent className="w-6 h-6 text-[#64FFDA]" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {award.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[#64FFDA] font-medium">
                        {award.organization}
                      </p>
                      <p className="text-gray-400">{award.year}</p>
                    </div>
                    <p className="text-gray-300">{award.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
