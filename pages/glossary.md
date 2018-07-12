---
title: Glossary
layout: page
permalink: /glossary/
---

# Glossary

This page contains a glossary of terms and a list of references cited in the HJCCC.
Both are organized alphabetically.
Glossary terms describing elements present on HJCCC items link to examples along with the term definition.  

## Glossary

<dl>
    {% for item in site.data.hjccc-glossary %}
    <dt class="glossary-def">{% if item.search %}<a href="{{ '/glossary/' | append: item.slug | append: '.html' | relative_url }}">
    {{ item.term }}</a>{% else %}{{ item.term }}{% endif %}</dt>
    <dd>- {{ item.definition }}</dd>
    {% endfor %}
</dl>
