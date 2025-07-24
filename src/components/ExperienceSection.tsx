import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  type: "research" | "teaching" | "industry" | "internship";
  description: string[];
  skills?: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "research":
        return "bg-blue-100 text-blue-800";
      case "teaching":
        return "bg-green-100 text-green-800";
      case "industry":
        return "bg-purple-100 text-purple-800";
      case "internship":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <div className="text-primary font-medium">{exp.organization}</div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.startDate} - {exp.endDate || "Present"}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </Badge>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    {exp.description.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Key Skills & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};