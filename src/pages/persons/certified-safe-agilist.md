---
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
title: Certified SAFe® Agilist
description : Certified SAFe® Agilist page description
heading: Certified SAFe® Agilist
engagement: Certified SAFe® Agilist engagement...
includeinsitemap: true
includeinanalytics: true
styles: []
scripts: []
date: Last Modified
tags: ['pages', 'persons']
breadcrumbs:
  - Home|/
  - Training|/pages/training/
  - SAFe® Agilist
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