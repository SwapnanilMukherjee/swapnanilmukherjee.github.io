---
layout: default
title: Research
permalink: /research/
---

# Research
<div class="section">
  <p>
    I am primarily interested in problems at the intersection of multimodality, commonsense abilities, and reasoning. My broad goal, in future, is to work towards unified architectures capable of modelling efficient and semantically convergent representations of different modalities corresponding to human sense-perception, to design and evaluate systems that enable the emergence of commonsense abilities in large models akin to humans, and to enable sound, verifiable, and scalable reasoning in foundation models.
  </p>
</div>

<div class="section">
  <h2>Ongoing Work</h2>
  <ul class="research-list">
    <li><b>UG Thesis on Neurosymbolic Reasoning for VQA:</b> I am extend the framework proposed in <a href="">NELLIE</a> and <a href="">TV-TREES</a> line of papers to enable grounded and verifiable reasoning for Visual Question Answering (VQA). I primarily working to (a) expand the scope to open-domain commonsense-based VQA, (b) improve the mechanism of visual information integration into the inference engine, (c) use small, local models instead of large closed-source models in the engine.</li>
    <li><b>Multimodal Representational Alignment:</b>Furthering the work done in <a href="https://arxiv.org/pdf/2405.07987" target="_blank">Platonic Representation Hypothesis</a> to Vision-Language Models (VLMs), I am working alongside a group at the Precog Lab, in collaboration with MSR India, to explore the implications of multimodal representational alignment. We aim to understand how alignment relates to performance across downstream vision-language tasks, investigating the mechanisms through which alignment emerges, and exploring how these insights generalize across different model families and downstream task. </li>
  </ul>
</div>

<div class="section">
  <h2>Past Experience</h2>
  <ul class="research-list">
    <li>Scalable training recipes for efficient vision-language models</li>
    <li>Benchmarking robustness under domain shift and distribution drift</li>
    <li>Open-source tooling for reproducible ML experiments</li>
  </ul>
</div>

<div class="section">
  <h2>Publications</h2>
  {% for publication in site.data.publications %}
  <div class="publication">
    <div class="publication-icon">📄</div>
    <div class="publication-content">
      
      {% if publication.url %}
        <h3><a href="{{ publication.url }}" target="_blank" rel="noopener noreferrer">{{ publication.title }}</a></h3>
      {% else %}
        <h3>{{ publication.title }}</h3>
      {% endif %}
      
      {% if publication.authors %}
        <p class="authors">{{ publication.authors }}</p>
      {% endif %}
      
      {% if publication.venue %}
        <p class="venue"><i>{{ publication.venue }}</i></p>
      {% endif %}
      
      <div class="publication-links">
        {% if publication.paper %}
          <a class="link-with-icon" href="{{ publication.paper }}" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg><span>Paper</span>
          </a>
        {% endif %}
        
        {% if publication.code %}
          <a class="link-with-icon" href="{{ publication.code }}" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 8 3 12 7 16"/><polyline points="17 8 21 12 17 16"/></svg><span>Code</span>
          </a>
        {% endif %}
        
        {% if publication.project %}
          <a class="link-with-icon" href="{{ publication.project }}" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"/></svg><span>Project</span>
          </a>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>