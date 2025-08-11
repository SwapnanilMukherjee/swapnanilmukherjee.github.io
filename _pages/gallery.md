---
layout: default
title: Gallery
permalink: /gallery/
---

# Gallery

{% assign items = site.data.gallery %}
{% if items and items != empty %}
<div class="gallery-grid">
  {% for item in items %}
  <figure class="gallery-item">
    <img src="{{ item.src | relative_url }}" alt="{{ item.alt | default: 'Gallery image' }}" loading="lazy" decoding="async" data-lightbox="gallery">
    {% if item.caption %}<figcaption>{{ item.caption }}</figcaption>{% endif %}
  </figure>
  {% endfor %}
</div>
{% else %}
<p>Gallery coming soon.</p>
{% endif %}
