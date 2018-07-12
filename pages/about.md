---
title: About
layout: page
permalink: /about/
---
<div markdown="1" class="row">
<div markdown="1" class="col-md-8"><div markdown="1" class="py-3 px-4">

## About the {{ site.title }}

The Historical Japanese Ceramic Comparative Collection (HJCCC) contains digital photographs and resources for identifying and describing Japanese ceramics manufactured during the Meiji and Taisho eras (roughly the nineteenth to early twentieth centuries). The intent of this collection is to provide archaeologists and other researchers with comparative examples of historical Japanese ceramics that are found on North American archaeological sites.

### Background

Many of the ceramics in this collection originally belonged to a diverse group of Japanese laborers, families, and American citizens who arrived in North America between approximately 1880 and 1924 and who are collectively known as Issei (Densho Encyclopedia 2017). As material remnants of daily life these ceramics not only provide insight into the nineteenth and twentieth-century Japanese ceramics industry and international exchanges of art, technology, and commercial goods, they also contribute to studies examining the experiences of Issei and their descendants.  

### Collections

Although the HJCCC is not an exhaustive type collection of historical Japanese ceramics, the vessels it contains are examples of an important artifact class about which relatively little has been published. The intent of this collection is to assist in identification of historical Japanese ceramics, to help standardize terminology, and to encourage further research. In order to represent a more diverse section of ceramics, the items in this collection are from multiple sources. 

Roughly half of the items in the collection are from Japanese Gulch Village, an archaeological site near Mukilteo, Washington, that was home to Japanese sawmill employees and their families between 1903 and 1928. Excavations at the site in the early 2000's recovered a large collection of materials, including Japanese ceramics, that are now housed at the [Burke Museum of Natural History and Culture](http://www.burkemuseum.org/){:target='_blank'} in Seattle (White et al. 2009). This collection is held in trust on behalf of the U.S. Air Force. 

The remainder of the ceramics featured on this digital collection are from the [Asian American Comparative Collection](http://webpages.uidaho.edu/aacc/){:target='_blank'} (AACC) at the University of Idaho. The AACC maintains a comprehensive collection of Asian-manufactured objects that have been, or are likely to be, found in archaeological or museum contexts in the western United States. Unless noted, objects from this collection are comparative examples of historical Japanese ceramics that are not from archaeological sites. 

### Classification

Many of the terms used to describe the ceramics in this collection are based on a classification system that relies on Japanese language terms. By incorporating Japanese terms for vessel forms and design concepts, HJCCC terminology attempts to match the way that the Japanese ceramics industry describes their products, and the way that Issei communities would have understood the vessels that are the focus of this collection. This classification system was developed in collaboration with Japanese ceramics expert Leland Bibb as part of a master's research project at the University of Idaho (Campbell 2017a, 2017b). It continues to grow with the input and assistance of other researchers. An abbreviated typology for ceramic forms can be seen on the [Forms page]({{ '/forms/' | relative_url }}), and full definitions of Japanese terms can be found in the HJCCC [Glossary]({{ '/resources/' | relative_url }}). 

Questions, suggestions, and comments are welcome at rjcampbell@uidaho.edu.

### Acknowledgements

This research was supported in part by the University of Idaho’s John Calhoun Smith Memorial Fund and a Summer Research Fellowship at the [Center for Digital Inquiry and Learning](https://cdil.lib.uidaho.edu/){:target='_blank'}. Research was facilitated through the [Burke Museum of Natural History and Culture](http://www.burkemuseum.org/){:target='_blank'} at the University of Washington, the US Air Force, the [Asian American Comparative Collection](http://webpages.uidaho.edu/aacc/){:target='_blank'} at the University of Idaho, and the University of Idaho Library’s [Digital Initiatives](https://www.lib.uidaho.edu/digital/about.html){:target='_blank'}. 

Priscilla Wegars, volunteer curator of the Asian American Comparative Collection at the University of Idaho Laboratory of Anthropology, served as peer reviewer for the collection. 
Japanese ceramics experts Leland E. Bibb and Louise Allison Cort provided information and expertise invaluable to this research. 
The information presented on these pages also owes a great deal to other researchers whose works are cited on the [Resources page]({{ '/resources/' | relative_url }}). 

### Data

The full descriptive metadata can be downloaded as a <a href="{{ "/data/metadata.csv" | absolute_url }}" target="_blank">CSV spreadsheet</a>, <a href="{{ "/data/metadata.json" | absolute_url }}" target="_blank">JSON</a>, or a <a href="{{ "/data/geodata.json" | absolute_url }}" target="_blank">GeoJSON</a> export.
The data can be subsetted and downloaded as CSV or Excel from the <a href="{{ "/data/" | relative_url }}" >data table</a>.

### Technical

This website was created by UI Library's [Digital Initiatives](https://www.lib.uidaho.edu/digital/) using the open source static site generator [Jekyll](https://jekyllrb.com/).
The basic frame work is created using [Bootstrap](https://getbootstrap.com/) and [jQuery](https://jquery.com/).
Document metadata is exposed using [DCMI](http://dublincore.org/), [Schema.org](http://schema.org) and [Open Graph protocol](http://ogp.me/) standards.

> *Last build date: {{ site.time | date: "%Y-%m-%d" }}*


</div></div>
{% include aboutsidebar.html %}
</div><div markdown="1" class="row">
<div markdown="1" class="col-md-12">
## References Cited

{% for citation in site.data.references %}
<p class="hangingindent">{{ citation.author }}. {{ citation.publication }}</p>
{% endfor %}
</div></div>