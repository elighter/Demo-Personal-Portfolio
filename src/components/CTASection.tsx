import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Download, Calendar } from "lucide-react";

interface CTASectionProps {
  resumeUrl?: string;
  onScheduleConsultation?: () => void;
}

const CTASection = ({
  resumeUrl = "/path-to-resume.pdf",
  onScheduleConsultation = () => {},
}: CTASectionProps) => {
  return (
    <section className="w-full h-[400px] bg-[#0A192F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#64FFDA] mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Download my resume to learn more about my
            experience or schedule a consultation to discuss your project needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#112240] border-[#64FFDA] border hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 flex flex-col items-center">
              <Download className="w-12 h-12 text-[#64FFDA] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Download Resume</h3>
              <p className="text-gray-300 text-center mb-4">
                Get a detailed overview of my skills and experience
              </p>
              <Button
                className="bg-[#64FFDA] text-[#0A192F] hover:bg-[#4CD7B7] w-full"
                onClick={() => window.open(resumeUrl, "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#112240] border-[#64FFDA] border hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 flex flex-col items-center">
              <Calendar className="w-12 h-12 text-[#64FFDA] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Schedule Consultation
              </h3>
              <p className="text-gray-300 text-center mb-4">
                Book a call to discuss your project requirements
              </p>
              <Button
                variant="outline"
                className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#162844] w-full"
                onClick={onScheduleConsultation}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
