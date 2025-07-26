import { Mail, Github, Linkedin, Twitter, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h3 className="font-medium text-foreground">Your Name</h3>
            <p className="text-sm text-muted-foreground">your.email@university.edu</p>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://scholar.google.com/citations?user=yourid" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://bsky.app/profile/yourusername.bsky.social" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5c-5.5 0-10 4.5-10 10v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.5-4.5-10-10-10zm-2 13.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:your.email@university.edu">
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};