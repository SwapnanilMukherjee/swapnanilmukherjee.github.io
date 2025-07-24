import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, FileText } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

export const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Profile Section */}
      <div className="flex items-start gap-6 mb-12">
        <Avatar className="w-20 h-20 flex-shrink-0">
          <AvatarImage src={profileImage} alt="Profile" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        
        <div>
          <h1 className="text-2xl font-semibold mb-1">Your Name</h1>
          <p className="text-muted-foreground mb-2">PhD student at University Name</p>
          <p className="text-sm text-muted-foreground mb-3">your.email@university.edu</p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:your.email@university.edu">
                <Mail className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                View CV →
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-4">
          <p>
            I'm a PhD student at{" "}
            <a href="https://university.edu" className="academic-link">
              University Name
            </a>{" "}
            advised by{" "}
            <a href="#" className="academic-link">
              Prof. Advisor Name
            </a>
            . My research interests are broadly within machine learning and artificial intelligence, 
            with a focus on [your specific research areas].
          </p>
          <p>
            Previously, I completed my Master's degree at [Previous University] and have interned at 
            [Company/Lab]. I'm passionate about [your research passion] and enjoy working on 
            problems that [impact/application area].
          </p>
          <p>
            Beyond academics, I enjoy [hobbies/interests]. Feel free to reach out if you'd like to 
            chat about research, collaborate, or just say hello!
          </p>
        </div>
      </section>

      {/* Recent Research Preview */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Research</h2>
          <a href="/research" className="text-sm text-primary hover:underline">
            View all →
          </a>
        </div>
        
        <div className="space-y-6">
          {/* Research Paper 1 */}
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-muted rounded flex-shrink-0 flex items-center justify-center">
              <FileText className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium mb-1">
                <a href="#" className="academic-link">
                  Your Latest Paper Title: A Comprehensive Study
                </a>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Your Name</strong>, Co-Author Name, Another Author
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Conference/Journal Name, 2024
              </p>
              <div className="flex gap-3 text-xs">
                <a href="#" className="text-primary hover:underline">Abstract</a>
                <a href="#" className="text-primary hover:underline">PDF</a>
                <a href="#" className="text-primary hover:underline">Code</a>
                <a href="#" className="text-primary hover:underline">BibTeX</a>
              </div>
            </div>
          </div>

          {/* Research Paper 2 */}
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-muted rounded flex-shrink-0 flex items-center justify-center">
              <FileText className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium mb-1">
                <a href="#" className="academic-link">
                  Another Research Paper: Novel Approaches and Methods
                </a>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Your Name</strong>, Collaborator Name
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Workshop/Conference Name, 2024
              </p>
              <div className="flex gap-3 text-xs">
                <a href="#" className="text-primary hover:underline">Abstract</a>
                <a href="#" className="text-primary hover:underline">PDF</a>
                <a href="#" className="text-primary hover:underline">BibTeX</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent News</h2>
          <a href="/blog" className="text-sm text-primary hover:underline">
            View all →
          </a>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground w-20 flex-shrink-0">2024-12-15</span>
            <p className="text-sm">
              Started my PhD at University Name! Excited to work on [research area] with Prof. Advisor.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground w-20 flex-shrink-0">2024-11-20</span>
            <p className="text-sm">
              Paper accepted at [Conference Name]! Looking forward to presenting our work on [topic].
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground w-20 flex-shrink-0">2024-10-01</span>
            <p className="text-sm">
              Completed internship at [Company/Lab]. Great experience working on [project/area].
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};