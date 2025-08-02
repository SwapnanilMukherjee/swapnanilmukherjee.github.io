---
layout: default
title: Blog
permalink: /blog/
---

<div class="max-w-4xl mx-auto px-6 py-12">
  <div class="mb-12">
    <h1 class="text-2xl font-semibold mb-4">Blog</h1>
    <p class="text-foreground leading-relaxed max-w-3xl">
      Thoughts on research, academia, and other topics that interest me. 
      A mix of technical posts, reflections on academic life, and resources I've found helpful.
    </p>
  </div>

  <div class="space-y-8">
    {% for post in site.data.blog.posts %}
    <article class="bg-card border border-border rounded-lg p-6">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
          {{ post.category }}
        </span>
        <time class="text-sm text-muted-foreground">
          {{ post.date | date: "%B %d, %Y" }}
        </time>
      </div>
      
      <h2 class="text-lg font-medium text-foreground mb-3">
        <a href="/blog/{{ post.slug }}/" class="hover:text-primary transition-colors">
          {{ post.title }}
        </a>
      </h2>
      
      <p class="text-foreground leading-relaxed mb-4">{{ post.excerpt }}</p>
      
      <a href="/blog/{{ post.slug }}/" class="inline-flex items-center text-accent hover:text-primary transition-colors">
        Read more
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </article>
    {% endfor %}
  </div>
</div>