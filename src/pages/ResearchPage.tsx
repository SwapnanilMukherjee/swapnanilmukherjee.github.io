import { FileText } from "lucide-react";

export function ResearchPage() {
  const publications = [
    {
      title: "Sample Research Paper Title",
      authors: "Your Name, Co-Author Name", 
      venue: "Conference/Journal Name 2024",
      links: {
        paper: "#",
        code: "#",
        project: "#"
      }
    },
    {
      title: "Another Research Paper",
      authors: "Your Name, Another Co-Author",
      venue: "Another Conference 2023", 
      links: {
        paper: "#",
        code: "#"
      }
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Research</h1>
      
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div key={index} className="flex gap-4 pb-8 border-b border-border last:border-b-0">
            <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
              <FileText size={20} className="text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">
                <a href={pub.links.paper} className="hover:underline">
                  {pub.title}
                </a>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
              <p className="text-sm text-muted-foreground mb-3">{pub.venue}</p>
              <div className="flex gap-4 text-xs">
                <a href={pub.links.paper} className="text-muted-foreground hover:text-foreground transition-colors">
                  Paper
                </a>
                {pub.links.code && (
                  <a href={pub.links.code} className="text-muted-foreground hover:text-foreground transition-colors">
                    Code
                  </a>
                )}
                {pub.links.project && (
                  <a href={pub.links.project} className="text-muted-foreground hover:text-foreground transition-colors">
                    Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}