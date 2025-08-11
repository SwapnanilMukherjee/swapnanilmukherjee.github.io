---
layout: default
---

<!-- Profile Section -->
<div class="profile">
  <img src="/assets/profile-image.jpg" alt="Profile photo" class="profile-image" loading="eager" decoding="async">
  <div class="profile-info">
    <h1>Your Name</h1>
    <p class="title">PhD Student at University Name</p>
    <p class="email">{{ site.email }}</p>
    <p>Research interests in Machine Learning, Computer Vision, and Natural Language Processing.</p>
    
    <div class="social-links">
      <a href="mailto:{{ site.email }}">📧</a>
      <a href="https://github.com/{{ site.github_username }}">GitHub</a>
      <a href="https://linkedin.com/in/{{ site.linkedin_username }}">LinkedIn</a>
      <a href="https://twitter.com/{{ site.twitter_username }}">Twitter</a>
      <a href="/cv.pdf" class="cv-button">📄 CV</a>
    </div>
  </div>
</div>

<!-- Recent Publications -->
<div class="section">
  <div class="section-header">
    <h2>Recent Publications</h2>
    <a href="/research">See all →</a>
  </div>
  
  {% for publication in site.data.publications limit:3 %}
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
</div>

<!-- Recent News -->
<div class="section">
  <div class="section-header">
    <h2>Recent News</h2>
  </div>
  
  {% for item in site.data.news limit:5 %}
  <div class="news-item">
    <span class="news-date">{{ item.date }}</span>
    <span class="news-content">{{ item.content }}</span>
  </div>
  {% endfor %}
</div>