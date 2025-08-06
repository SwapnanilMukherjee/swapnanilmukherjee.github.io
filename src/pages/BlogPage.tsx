import { ArrowRight } from "lucide-react";

export function BlogPage() {
  const posts = [
    {
      title: "Understanding Deep Learning Fundamentals",
      excerpt: "A comprehensive guide to the basics of deep learning and neural networks.",
      date: "March 15, 2024",
      category: "Machine Learning",
      slug: "understanding-deep-learning"
    },
    {
      title: "Research Tips for PhD Students",
      excerpt: "Practical advice for conducting effective research during your PhD journey.", 
      date: "February 28, 2024",
      category: "Academia",
      slug: "research-tips-phd"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post, index) => (
          <article key={index} className="border border-border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {post.date}
              </span>
            </div>
            
            <h2 className="text-xl font-medium mb-3">
              <a href={`/blog/${post.slug}`} className="hover:text-muted-foreground transition-colors">
                {post.title}
              </a>
            </h2>
            
            <p className="text-muted-foreground mb-4">
              {post.excerpt}
            </p>
            
            <a 
              href={`/blog/${post.slug}`} 
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Read more
              <ArrowRight size={14} />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}