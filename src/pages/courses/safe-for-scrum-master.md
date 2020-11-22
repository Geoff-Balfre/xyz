---
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
title: SAFe® Scrum Master
description : SAFe® Scrum Master page description
heading: SAFe® Scrum Master
engagement: Applying the Scrum Master role within a SAFe® enterprise
includeinsitemap: true
includeinanalytics: true
styles: ['course', 'badge']
scripts: []
date: Last Modified
tags: ['pages', 'course']
breadcrumbs:
  - Home|/
  - Training|/pages/training/
  - SAFe® Scrum Master

thisperson: Certified SAFe® Scrum Master
thispersonlink: /pages/persons/certified-safe-scrum-master
thisintro: |
  In this two-day course, attendees gain an understanding of the role of a Scrum Master in a SAFe® enterprise. Unlike traditional Scrum Master training that focuses on the fundamentals of team-level Scrum, the SAFe® Scrum Master course explores the role of the Scrum Master in the context of the entire enterprise, and prepares attendees to successfully plan and execute the Program Increment (PI), the primary enabler of alignment throughout all levels of a SAFe® organization. This includes learning the key components of Agile at scale development, how Scrum is facilitated throughout the enterprise, and how to execute Iteration Planning.

  Attendees discover how to build high performing Agile teams by becoming a servant leader and coach, and how to coach those teams to deliver the maximum business value at scale. SAFe® 5 Scrum Master (SSM) certification signifies that people are prepared to perform the role of Scrum Master in a SAFe® environment, increasing their value to teams and organizations that are implementing SAFe®.
thisduration: 2
thislevel: Intermediate
thislearners:
  - Program or Project Manager
  - Scrum Master
  - Team Lead
  - Release Train Engineer
  - Business Analyst
  - Agile Coach
  - Portfolio Manager
  - Consultant
  - Architect
  - Engineer
  - Developer
  - Director
  - Quality
  - Manager
  - Product Manager
  - Product Owner
  - Delivery Manager
  - Program Manager
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

  <a href="/pages/schedule/" class="btn btn-primary" title="">Button link to exam details</a>

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