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
    <li><p><b>UG Thesis on Neurosymbolic Reasoning for VQA:</b> I am extend the framework proposed in <a href="">NELLIE</a> and <a href="">TV-TREES</a> line of papers to enable grounded and verifiable reasoning for Visual Question Answering (VQA). I primarily working to (a) expand the scope to open-domain commonsense-based VQA, (b) improve the mechanism of visual information integration into the inference engine, (c) use small, local models instead of large closed-source models in the engine.</p></li>
    <li><p><b>Multimodal Representational Alignment:</b> Furthering the work done in <a href="https://arxiv.org/pdf/2405.07987" target="_blank">Platonic Representation Hypothesis</a> to Vision-Language Models (VLMs), I am working alongside a group at the Precog Lab, in collaboration with MSR India, to explore the implications of multimodal representational alignment. We aim to understand how alignment relates to performance across downstream vision-language tasks, investigating the mechanisms through which alignment emerges, and exploring how these insights generalize across different model families and downstream task. </p></li>
  </ul>
</div>

<div class="section">
  <h2>Past Experience</h2>
  <ul class="research-list">
    [cite_start]    <li><p><b>ML-based Forecasting of Antiretroviral Therapy (ART) Drugs:</b> As a research intern at the Koita Centre for Digital Health Ashoka (KCDH-A) [cite: 28][cite_start], I worked with Prof. Debayan Gupta and in collaboration with Prof. Steven Clipman of Johns Hopkins Medicine Institute[cite: 30]. [cite_start]Our goal was to create machine learning methods for enhanced forecasting of critical antiretroviral therapy (ART) drugs for India's National AIDS Control Organization (NACO)[cite: 30]. [cite_start]My role involved setting up the complete data cleaning and processing pipeline, experimenting with different models [cite: 31][cite_start], and developing the first few iterations of the forecasting tool[cite: 32]. [cite_start]We presented our initial results to senior NACO executives[cite: 32]. [cite_start]The method is now being adopted by NACO for country-wide forecasting of more than 17 HIV drugs, which will optimize availability and positively impact lakhs of patients living with HIV in India[cite: 33]. [cite_start]Our poster on this work was also presented at the Johns Hopkins GKII Meet in 2024[cite: 52].</p></li>
    [cite_start]    <li><p><b>Zero-Shot Coreset Selection for Dataset Distillation:</b> Under Prof. Raghavendra Singh at the Ashoka Mphasis Lab [cite: 38][cite_start], I worked to develop compute-efficient and easily scalable methods for dataset distillation, or data pruning, through a graph and network-analysis centered approach[cite: 38]. [cite_start]I came up with a novel zero-shot method for coreset selection on image datasets [cite: 46] [cite_start]using a simple graph-based approach for dataset distillation[cite: 46]. [cite_start]The key highlight of this technique is its ability to identify important examples in a given dataset without requiring any training on that target data[cite: 47]. [cite_start]The method achieves performance comparable to current state-of-the-art (SOTA) methods while being significantly more computationally simple and efficient[cite: 48].</p></li>
    [cite_start]    <li><p><b>ML-based Cancer Metastasis Prognosis:</b> I contributed to the AISCan project under Prof. Debayan Gupta [cite: 37][cite_start], which focused on the precision profiling of cancerous tumor cells for a predictive analysis of cancer metastasis and progression[cite: 37]. [cite_start]Working with Prof. Subhashis Halder's lab, we developed a novel machine learning-based method of digital cytometry to classify and quantify gene expression data from human stem cells[cite: 43]. [cite_start]This allows for a highly accurate profiling of tumors to aid in the diagnosis and treatment of the disease[cite: 43]. [cite_start]My specific responsibilities included collating and preparing the data used for training, running all ML-based experiments, and developing the primary codebase for a software package that integrates this functionality into a user-friendly tool[cite: 44]. [cite_start]This work is currently under review[cite: 45].</p></li>
  </ul>
</div>

<div class="section">
  <h2>All Publications</h2>
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