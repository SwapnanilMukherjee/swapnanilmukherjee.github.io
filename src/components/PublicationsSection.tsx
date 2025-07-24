import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Quote } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint";
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  abstract?: string;
}

interface PublicationsSectionProps {
  publications: Publication[];
}

export const PublicationsSection = ({ publications }: PublicationsSectionProps) => {
  const getTypeColor = (type: Publication["type"]) => {
    switch (type) {
      case "journal":
        return "bg-green-100 text-green-800";
      case "conference":
        return "bg-blue-100 text-blue-800";
      case "workshop":
        return "bg-purple-100 text-purple-800";
      case "preprint":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const copyBibtex = (bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    // Could add a toast notification here
  };

  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const sortedYears = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="publications" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {sortedYears.map((year) => (
            <div key={year}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">{year}</h3>
              <div className="space-y-6">
                {publicationsByYear[year].map((publication) => (
                  <Card key={publication.id} className="publication-entry">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex flex-wrap items-start gap-3">
                          <Badge className={getTypeColor(publication.type)}>
                            {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h4 className="text-lg font-semibold leading-tight">
                          {publication.title}
                        </h4>

                        {/* Authors */}
                        <div className="text-muted-foreground">
                          {publication.authors.join(", ")}
                        </div>

                        {/* Venue */}
                        <div className="text-sm text-primary font-medium">
                          {publication.venue}
                        </div>

                        {/* Abstract */}
                        {publication.abstract && (
                          <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                            <strong>Abstract:</strong> {publication.abstract}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2">
                          {publication.paperUrl && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={publication.paperUrl} target="_blank" rel="noopener noreferrer">
                                <FileText className="w-4 h-4 mr-2" />
                                Paper
                              </a>
                            </Button>
                          )}
                          
                          {publication.codeUrl && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={publication.codeUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                          
                          {publication.bibtex && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyBibtex(publication.bibtex!)}
                            >
                              <Quote className="w-4 h-4 mr-2" />
                              BibTeX
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};