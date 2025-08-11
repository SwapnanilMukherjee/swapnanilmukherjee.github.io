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
      <a class="link-with-icon" href="mailto:{{ site.email }}" aria-label="Email">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>
      </a>
      <a class="link-with-icon" href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.06A9.34 9.34 0 0 1 12 6.8c.85 0 1.72.12 2.53.35 1.9-1.33 2.74-1.06 2.74-1.06.56 1.41.21 2.45.11 2.71.64.72 1.03 1.65 1.03 2.77 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
        <span>GitHub</span>
      </a>
      <a class="link-with-icon" href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M8 11v7"/><path d="M8 7h.01"/><path d="M12 18v-4a2 2 0 0 1 4 0v4"/></svg>
        <span>LinkedIn</span>
      </a>
      <a class="link-with-icon" href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4.9A3.6 3.6 0 0 0 12 7.9c0 .3 0 .6.1.8-3-.2-5.7-1.6-7.5-3.8-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.8 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.2 3 3.6-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.8 2.5 3.3 2.6A7.3 7.3 0 0 1 2 18.4a10.3 10.3 0 0 0 5.6 1.6c6.7 0 10.4-5.8 10.4-10.9v-.5c.7-.5 1.3-1.1 1.8-1.8z"/></svg>
        <span>Twitter</span>
      </a>
      <a href="/cv.pdf" class="cv-button">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg>
        CV
      </a>
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
        {% if publication.paper %}<a class="link-with-icon" href="{{ publication.paper }}"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg><span>Paper</span></a>{% endif %}
        {% if publication.code %}<a class="link-with-icon" href="{{ publication.code }}" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 8 3 12 7 16"/><polyline points="17 8 21 12 17 16"/></svg><span>Code</span></a>{% endif %}
        {% if publication.project %}<a class="link-with-icon" href="{{ publication.project }}" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"/></svg><span>Project</span></a>{% endif %}
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