---
layout: default
title: Miscellaneous  
permalink: /miscellaneous/
---

# Miscellaneous

## Teaching

{% for item in site.data.teaching %}
<div class="item">
  <h3>{{ item.title }}</h3>
  <p class="meta">{{ item.role }} • {{ item.semester }}</p>
  <p class="description">{{ item.description }}</p>
</div>
{% endfor %}

## Service

{% for item in site.data.service %}
<div class="item">
  <h3>{{ item.title }}</h3>
  <p class="meta">{{ item.organization }}</p>
  <p class="description">{{ item.description }}</p>
</div>
{% endfor %}

## Awards

{% for item in site.data.awards %}
<div class="item">
  <h3>{{ item.title }}</h3>
  <p class="meta">{{ item.organization }}</p>
  <p class="description">{{ item.description }}</p>
</div>
{% endfor %}