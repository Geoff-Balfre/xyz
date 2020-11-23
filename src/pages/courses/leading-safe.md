---
thislearners:
  - CEO
  - Program or Project Manager
  - Scrum Master
  - Team Lead
  - Release Train Engineer
  - Business Analyst
  - Agile Coach
  - CIO
  - Portfolio Manager
  - Consultant
  - Engineer
  - Program Manager
  - Change Agent
  - Solution or Systems Architect
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
description: Leading SAFe® page description
heading: Leading SAFe®
includeinsitemap: true
includeinanalytics: true
styles:
  - course
  - badge
thislevel: Foundation
scripts: []
thispersonlink: /pages/persons/certified-safe-agilist
thisintro: >
  During this two-day course, attendees gain the knowledge necessary to lead a
  Lean-Agile enterprise by leveraging the Scaled Agile Framework® (SAFe®) and
  its underlying principles derived from Lean, systems thinking, Agile
  development, product development flow, and DevOps.


  Participants in the class gain insights into mastering Business Agility in order to thrive in the competitive market. They discuss how to establish team and technical agility and organize and re-organize around the flow of value. They also learn and practice the skills for supporting and executing PI Planning events and coordinating multiple Agile Release Trains (ARTs). Participants in the class explore the importance of adopting a customer-centric mindset and design thinking approach to agile product delivery. Learners also develop an understanding for implementing a Lean Portfolio Management function in their enterprise.


  Attending the class prepares individuals to take the exam and become a certified SAFe® Agilist (SA)'
title: Leading SAFe®
engagement: Thriving in the digital age with Business Agility towards resilience
date: Last Modified
breadcrumbs:
  - Home|/
  - Training|/pages/training/
  - Leading SAFe®
thisduration: 2
thisperson: Certified SAFe® Agilist
tags:
  - pages
  - course
---
<main class="container">

{% component_breadcrumb { data: breadcrumbs } %}

<div class="default-grid">

<section class="">

  # {{ heading }}

  <p class="lead">{{ engagement }}</p>

  with [{{ thisperson }}]({{ thispersonlink }})

  {{ thisintro }}

</section>

<section class="">

  ## About {{ heading }}

  ### Duration: {{ thisduration }} Day(s)

  ### Level: {{ thislevel }}

  Learners taking this course are:

  {% for item in thislearners %}<span class="badge badge-color"> {{ item }} </span>{% endfor %}

</section>

<section class="">

  ## Course Information

  ### Learning Goals

  ### What Attendees Get

  ### Prerequisites

  ### Exam Details

  <a href="#" class="btn btn-primary" title="">Button link to exam details</a>

</section>

<section class="">

## Professional Development Units &amp; Scrum Education Units

<h3 style="color:red">TBC</h3>

</section>

<section class="">

## Find Training

Ready to start your SAFe® transformation?

<a href="/pages/schedule/" class="btn btn-primary" title="">Button link to Training Calendar</a>

</section>

<section class="">

## Topics Covered

</section>

<section class="">

## Related Courses

</section>

</div>
</main>