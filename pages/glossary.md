---
title: Glossary
layout: page
permalink: /glossary/
---


# Glossary

Technical terms and Japanese language phrases used in the HJCCC are presented here alphabetically.
Each term is defined and those that describe elements present on HJCCC items link to examples along with the term definition. 




{% capture words %}
    {% for item in site.data.hjccc-glossary %}
        {{ item.term | slice: 0 | capitalize }}
    {% endfor %}
{% endcapture %}

{% assign letters = words %}

{% assign uniqueLetters = letters | split: ' ' | uniq %}

<h1>
{% for letter in uniqueLetters %}
    <a href="#{{ letter }}">{{ letter }}</a>
{% endfor %}
</h1>

<div>
{% for letter in uniqueLetters %}
    <h2 class="pt-4" id="{{ letter }}">{{ letter }}</h2>

<dl>
    {% for item in site.data.hjccc-glossary %}
        {% assign x = item.term | slice: 0 %}
        {% if x == letter %}
    <dt class="glossary-def">{% if item.search %}<a href="{{ '/glossary/' | append: item.slug | append: '.html' | relative_url }}">
    {{ item.term }}</a>{% else %}{{ item.term }}{% endif %}</dt> 
    <dd>- {{ item.definition }}</dd>
    {% endif %}
    {% endfor %}
</dl>

{% endfor %}
</div>







