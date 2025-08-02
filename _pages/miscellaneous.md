---
layout: default
title: Miscellaneous
permalink: /miscellaneous/
---

<div class="max-w-4xl mx-auto px-6 py-12">
  <div class="mb-12">
    <h1 class="text-2xl font-semibold mb-4">Miscellaneous</h1>
    <p class="text-foreground leading-relaxed max-w-3xl">
      Academic activities, service work, and other professional experiences that don't fit neatly into other categories.
    </p>
  </div>

  <!-- Teaching Experience -->
  <section class="mb-16">
    <h2 class="text-xl font-semibold mb-6">Teaching Experience</h2>
    <div class="space-y-6">
      {% for item in site.data.teaching.teaching %}
      <div class="bg-card border border-border rounded-lg p-6">
        <h3 class="font-medium text-foreground mb-1">{{ item.title }}</h3>
        <p class="text-sm text-muted-foreground mb-1">{{ item.institution }}</p>
        <p class="text-sm text-muted-foreground mb-2">{{ item.instructor }} • {{ item.semester }}</p>
        {% if item.responsibilities and item.responsibilities != "" %}
        <p class="text-sm text-foreground">{{ item.responsibilities }}</p>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- Service & Volunteer Work -->
  <section class="mb-16">
    <h2 class="text-xl font-semibold mb-6">Service & Volunteer Work</h2>
    <div class="space-y-6">
      {% for item in site.data.service.service %}
      <div class="bg-card border border-border rounded-lg p-6">
        <h3 class="font-medium text-foreground mb-1">{{ item.title }}</h3>
        <p class="text-sm text-muted-foreground mb-2">{{ item.organization }} • {{ item.year }}</p>
        {% if item.description and item.description != "" %}
        <p class="text-sm text-foreground">{{ item.description }}</p>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- Awards & Honors -->
  <section>
    <h2 class="text-xl font-semibold mb-6">Awards & Honors</h2>
    <div class="space-y-6">
      {% for item in site.data.awards.awards %}
      <div class="bg-card border border-border rounded-lg p-6">
        <h3 class="font-medium text-foreground mb-1">{{ item.title }}</h3>
        <p class="text-sm text-muted-foreground">{{ item.organization }} • {{ item.year }}</p>
      </div>
      {% endfor %}
    </div>
  </section>
</div>