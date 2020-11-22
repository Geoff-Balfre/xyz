---
eleventyExcludeFromCollections: false
templateEngineOverride: njk, md
layout: _default.njk
title: Contact Us
description : Contact Us page description
heading: Contact Us
engagement: Contact Us page engagement
includeinsitemap: true
includeinanalytics: true
styles: ['bs4-only-forms','bs4-only-buttons']
scripts: ['recaptcha', 'contact']
date: Last Modified
tags: ['pages', 'prime']
---

<style>
/* use cssgrid min mnax for form */
/* compare with existing forms css */
/* add custom forms css */
</style>

<main>

<div class="default-grid">

<section>

# {{ heading }}

<p class="lead">{{ engagement }}</p>

<form id="formId1" action="../test/form-results/" method="GET">

<div class="form-group">
  <label for="firstnameId">First name</label>
  <input id="firstnameId" class="form-control" name="firstnameId" type="text" autocorrect="off" autocomplete="given-name">
</div>

<div class="form-group">
  <label for="surnameId">Surname name</label>
  <input id="surnameId" class="form-control" name="surnameId" type="text" autocorrect="off" autocomplete="family-name">
</div>

<div class="form-group">
  <label for="emailId">Your email</label>
  <input id="emailId" class="form-control" name="emailId" type="email" placeholder="example@domain.com" aria-describedby="emailIdHelp" inputmode="email" autocapitalize="off" autocorrect="off" autocomplete="email">
  <small id="emailIdHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<div class="form-group">
  <label for="selectId">Please contact me about</label>
  <select id="selectId" class="form-control" name="selectId" title="Select input" required>
  <option>Please choose one of the following</option>
  <option value="1">Consultancy</option>
  <option value="2">Coaching</option>
  <option value="3">Training</option>
  <option value="4">Something else</option>
  </select>
</div>

<div class="form-group">
  <label for="messageId">Text area</label>
  <textarea id="messageId" class="form-control" name="messageId" rows="3" title="Textarea input" value=""></textarea>
</div>

<div class="form-group">
  <label for="recaptchaId">reCaptcha</label><br>
  <div class="g-recaptcha" data-sitekey="6LfXswETAAAAAMh_0Z4DLy8tX-9VxLBZScVqCKEB"></div>
</div>

<div class="form-group">
  <div class="col-sm-4 offset-sm-4">
  <button id="buttonId1" class="btn btn-primary" name="buttonId1" type="submit">Send form</button>
  </div>
</div>

</form>

</section>

</div>

</main>