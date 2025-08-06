---
layout: default
title: Research
permalink: /research/
---

# Research

{% for publication in site.data.publications %}
<div class="publication">
  <div class="publication-icon">📄</div>
  <div class="publication-content">
    <h3><a href="{{ publication.url }}">{{ publication.title }}</a></h3>
    <p class="authors">{{ publication.authors }}</p>
    <p class="venue">{{ publication.venue }}</p>
    <div class="publication-links">
      {% if publication.paper %}<a href="{{ publication.paper }}">Paper</a>{% endif %}
      {% if publication.code %}<a href="{{ publication.code }}">Code</a>{% endif %}
      {% if publication.project %}<a href="{{ publication.project }}">Project</a>{% endif %}
    </div>
  </div>
</div>
{% endfor %}