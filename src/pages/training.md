---
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
title: Training
description : Training page description
heading: Training
engagement: Training page engagement
includeinsitemap: true
includeinanalytics: true
styles: []
scripts: []
date: Last Modified
tags: ['pages', 'prime']

breadcrumbs:
  - Home|/
  - Training

safe:
  - img: /img/safe/svg/cert_mark_SA.png
    svg: /img/safe/svg/cert_mark_SA.svg
    url: /pages/courses/leading-safe/
    name: Leading SAFe®
    lead: With SAFe® 5 Agilist certification
certs:
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-SA.png
    svg: /img/safe/svg/cert_mark_SA.svg
    url: /pages/courses/leading-safe/
    name: Leading SAFe®
    lead: With SAFe® 5 Agilist certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-SPC.png
    svg: /img/safe/svg/cert_mark_SPC.svg
    url: /pages/courses/implementing-safe/
    name: Implementing SAFe®
    lead: With SAFe® 5 Program Consultant certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-SP.png
    svg: /img/safe/svg/cert_mark_SP.svg
    url: /pages/courses/safe-for-teams/
    name: SAFe® for Teams
    lead: With SAFe® 5 Practitioner certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-SSM.png
    svg: /img/safe/svg/cert_mark_SSM.svg
    url: /pages/courses/safe-scrum-master/
    name: SAFe® Scrum Master
    lead: With SAFe® 5 Scrum Master certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-SASM.png
    svg: /img/safe/svg/cert_mark_SASM.svg
    url: /pages/courses/safe-advanced-scrum-master/
    name: SAFe® Advanced Scrum Master
    lead: With SAFe® 5 Advanced Scrum Master certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-RTE.png
    svg: /img/safe/svg/cert_mark_RTE.svg
    url: /pages/courses/safe-release-train-engineer/
    name: SAFe® Release Train Engineer
    lead: With SAFe® 5 Release Train Engineer certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-POPM.png
    svg: /img/safe/svg/cert_mark_POPM.svg
    url: /pages/courses/safe-product-owner-product-manager/
    name: SAFe® Product Owner/Product Manager
    lead: With SAFe® 5 Product Owner/Product Manager certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-SDP.png
    svg: /img/safe/svg/cert_mark_SDP.svg
    url: /pages/courses/safe-devops/
    name: SAFe® DevOps
    lead: With SAFe® 5 DevOps Practitioner certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-ASE.png
    svg: /img/safe/svg/cert_mark_ASE.svg
    url: /pages/courses/certified-safe-agile-software-engineer/
    name: SAFe® Agile Software Engineering
    lead: With SAFe® 5 Agile Software Engineering certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-SGP.png
    svg: /img/safe/svg/cert_mark_SGP.svg
    url: /pages/courses/safe-for-government/
    name: SAFe® for Government
    lead: With SAFe® 5 Government Practitioner certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-ARCH.png
    svg: /img/safe/svg/cert_mark_ARCH.svg
    url: /pages/courses/safe-for-architects/
    name: SAFe® for Architects
    lead: With SAFe® 5 Architects certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-LPM.png
    svg: /img/safe/svg/cert_mark_LPM.svg
    url: /pages/courses/lean-portfolio-management/
    name: SAFe® for Lean Portfolio Management
    lead: With SAFe® LPM certification
  - img: /img/safe/png/SAFe-5-Courseware-Thumbnails-APM.png
    svg: /img/safe/svg/cert_mark_APM.svg
    url: /pages/courses/agile-product-and-solution-management/
    name: SAFe® for Agile Product Management
    lead: With SAFe® APM certification
---
<main class="container">

{% component_breadcrumb { data: breadcrumbs } %}

<div class="default-grid">
  <section>

# {{ heading }}

  <p class="lead">{{ engagement }}</p>

  </section>

  <section>

  <div class="" style="margin: 0 auto;">
  {% for item in certs %}<img class="" style="margin:0.25rem;width:125px;height:145px;" src="{{ item.img }}" alt="SEO: Promotional Keyword Rich ALT text">&nbsp;{% endfor %}
  </div>

  </section>

  <section>

  <div class="" style="margin: 0 auto;">
  {% for item in certs %}<img class="" style="margin:0.25rem;width:66px;height:66px;" src="{{ item.svg }}" alt="SEO: Promotional Keyword Rich ALT text">&nbsp;{% endfor %}
  </div>

  </section>

  <section class="one">

## Courses
  <ul>
  {% for item in collections.course %}
  <li><a href="{{ item.url }}"{% if page.url == item.url %} class="active" aria-current="page"{% endif %} target="">{{ item.data.title }}</a></li>
  {% endfor %}
  </ul>

## Persons
  <ul>
  {% for item in collections.persons %}
  <li><a href="{{ item.url }}"{% if page.url == item.url %} class="active" aria-current="page"{% endif %} target="">{{ item.data.title }}</a></li>
  {% endfor %}
  </ul>

## Exams
  <ul>
  {% for item in collections.exams %}
  <li><a href="{{ item.url }}"{% if page.url == item.url %} class="active" aria-current="page"{% endif %} target="">{{ item.data.title }}</a></li>
  {% endfor %}
  </ul>

  </section>
</div>
</main>