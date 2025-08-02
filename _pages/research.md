---
layout: default
title: Research
permalink: /research/
---

<div class="max-w-4xl mx-auto px-6 py-12">
  <div class="mb-12">
    <h1 class="text-2xl font-semibold mb-4">Research</h1>
    <p class="text-foreground leading-relaxed max-w-3xl">
      Brief overview of your research interests and approach. What problems are you working on? 
      What methods do you use? What impact do you hope to make in your field?
    </p>
  </div>

  <!-- Research Interests -->
  <section class="mb-16">
    <h2 class="text-xl font-semibold mb-6">Research Interests</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-card border border-border rounded-lg p-6">
        <h3 class="font-medium text-foreground mb-2">[Research Area 1]</h3>
        <p class="text-sm text-muted-foreground">Brief description of this research area and your specific interests within it.</p>
      </div>
      <div class="bg-card border border-border rounded-lg p-6">
        <h3 class="font-medium text-foreground mb-2">[Research Area 2]</h3>
        <p class="text-sm text-muted-foreground">Brief description of this research area and your specific interests within it.</p>
      </div>
      <div class="bg-card border border-border rounded-lg p-6">
        <h3 class="font-medium text-foreground mb-2">[Research Area 3]</h3>
        <p class="text-sm text-muted-foreground">Brief description of this research area and your specific interests within it.</p>
      </div>
      <div class="bg-card border border-border rounded-lg p-6">
        <h3 class="font-medium text-foreground mb-2">[Research Area 4]</h3>
        <p class="text-sm text-muted-foreground">Brief description of this research area and your specific interests within it.</p>
      </div>
    </div>
  </section>

  <!-- Publications -->
  <section>
    <h2 class="text-xl font-semibold mb-6">Publications</h2>
    
    {% for year_data in site.data.publications.publications %}
      {% assign year = year_data[0] %}
      {% assign pubs = year_data[1] %}
      
      <div class="mb-8">
        <h3 class="text-lg font-medium text-foreground mb-4">{{ year }}</h3>
        <div class="space-y-6">
          {% for pub in pubs %}
          <div class="bg-card border border-border rounded-lg p-6">
            <h4 class="font-medium text-foreground mb-2">{{ pub.title }}</h4>
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
      </div>
    {% endfor %}
  </section>
</div>