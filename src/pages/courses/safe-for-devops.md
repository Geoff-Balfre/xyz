---
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
title: SAFe® for DevOps
description : SAFe® for DevOps page description
heading: SAFe® for DevOps
engagement: Optimizing Your Value Stream
includeinsitemap: true
includeinanalytics: true
styles: ['course', 'badge']
scripts: []
date: Last Modified
tags: ['pages', 'course']
breadcrumbs:
  - Home|/
  - Training|/pages/training/
  - SAFe® for DevOps

thisperson: Certified SAFe® DevOps Practitioner
thispersonlink: /pages/persons/certified-safe-devops-practitioner
thisintro: |
  To compete in a disruptive global market, every organization needs to deliver valuable technology solutions at the speed of business. This requires a shared DevOps mindset among all the people needed to define, build, test, deploy, and release software-driven systems—not just the engineers operating a CI/CD pipeline.

  The two-day, interactive course helps people across technical, non-technical, and leadership roles work together to optimize their value stream from end to end. Attendees will learn what DevOps is, why it is important to every role, and design a continuous delivery pipeline that is tailored to their business. Attendees work in cross-functional teams to map their current state value stream from concept to cash, identify major bottlenecks to flow, and build an actionable implementation plan that will accelerate the benefits of DevOps in their organization.
thisduration: 2
thislevel: Foundation 
thislearners:
  - Scrum Master
  - Team Lead
  - Release Train Engineer
  - Business Analyst
  - Agile Coach
  - SAFe® Program Consultant
  - Consultant
  - Architect
  - Engineer
  - Developer
  - Director
  - Quality
  - Manager
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