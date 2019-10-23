---
# create lunr store 
---
{%- assign items = site.data[site.metadata] -%}
{%- assign fields = site.data.config-lunr -%}
var store = [ 
{%- for item in items -%} 
{ "id": {{ item.object-id | jsonify }}, {% for f in fields %}{{ f.field | replace: "-","" | jsonify }}: {% if item[f.field] %}{{ item[f.field] | replace: '""','"' | jsonify }}{% else %}""{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %} }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
