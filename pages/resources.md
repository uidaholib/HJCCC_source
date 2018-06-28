---
title: Resources
layout: page
permalink: /resources/
---

## Glossary
{% for item in site.data.glossary %}
<p>{%if item.search %}<a href="{{ item.search | uri_escape | prepend: '/browse/#' | absolute_url }}">
{{item.term}}</a>{% else %}{{item.term}}{% endif %}-{{item.definition}}</p>
{% endfor %}

## Works Cited

{% for citation in site.data.references %}
<p class="hangingindent">{{citation.author}},{{citation.publication}}</p>
{% endfor %}