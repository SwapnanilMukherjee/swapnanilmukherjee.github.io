import { FileText, ExternalLink } from "lucide-react";

export const ResearchPage = () => {
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

        {/* Publications by Year */}
        <section>
          <h2 className="text-lg font-medium mb-6">Publications</h2>
          
          {/* 2024 */}
          <div className="mb-8">
            <h3 className="text-md font-medium mb-4 text-primary">2024</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-20 h-16 bg-muted rounded flex-shrink-0 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">
                    Your Paper Title: A Novel Approach to [Problem Area]
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Your Name</strong>, Co-Author One, Co-Author Two, Senior Author
                  </p>
                  <p className="text-sm text-primary mb-3">
                    Conference on [Area] (Top-tier venue), 2024
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Brief description of your paper's contribution. What problem did you solve? 
                    What was novel about your approach? What were the key results?
                  </p>
                  <div className="flex gap-4 text-sm">
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      Abstract
                    </a>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      PDF
                    </a>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Code
                    </a>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      BibTeX
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-20 h-16 bg-muted rounded flex-shrink-0 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">
                    Another Research Paper: Exploring [Research Area]
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Your Name</strong>, Advisor Name, Collaborator
                  </p>
                  <p className="text-sm text-primary mb-3">
                    Workshop at [Major Conference], 2024
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Another brief description of the work. What was the research question? 
                    What methodology did you use? What insights did you gain?
                  </p>
                  <div className="flex gap-4 text-sm">
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      Abstract
                    </a>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      PDF
                    </a>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      BibTeX
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2023 */}
          <div className="mb-8">
            <h3 className="text-md font-medium mb-4 text-primary">2023</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-20 h-16 bg-muted rounded flex-shrink-0 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">
                    Previous Work: Investigating [Earlier Research Topic]
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Your Name</strong>, Other Authors
                  </p>
                  <p className="text-sm text-primary mb-3">
                    [Journal/Conference Name], 2023
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Description of earlier work that led to your current research interests.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      PDF
                    </a>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      BibTeX
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section>
          <h2 className="text-lg font-medium mb-4">Ongoing Projects</h2>
          <div className="space-y-4">
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
      </div>
    </div>
  );
};