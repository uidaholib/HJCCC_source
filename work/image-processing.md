# create web images

using [graphicsmagick](http://www.graphicsmagick.org/) create derivatives from HJCCC images "access jpg" (were 14000px wide):

`for f in *.jpg; do gm convert "$f" -resize 6000x6000 -flatten "objects/${f%.jpg}.jpg"; done`

`for f in *.jpg; do gm convert "$f" -resize 300x300 -flatten "${f%.jpg}_th.jpg"; done`

`for f in *.jpg; do gm convert "$f" -resize 800x800 -flatten "${f%.jpg}_sm.jpg"; done`

These live at https://www.lib.uidaho.edu/digital/hjccc/objects/
