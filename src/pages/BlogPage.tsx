export const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {/* Blog Posts */}
        <article className="border-b border-border pb-8">
          <div className="flex gap-4 text-sm text-muted-foreground mb-2">
            <span>2024-12-01</span>
            <span>•</span>
            <span>Research</span>
          </div>
          <h2 className="text-lg font-medium mb-3">
            <a href="#" className="academic-link">
              Reflections on My First Year as a PhD Student
            </a>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Looking back at the challenges and discoveries of my first year in graduate school. 
            What I've learned about research, academia, and myself...
          </p>
        </article>

        <article className="border-b border-border pb-8">
          <div className="flex gap-4 text-sm text-muted-foreground mb-2">
            <span>2024-10-15</span>
            <span>•</span>
            <span>Technical</span>
          </div>
          <h2 className="text-lg font-medium mb-3">
            <a href="#" className="academic-link">
              Understanding [Technical Topic]: A Beginner's Guide
            </a>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Breaking down complex concepts in [your field] for newcomers to the area. 
            Key insights and practical applications...
          </p>
        </article>

        <article className="border-b border-border pb-8">
          <div className="flex gap-4 text-sm text-muted-foreground mb-2">
            <span>2024-08-20</span>
            <span>•</span>
            <span>Academic Life</span>
          </div>
          <h2 className="text-lg font-medium mb-3">
            <a href="#" className="academic-link">
              Conference Experience: Presenting at [Conference Name]
            </a>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            My experience presenting research at my first major academic conference. 
            Lessons learned and connections made...
          </p>
        </article>

        <article className="border-b border-border pb-8">
          <div className="flex gap-4 text-sm text-muted-foreground mb-2">
            <span>2024-06-10</span>
            <span>•</span>
            <span>Resources</span>
          </div>
          <h2 className="text-lg font-medium mb-3">
            <a href="#" className="academic-link">
              Essential Resources for [Your Field] Researchers
            </a>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A curated list of papers, tools, and resources that have been invaluable 
            in my research journey...
          </p>
        </article>

        <div className="text-center pt-8">
          <p className="text-muted-foreground">
            More posts coming soon! Check back for updates on my research and academic journey.
          </p>
        </div>
      </div>
    </div>
  );
};