---
title: Glossary
layout: page
permalink: /glossary/
---

# Glossary

Technical terms and Japanese language phrases used in the HJCCC are presented here alphabetically.
Each term is defined and those that describe elements present on HJCCC items link to examples along with the term definition.  

<dl>
    {% for item in site.data.hjccc-glossary %}
    <dt class="glossary-def">{% if item.search %}<a href="{{ '/glossary/' | append: item.slug | append: '.html' | relative_url }}">
    {{ item.term }}</a>{% else %}{{ item.term }}{% endif %}</dt>
    <dd>- {{ item.definition }}</dd>
    {% endfor %}
</dl>
