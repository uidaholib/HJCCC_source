---
title: About
layout: page
permalink: /about/
---

<div markdown="1" class="row">

<div markdown="1" class="col-md-8"><div markdown="1" class="py-3 px-4">

# About {{ site.title }}

Blah

### Background

Blah

### Data

The full descriptive metadata can be downloaded as a <a href="{{ "/data/metadata.csv" | absolute_url }}" target="_blank">CSV spreadsheet</a>, <a href="{{ "/data/metadata.json" | absolute_url }}" target="_blank">JSON</a>, or a <a href="{{ "/data/geodata.json" | absolute_url }}" target="_blank">GeoJSON</a> export.
The data can be subsetted and downloaded as CSV or Excel from the <a href="{{ "/data/" | relative_url }}" >data table</a>.

### Acknowledgements

blah

### Technical

This website was created by UI Library's [Digital Initiatives](https://www.lib.uidaho.edu/digital/) using the open source static site generator [Jekyll](https://jekyllrb.com/).
The basic frame work is created using [Bootstrap](https://getbootstrap.com/) and [jQuery](https://jquery.com/).
Metadata visualizations are created using [DataTables](https://datatables.net/) and [Leafletjs](http://leafletjs.com/).
Document metadata is exposed using [DCMI](http://dublincore.org/), [Schema.org](http://schema.org) and [Open Graph protocol](http://ogp.me/) standards.

> Last build date: {{ site.time | date: "%Y-%m-%d" }}

</div></div>
<div class="col-md-4">
<div class="card">
<div class="card-header">Supporters</div>
<div class="card-body p-md-3">
<p class="text-center"><a href="http://www.uidaho.edu/research/entities/iwrri"><img class="img-fluid rounded mt-3" src="{{ "/images/ui-iwrri-logo.jpg" | relative_url }}" alt="IWRRI Logo" ></a></p>
<p class="text-center"><a href="https://www.usgs.gov/"><img class="img-fluid rounded mt-3" src="{{ "/images/USGS_logo.png" | relative_url }}" alt="USGS Logo"></a></p>
</div>
</div>
<p class="mt-3"><img class="img-fluid rounded" src="{{ "/images/pinecreek.jpg" | relative_url }}" alt="Pine Creek"></p>
</div>
</div>