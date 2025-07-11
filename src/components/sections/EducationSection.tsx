import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Trophy,
  Medal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const honors = [
    {
      id: "mania",
      title: "3rd Place - 2025",
      event: "Global mAInia AI Hackathon",
      year: "2025",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-yellow-400 to-orange-500",
      image: "/mAInia.png",
    },
    {
      id: "oai",
      title: "Honorable Mention - 2025",
      event: "OAI HCMC",
      year: "2025",
      icon: <Medal className="h-6 w-6" />,
      color: "from-blue-400 to-purple-500",
      image: "/oai.png",
    },
    {
      id: "research",
      title: "3rd Prize - 2025",
      event: "Student Scientific Research",
      year: "2025",
      icon: <Award className="h-6 w-6" />,
      color: "from-green-400 to-teal-500",
      image: "/nckh.png",
    },
  ];

  const coursework = [
    "Machine Learning",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Cloud Computing",
    "Data Structures & Algorithms",
    "Software Engineering",
  ];

  return (
    <div className="space-y-8">
      <h2 className="section-title">Education</h2>

      <div className="space-y-8">
        {/* University Information */}
        <Card className="border-2 border-border bg-card/10 hover:bg-card/20 transition-all shadow-lg">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">
                    TON DUC THANG UNIVERSITY
                  </CardTitle>
                  <p className="text-lg text-muted-foreground font-medium">
                    Bachelor of Computer Science
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Ho Chi Minh City, Vietnam</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Expected 2026</span>
                    </div>
                  </div>
                </div>
              </div>
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary font-mono"
              >
                Expected 2026
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              {/* Coursework */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-accent/20 hover:bg-accent/30 text-foreground font-mono text-xs"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Honors & Awards */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Honors & Awards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {honors.map((honor) => (
              <Card
                key={honor.id}
                className="group overflow-hidden border-2 border-border bg-card/10 hover:bg-card/20 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                <div className="h-32 relative overflow-hidden">
                  <img
                    src={honor.image}
                    alt={`${honor.event} award`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute bottom-2 right-2 text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded">
                    {honor.year}
                  </div>
                </div>

                <CardContent className="p-4">
                  <h4 className="font-bold text-lg text-foreground mb-1">
                    {honor.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {honor.event}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
