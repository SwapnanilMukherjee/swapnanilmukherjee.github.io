---
layout: default
title: Gallery
permalink: /gallery/
---

<div class="max-w-4xl mx-auto px-6 py-12">
  <div class="mb-12">
    <h1 class="text-2xl font-semibold mb-4">Gallery</h1>
    <p class="text-foreground leading-relaxed max-w-3xl">
      A collection of photos from academic conferences, research travels, and other professional activities, 
      along with some personal photography and creative work.
    </p>
  </div>

  <!-- Photography -->
  <section class="mb-16">
    <h2 class="text-xl font-semibold mb-6">Photography</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {% for photo in site.data.gallery.photography %}
      <div class="bg-card border border-border rounded-lg overflow-hidden">
        <div class="aspect-square bg-muted">
          <img src="/assets/gallery/{{ photo.filename }}" alt="{{ photo.title }}" class="w-full h-full object-cover">
        </div>
        <div class="p-4">
          <h3 class="font-medium text-foreground mb-1">{{ photo.title }}</h3>
          <p class="text-sm text-muted-foreground">{{ photo.description }}</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- Academic Travel -->
  <section class="mb-16">
    <h2 class="text-xl font-semibold mb-6">Academic Travel</h2>
    {% for travel in site.data.gallery.academic_travel %}
    <div class="mb-8">
      <h3 class="text-lg font-medium text-foreground mb-4">{{ travel.title }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {% for photo in travel.photos %}
        <div class="bg-card border border-border rounded-lg overflow-hidden">
          <div class="aspect-video bg-muted">
            <img src="/assets/gallery/{{ photo.filename }}" alt="{{ photo.description }}" class="w-full h-full object-cover">
          </div>
          <div class="p-4">
            <p class="text-sm text-muted-foreground">{{ photo.description }}</p>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </section>

  <!-- Creative Work -->
  <section>
    <h2 class="text-xl font-semibold mb-6">Creative Work</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {% for work in site.data.gallery.creative_work %}
      <div class="bg-card border border-border rounded-lg overflow-hidden">
        <div class="aspect-video bg-muted">
          <img src="/assets/gallery/{{ work.filename }}" alt="{{ work.title }}" class="w-full h-full object-cover">
        </div>
        <div class="p-4">
          <h3 class="font-medium text-foreground mb-1">{{ work.title }}</h3>
          <p class="text-sm text-muted-foreground">{{ work.description }}</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>
</div>