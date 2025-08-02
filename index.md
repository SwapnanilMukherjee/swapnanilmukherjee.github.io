---
layout: default
---

<div class="max-w-4xl mx-auto px-6 py-12">
  <!-- Profile Section -->
  <div class="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
    <div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
      <img src="/assets/profile-image.jpg" alt="Profile" class="w-full h-full object-cover">
    </div>
    
    <div class="flex-1">
      <h1 class="text-3xl font-semibold mb-2">Your Name</h1>
      <h2 class="text-xl text-muted-foreground mb-4">PhD Student, University Name</h2>
      <p class="text-foreground leading-relaxed max-w-2xl mb-6">
        Brief bio about yourself. What you study, what interests you, and what you're working on. 
        Keep this concise but informative - visitors should quickly understand your research focus 
        and academic background.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="mailto:{{ site.email }}" class="inline-flex items-center space-x-2 text-accent hover:text-primary transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>Email</span>
        </a>
        <a href="/cv.pdf" target="_blank" class="inline-flex items-center space-x-2 text-accent hover:text-primary transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span>CV</span>
        </a>
        {% if site.scholar_userid %}
        <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}" target="_blank" class="inline-flex items-center space-x-2 text-accent hover:text-primary transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.179 14.978 11.5 12 11.5s-5.548.679-6.758 2.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
          </svg>
          <span>Scholar</span>
        </a>
        {% endif %}
      </div>
    </div>
  </div>

  <!-- Recent Publications -->
  <section class="mb-16">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold">Recent Publications</h2>
      <a href="/research/" class="text-accent hover:text-primary transition-colors">View all →</a>
    </div>
    
    <div class="space-y-6">
      {% assign recent_pubs = site.data.publications.publications.2024 | slice: 0, 2 %}
      {% for pub in recent_pubs %}
      <div class="bg-card border border-border rounded-lg p-6">
        <h3 class="font-medium text-foreground mb-2">{{ pub.title }}</h3>
        <p class="text-sm text-muted-foreground mb-2">
          {% for author in pub.authors %}
            {% if author.isYou %}<strong>{{ author.name }}</strong>{% else %}{{ author.name }}{% endif %}{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </p>
        <p class="text-sm text-muted-foreground mb-3">{{ pub.venue }}</p>
        <p class="text-sm text-foreground mb-4">{{ pub.description }}</p>
        <div class="flex gap-3">
          {% for link in pub.links %}
            <a href="{{ link[1] }}" class="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition-colors">
              {{ link[0] | capitalize }}
            </a>
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- Recent News -->
  <section>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold">Recent News</h2>
    </div>
    
    <div class="space-y-4">
      {% for item in site.data.news.news limit:3 %}
      <div class="flex gap-4">
        <div class="text-sm text-muted-foreground font-mono min-w-[80px]">
          {{ item.date | date: "%b %Y" }}
        </div>
        <div class="text-sm text-foreground">{{ item.content }}</div>
      </div>
      {% endfor %}
    </div>
  </section>
</div>