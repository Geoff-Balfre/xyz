---
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
title: SAFe® for Teams
description : SAFe® for Teams page description
heading: SAFe® for Teams
engagement: Establishing Team Agility for Agile Release Trains
includeinsitemap: true
includeinanalytics: true
styles: ['course', 'badge']
scripts: []
date: Last Modified
tags: ['pages', 'course']
breadcrumbs:
  - Home|/
  - Training|/pages/training/
  - SAFe® for Teams

thisperson: Certified SAFe® Practitioner
thispersonlink: /pages/persons/certified-safe-practitioner
thisintro: |
  Build the skills needed to become a high-performing team member of an Agile Release Train (ART)—and learn how to collaborate effectively with other teams—by becoming a SAFe® 5 Practitioner.

  During this two-day course, gain an in-depth understanding of the ART, how it delivers value, and what you can do to effectively perform your role using Scrum, Kanban, and XP. Learn how to write stories and break down features, plan and execute iterations, and plan Program Increments. Finally, learn about the continuous delivery pipeline and DevOps culture, how to effectively integrate with other teams in the program, and what it takes to continuously improve the train.
thisduration: 2
thislevel: Intermediate
thislearners:
  - Program or Project Manager
  - Scrum Master
  - Team Lead
  - Release Train Engineer
  - Business Analyst
  - Agile Coach
  - Consultant
  - Architect
  - Engineer
  - Developer
  - Director
  - Quality
  - Product Manager
  - Product Owner
  - Program Manager
  - Change Agent
  - Operations
  - Programmer 
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