---
layout: default
title: Blog
permalink: /blog/
---

# Blog

{% if site.posts and site.posts != empty %}
{% for post in site.posts %}
<article class="item">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p class="meta">{{ post.date | date: "%b %d, %Y" }}{% if post.author %} • {{ post.author }}{% endif %}</p>
  <p class="description">{{ post.excerpt | strip_html | truncate: 160 }}</p>
</article>
{% endfor %}
{% else %}
<p>No posts yet. Check back soon.</p>
{% endif %}
