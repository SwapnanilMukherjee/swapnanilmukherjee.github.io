import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, ExternalLink, FileText, Github, Linkedin } from "lucide-react";

interface AcademicHeaderProps {
  name: string;
  title: string;
  affiliation: string;
  location: string;
  email: string;
  profileImage?: string;
  cvUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  scholarUrl?: string;
}

export const AcademicHeader = ({
  name,
  title,
  affiliation,
  location,
  email,
  profileImage,
  cvUrl,
  githubUrl,
  linkedinUrl,
  scholarUrl,
}: AcademicHeaderProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Avatar className="w-48 h-48 border-4 border-primary/20">
              <AvatarImage src={profileImage} alt={name} />
              <AvatarFallback className="text-4xl bg-primary/10">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Academic Info */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
            <div className="text-xl text-muted-foreground mb-4">{title}</div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{affiliation}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${email}`} className="academic-link">
                  {email}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {cvUrl && (
                <Button asChild>
                  <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              )}
              
              {githubUrl && (
                <Button variant="outline" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}
              
              {linkedinUrl && (
                <Button variant="outline" asChild>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              )}
              
              {scholarUrl && (
                <Button variant="outline" asChild>
                  <a href={scholarUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Google Scholar
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};