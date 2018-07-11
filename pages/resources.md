---
title: Resources
layout: page
permalink: /resources/
---

# Resources

This page contains a glossary of terms and a list of references cited in the HJCCC.
Both are organized alphabetically.
Glossary terms describing elements present on HJCCC items link to examples along with the term definition.  

## Glossary

<dl>
    {% for item in site.data.hjccc-glossary %}
    <dt>{% if item.search %}<a href="{{ '/resources/' | append: item.slug | append: '.html' | relative_url }}">
    {{ item.term }}</a>{% else %}{{ item.term }}{% endif %}</dt>
    <dd>- {{ item.definition }}</dd>
    {% endfor %}
</dl>

## References Cited

{% for citation in site.data.references %}
<p class="hangingindent">{{ citation.author }}. {{ citation.publication }}</p>
{% endfor %}
