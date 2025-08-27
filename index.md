---
layout: default
---

<!-- Profile Section -->
<div class="profile">
  <img src="/assets/profile-image.jpg" alt="Profile photo" class="profile-image" loading="eager" decoding="async">
  <div class="profile-info">
    <h1>Swapnanil Mukherjee</h1>
    <p class="title">Ashoka University</p>
    <p class="email">{{ site.email }}</p>
    
    <div class="social-links">
      <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer" title="GitHub">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.06A9.34 9.34 0 0 1 12 6.8c.85 0 1.72.12 2.53.35 1.9-1.33 2.74-1.06 2.74-1.06.56 1.41.21 2.45.11 2.71.64.72 1.03 1.65 1.03 2.77 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
      </a>
      <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3zM8 18H5v-8h3v8zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.75 1.75 0 0 1-1.8 1.75zM19 18h-3v-4.12c0-1.15-.02-2.63-1.65-2.63-1.62 0-1.87 1.24-1.87 2.55V18h-3v-8h2.9v1h.1c.4-.75 1.35-1.55 2.8-1.55 3 0 3.55 1.95 3.55 4.5V18z"/>
        </svg>
      </a>
      <a href="https://x.com/{{ site.twitter_username }}" target="_blank" rel="noopener noreferrer" title="Twitter">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="https://bsky.app/profile/{{ site.bluesky_username}}" target="_blank" rel="noopener noreferrer" title="Bluesky">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.038.417-.05-.134.04-.276.083-.42.13-2.670-.296-5.567.628-6.383 3.364C.378 17.884 0 22.844 0 23.533c0 .688.139 1.86.902 2.202.659.3 1.664.622 4.3-1.239C7.954 22.554 10.913 18.615 12 16.501c1.087 2.114 4.046 6.053 6.798 7.995 2.636 1.861 3.641 1.54 4.3 1.239.763-.342.902-1.514.902-2.202 0-.689-.378-5.649-.624-6.479-.816-2.736-3.713-3.66-6.383-3.364-.144-.047-.286-.09-.42-.13.142.012.281.03.417.05 2.67.296 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z"/>
        </svg>
      </a>
      <a href="https://scholar.google.com/citations?user={{ site.scholar_userid}}" target="_blank" rel="noopener noreferrer" title="Google Scholar">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
        </svg>
      </a>
      <a href="/assets/CV.pdf" target="_blank" class="cv-button" title="Download CV">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg>
        CV
      </a>
    </div>
  </div>
</div>

<!-- Bio Section -->
<div class="section">
  <h2>About Me</h2>
  <p>I am a final year undergraduate student at <a href="https://wwww.ashoka.edu.in">Ashoka University</a>. My research interests lie in <b>multimodal AI</b>, problems at the <b>intersection of vision and language</b>, <b>commonsense abilities</b> in foundation models, and <b>reasoning</b>.</p>
  <p>I am currently an intern at the <a href="https://precog.iiit.ac.in/" target="_blank">Precog Lab</a> at IIIT Hyderabad where I am exploring representational alignment between modalities and its implication on downstream tasks in collaboration with <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-india/" target="_blank"> Microsoft Research India</a>. I am also pursuing my undergraduate thesis on <a href="https://arxiv.org/abs/2209.07662" target="_blank">neurosymbolic methods</a> for verifiable and grounded Visual Question Answering (VQA), under the supervision of <a href="https://www.ashoka.edu.in/profile/debayan-gupta/" target="_blank">Prof. Debayan Gupta</a> (Ashoka University) and <a href="https://adityasomak.github.io/#about" target="_blank">Prof. Somak Aditya</a> (IIT Kharagpur). For more details, check out my <a href="https://github.com/SwapnanilMukherjee/swapnanilmukherjee.github.io/blob/main/assets/CV.pdf>">CV</a>, or look at my <a href="/research">research</a>. 
  </p>
  <p>Aside from work, there aren't many things that I do (which I am slowly trying to change). But sometimes, when I do find the motivation, I enjoy obsessing over frames. You can find some of them <a href="/gallery">here</a>. I am quite into Marvel (and other comic universes), have an alarming number of <a href="https://open.spotify.com/listeningstats/share/4tgKHIWTjT4y1C9eMLqeIu?si=WWctd3MwQ_iZfaAQZod70A&lang=en&uri=spotify%3Alisteningstats" target="_blank">Spotify</a> minutes, and I try to swim sometimes. Please reach out to me if you find any of these interesting, or just want to have a chat!</p>
  <p class="note"> [NOTE:] I am also actively looking for PhD positions starting Fall 2026 in the aforementioned research areas. If there are any openings and I might be a good fit for your group, do let me know!</p>
</div>

<!-- Recent Publications -->
<div class="section">
  <div class="section-header">
    <h2>Recent Publications</h2>
    <a href="/research">See all →</a>
  </div>
  
  {% for publication in site.data.publications limit:2 %}
  <div class="publication">
    <div class="publication-icon">📄</div>
    <div class="publication-content">
      <h3><a href="{{ publication.url }}">{{ publication.title }}</a></h3>
      <p class="authors">{{ publication.authors }}</p>
      <p class="venue"><i>{{ publication.venue }}</i></p>
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