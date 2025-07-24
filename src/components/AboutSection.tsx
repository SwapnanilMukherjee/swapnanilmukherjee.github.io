import { Card, CardContent } from "@/components/ui/card";

interface AboutSectionProps {
  bio: string;
  researchInterests: string[];
}

export const AboutSection = ({ bio, researchInterests }: AboutSectionProps) => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Biography */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Biography</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                {bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Research Interests */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
              <div className="space-y-3">
                {researchInterests.map((interest, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};