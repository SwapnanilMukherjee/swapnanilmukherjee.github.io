import { FileText, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { loadPublications, type Publication } from "@/lib/dataLoader";

export const ResearchPage = () => {
  const [publications, setPublications] = useState<Record<string, Publication[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const pubData = await loadPublications();
        setPublications(pubData);
      } catch (error) {
        console.error('Error loading publications:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-8">Research</h1>
      
      <div className="space-y-8">
        {/* Research Interest */}
        <section>
          <h2 className="text-lg font-medium mb-4">Research Interests</h2>
          <p className="text-muted-foreground leading-relaxed">
            My research focuses on [your specific area], with particular interest in [specific topics]. 
            I'm passionate about [broader impact/application]. My work spans [methodologies/approaches] 
            and aims to [research goals].
          </p>
        </section>

        {/* Ongoing Projects */}
        <section>
          <h2 className="text-lg font-medium mb-4">Ongoing Projects</h2>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-medium mb-2">Current Project Title</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Brief description of what you're currently working on. Expected completion timeline 
                and potential impact.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Collaborative Research</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Description of collaborative work with other researchers or institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Publications by Year */}
        <section>
          <h2 className="text-lg font-medium mb-6">Publications</h2>
          
          {loading ? (
            <div className="text-muted-foreground">Loading publications...</div>
          ) : Object.keys(publications).length > 0 ? (
            Object.keys(publications)
              .sort((a, b) => parseInt(b) - parseInt(a))
              .map(year => (
                <div key={year} className="mb-8">
                  <h3 className="text-md font-medium mb-4 text-accent">{year}</h3>
                  <div className="space-y-6">
                    {publications[year].map((pub, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-20 h-16 bg-muted rounded flex-shrink-0 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-2">
                            {pub.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {pub.authors.map((author, i) => (
                              <span key={i}>
                                {author.isYou ? <strong>{author.name}</strong> : author.name}
                                {i < pub.authors.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </p>
                          <p className="text-sm text-accent mb-3">
                            {pub.venue}, {pub.year}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {pub.description}
                          </p>
                          <div className="flex gap-4 text-sm">
                            {pub.links.abstract && (
                              <a href={pub.links.abstract} className="text-accent hover:text-primary hover:underline flex items-center gap-1">
                                <FileText className="w-3 h-3" />
                                Abstract
                              </a>
                            )}
                            {pub.links.pdf && (
                              <a href={pub.links.pdf} className="text-accent hover:text-primary hover:underline flex items-center gap-1">
                                <FileText className="w-3 h-3" />
                                PDF
                              </a>
                            )}
                            {pub.links.code && (
                              <a href={pub.links.code} className="text-accent hover:text-primary hover:underline flex items-center gap-1">
                                <ExternalLink className="w-3 h-3" />
                                Code
                              </a>
                            )}
                            {pub.links.bibtex && (
                              <a href={pub.links.bibtex} className="text-accent hover:text-primary hover:underline flex items-center gap-1">
                                <FileText className="w-3 h-3" />
                                BibTeX
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          ) : (
            <div className="text-muted-foreground">No publications available.</div>
          )}
        </section>

      </div>
    </div>
  );
};