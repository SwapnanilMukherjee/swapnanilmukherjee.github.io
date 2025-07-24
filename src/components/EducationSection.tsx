import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear?: number;
  gpa?: string;
  thesis?: string;
  advisor?: string;
  honors?: string[];
}

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <Card key={edu.id} className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-3 mb-4">
                      <GraduationCap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                        <div className="text-primary font-medium">{edu.institution}</div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.startYear} - {edu.endYear || "Present"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-2 text-sm">
                      {edu.gpa && (
                        <div>
                          <strong>GPA:</strong> {edu.gpa}
                        </div>
                      )}
                      
                      {edu.thesis && (
                        <div>
                          <strong>Thesis:</strong> {edu.thesis}
                        </div>
                      )}
                      
                      {edu.advisor && (
                        <div>
                          <strong>Advisor:</strong> {edu.advisor}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Honors & Awards */}
                  {edu.honors && edu.honors.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Honors & Awards</h4>
                      <div className="space-y-2">
                        {edu.honors.map((honor, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {honor}
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