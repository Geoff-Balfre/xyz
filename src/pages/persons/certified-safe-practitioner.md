---
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
title: Certified SAFe® Practitioner
description : Certified SAFe® Practitioner page description
heading: Certified SAFe® Practitioner
engagement: Certified SAFe® Practitioner engagement...
includeinsitemap: true
includeinanalytics: true
styles: []
scripts: []
date: Last Modified
tags: ['pages', 'persons']
breadcrumbs:
  - Home|/
  - Training|/pages/training/
  - SAFe® Practitioner
---
<main class="container">

{% component_breadcrumb { data: breadcrumbs } %}

<div class="default-grid">

<section>

# {{ heading }}

<p class="lead">{{ engagement }}</p>

The page content goes here...

</section>

</div>

</main>