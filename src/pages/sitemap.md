---
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
title: Sitemap
description : Sitemap page description
heading: Sitemap
engagement: Sitemap page engagement
includeinsitemap: false
includeinanalytics: true
styles: []
scripts: []
date: Last Modified
tags: ['pages', 'prime']
---
<main>

<div class="default-grid">

<section>

# {{ heading }}

<p class="lead">{{ engagement }}</p>

<ul>
{# remove the site map page #}
{% for item in collections.prime %}
{%   if item.data.includeinsitemap %}
  <li><a href="{{ item.url }}" target="">{{ item.data.title }}</a></li>
{%   endif %}
{% endfor %}
  <br>
{% for item in collections.course %}
{%   if item.data.includeinsitemap %}
  <li><a href="{{ item.url }}" target="">{{ item.data.title }}</a></li>
{%   endif %}
{% endfor %}
  <br>
{% for item in collections.persons %}
{%   if item.data.includeinsitemap %}
  <li><a href="{{ item.url }}" target="">{{ item.data.title }}</a></li>
{%   endif %}
{% endfor %}
</ul>

</section>
<section class="one">

## Information Only

### Support pages

<p>
{%- for item in collections.support %}
  <a href="{{ item.url }}" target="">{{ item.data.title }}</a>&nbsp;-&nbsp; 
{%- endfor %}
<a href="/pages/test/" target="_blank">Testing...</a>
</p>

### Reference pages

<p>
{%- for item in collections.stats %}
  <a href="{{ item.url }}" target="">{{ item.data.title }}</a>{% if ( not loop.last ) %}&nbsp;-&nbsp;{% endif %} 
{%- endfor %}
</p>

### Shown in production site map

<p>
{%- for item in collections.all %}
{%-    if item.data.includeinsitemap %}
{{- item.data.title }}&nbsp;-&nbsp;
{%-    endif %}
{%- endfor %}
</p>

### Tracked by Google

<p>
{%- for item in collections.all %}
{%-    if item.data.includeinanalytics %}
{{- item.data.title }}&nbsp;-&nbsp;
{%-    endif %}
{%- endfor %}
</p>

</section>

</div>

</main>