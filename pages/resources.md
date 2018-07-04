---
title: Resources
layout: page
permalink: /resources/
---

# Glossary

<dl>
    {% for item in site.data.hjccc-glossary %}
    <dt>{% if item.search %}<a href="{{ '/resources/' | append: item.slug | append: '.html' | relative_url }}">
    {{ item.term }}</a>{% else %}{{ item.term }}{% endif %}</dt>
    <dd>- {{ item.definition }}</dd>
    {% endfor %}
</dl>

# Works Cited

{% for citation in site.data.references %}
<p class="hangingindent">{{ citation.author }}, {{ citation.publication }}</p>
{% endfor %}