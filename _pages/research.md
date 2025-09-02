---
layout: default
title: ResearchIndia's National AIDS Control Organization (NACO). My role involved setting up the complete data cleaning and processing pipeline, experimenting with different models, and developing the first few iterations of the forecasting tool. We presented our initial results to senior NACO executives. The method is now being adopted by NACO for country-wide forecasting of more than 17 HIV drugs, which will optimize availability and positively impact lakhs of patients living with HIV
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
    <li><p><b>Undergraduate Thesis on Neurosymbolic Reasoning for VQA:</b> I am extending the framework proposed in <a href="https://arxiv.org/pdf/2209.07662">NELLIE</a> and <a href="https://arxiv.org/pdf/2402.19467">TV-TREES</a> family of work to enable grounded and verifiable reasoning for Visual Question Answering (VQA). I am primarily working to (a) expand the scope to open-domain commonsense-based VQA, (b) improve the mechanism of visual information integration into the inference engine, (c) use small, local models instead of large closed-source models in the engine.</p></li>
    <li><p><b>Multimodal Representational Alignment:</b> Furthering the work done in <a href="https://arxiv.org/pdf/2405.07987" target="_blank">Platonic Representation Hypothesis</a> to Vision-Language Models (VLMs), I am working alongside a group at the Precog Lab, in collaboration with MSR India, to explore the implications of multimodal representational alignment. We aim to understand how alignment relates to performance across downstream vision-language tasks, investigating the mechanisms through which alignment emerges, and exploring how these insights generalize across different model families and downstream task. </p></li>
  </ul>
</div>
<div class="section">
  <h2>Past Experience</h2>
  <ul class="research-list">
    <li><p><b>ML-based Forecasting of Antiretroviral Therapy (ART) Drugs:</b> I worked with Prof. Debayan Gupta and in collaboration with Prof. Steven Clipman of the Johns Hopkins Medicine Institute to develop machine learning methods for enhanced forecasting of various antiretroviral therapy (ART) drug regimens for the <a href="https://naco.gov.in/" target="_blank">National AIDS Control Authority of India (NACO)</a> supported by the <a href="https://indiainstitute.jhu.edu/news/news-2025/news-from-gkii-2024/gkii-announces-breakthrough-grant-awardees-for-health-data-research/" target="_blank">GKII Breakthrough Grant 2024</a>. I led the development of the initial prototypes of our method and set up the data ingestion and preparation pipeline in coordinators with various stakeholders at NACO and presented initial results to NACO. We finally settled on using an adaptive model based on a combination of ARIMA and TimesFM which outperformed the existing methods significantly. Our poster on this work was also invited to be presented at the Johns Hopkins GKII India Tour in 2024.</p></li>
    <li><p><b>Document Text Recognition for Indic Languages:</b> As an ML Engineer Intern at <a href="https://www.sarvam.ai/">Sarvam</a>, I independently developed the first prototype of Sarvam's document text recognition pipeline from scratch, supporting over 10 Indic languages. My responsibilities included setting up the full pipeline for data curation, collection, and preparation. I experimented with various end-to-end multimodal architectures, exploring different encoder and decoder models to devise an appropriate modality fusion mechanism and fine-tuning recipe for the task. The entire system was trained end-to-end on large-scale data using a multi-node distributed training cluster framework. Additionally, I contributed to Sarvam's Parsing API through rigorous benchmarking and evaluations prior to its release.</p></li>
    <li><p><b>Zero-Shot Coreset Selection:</b> Under Prof. Raghavendra Singh, I worked to develop compute-efficient and easily scalable methods for coreset selection (dataset distillation) through a graph and network-analysis centered approach. I came up with a novel zero-shot method for coreset selection on image datasets using a simple PageRank-based approach for dataset distillation. The key highlight of this technique is its ability to identify important examples in a given dataset without requiring any training on that target data. The method achieves performance comes close to current state-of-the-art (SOTA) methods while being more computationally simple and efficient.</p></li>
    <li><p><b>ML-based Cancer Metastasis Prognosis:</b> I contributed to the AISCan project during my first year, which focused on the precision profiling of cancerous tumor cells for a predictive analysis of cancer metastasis and progression. We developed a novel machine learning-based method of digital cytometry to classify and quantify gene expression data from human stem cells. This allows for a highly accurate profiling of tumors to aid in the diagnosis and treatment of the disease. My specific responsibilities included collating and preparing the data used for training, running all ML-based experiments, and developing the primary codebase for a software package that integrates this functionality into a user-friendly tool. This work is currently under review for a publication (see the preprint below!) and a patent.</p></li>
  </ul>
</div>
<div class="section">
  <h2>All Publications</h2>
  <p> 
    For citation information, please check my <a href="https://scholar.google.com/citations?user=SGjrwBwAAAAJ&hl=en">Google Scholar</a>.
  </p>
  {% for year_data in site.data.publications.publications %}
    {% assign year = year_data[0] %}
    {% assign pubs = year_data[1] %}
    
    <h3>{{ year }}</h3>
    
    {% for pub in pubs %}
    <div class="publication">
      <div class="publication-icon">
        {% if pub.thumbnail and pub.thumbnail != "" %}
          <img src="{{ pub.thumbnail }}" alt="{{ pub.title }}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 8px;">
        {% else %}
          📄
        {% endif %}
      </div>
      <div class="publication-content">
        <h3>
          {% if pub.links.project %}
            <a href="{{ pub.links.project }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
          {% elsif pub.links.pdf %}
            <a href="{{ pub.links.pdf }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
          {% else %}
            {{ pub.title }}
          {% endif %}
        </h3>
        <div class="authors">
          {% for author in pub.authors %}
            {% if author.isYou %}
              <span class="author-me">{{ author.name }}</span>{% unless forloop.last %}, {% endunless %}
            {% else %}
              {{ author.name }}{% unless forloop.last %}, {% endunless %}
            {% endif %}
          {% endfor %}
        </div>
        <div class="venue"><i>{{ pub.venue }}</i></div>
        <div class="publication-links">
          {% if pub.links.pdf %}
            <a class="link-with-icon" href="{{ pub.links.pdf }}" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg><span>PDF</span>
            </a>
          {% endif %}
          {% if pub.links.code %}
            <a class="link-with-icon" href="{{ pub.links.code }}" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 8 3 12 7 16"/><polyline points="17 8 21 12 17 16"/></svg><span>Code</span>
            </a>
          {% endif %}
          {% if pub.links.project %}
            <a class="link-with-icon" href="{{ pub.links.project }}" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"/></svg><span>Project</span>
            </a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  {% endfor %}
</div>