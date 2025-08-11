---
layout: default
title: Research
permalink: /research/
---

# Research

## Research Interests
<ul>
  <li>Machine Learning: representation learning, optimization, and robust generalization</li>
  <li>Computer Vision: multimodal perception, self-supervised learning</li>
  <li>Natural Language Processing: transformers, retrieval-augmented generation</li>
</ul>

## Ongoing Work
<ul>
  <li>Scalable training recipes for efficient vision-language models</li>
  <li>Benchmarking robustness under domain shift and distribution drift</li>
  <li>Open-source tooling for reproducible ML experiments</li>
</ul>

{% for publication in site.data.publications %}
<div class="publication">
  <div class="publication-icon">📄</div>
  <div class="publication-content">
    <h3><a href="{{ publication.url }}">{{ publication.title }}</a></h3>
    <p class="authors">{{ publication.authors }}</p>
    <p class="venue">{{ publication.venue }}</p>
    <div class="publication-links">
      {% if publication.paper %}<a class="link-with-icon" href="{{ publication.paper }}"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg><span>Paper</span></a>{% endif %}
      {% if publication.code %}<a class="link-with-icon" href="{{ publication.code }}" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 8 3 12 7 16"/><polyline points="17 8 21 12 17 16"/></svg><span>Code</span></a>{% endif %}
      {% if publication.project %}<a class="link-with-icon" href="{{ publication.project }}" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"/></svg><span>Project</span></a>{% endif %}
    </div>
  </div>
</div>
{% endfor %}