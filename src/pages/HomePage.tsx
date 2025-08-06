import { Mail, Github, Linkedin, Twitter, ExternalLink, FileText } from "lucide-react";

export function HomePage() {
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
    }
  ];

  const news = [
    {
      date: "Jan 2024",
      content: "Paper accepted at Conference Name"
    },
    {
      date: "Dec 2023", 
      content: "Presented research at Workshop"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <div className="flex gap-8 items-start">
        <img
          src="/assets/profile-image.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-1">Your Name</h1>
          <p className="text-muted-foreground mb-2">PhD Student at University Name</p>
          <p className="text-sm text-muted-foreground mb-4">your.email@university.edu</p>
          <p className="text-muted-foreground mb-4">
            Research interests in Machine Learning, Computer Vision, and Natural Language Processing.
          </p>
          
          <div className="flex items-center gap-3">
            <a href="mailto:your.email@university.edu" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={16} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={16} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-sm border border-border px-3 py-1 rounded-md hover:bg-muted transition-colors">
              <FileText size={14} />
              CV
            </a>
          </div>
        </div>
      </div>

      {/* Recent Publications */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Recent Publications</h2>
          <a href="/research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            See all →
          </a>
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
                <FileText size={20} className="text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">
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
                  <a href={pub.links.code} className="text-muted-foreground hover:text-foreground transition-colors">
                    Code
                  </a>
                  <a href={pub.links.project} className="text-muted-foreground hover:text-foreground transition-colors">
                    Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent News */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Recent News</h2>
        </div>
        
        <div className="space-y-4">
          {news.map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="text-sm text-muted-foreground w-20 flex-shrink-0">
                {item.date}
              </span>
              <span className="text-sm">{item.content}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}