import { useEffect, useState } from "react";
import { loadBlogPosts, type BlogPost } from "@/lib/dataLoader";

export const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const postsData = await loadBlogPosts();
        setPosts(postsData);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {loading ? (
          <div className="text-muted-foreground">Loading blog posts...</div>
        ) : posts.length > 0 ? (
          <>
            {posts.map((post, index) => (
              <article key={index} className="border-b border-border pb-8">
                <div className="flex gap-4 text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-lg font-medium mb-3">
                  <a href={`#${post.slug}`} className="academic-link">
                    {post.title}
                  </a>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
            <div className="text-center pt-8">
              <p className="text-muted-foreground">
                More posts coming soon! Check back for updates on my research and academic journey.
              </p>
            </div>
          </>
        ) : (
          <div className="text-muted-foreground">No blog posts available.</div>
        )}
      </div>
    </div>
  );
};