# Embedded Metadata

Metadata can be embedded in images to provide attribution directly linked with the image file.
Use Exiftool to add in batches (see [intro notes](https://evanwill.github.io/_drafts/notes/exiftool.html)).

## HJCCC batches

`for f in *.jpg; do A="${f#45SN398B-2007-}"; NAME="${A%_*.jpg}"; exiftool -Title="Historical Japanese Ceramic Comparative Collection" -Copyright="Photo courtesy of the Burke Museum of Natural History and Culture, catalog nos. 45SN398B/2007/${NAME%.jpg}, US Air Force Collection, held in trust at the Burke Museum, Seattle." -XMP-dc:Source="Photo courtesy of the Burke Museum of Natural History and Culture, catalog nos. 45SN398B/2007/${NAME%.jpg}, US Air Force Collection, held in trust at the Burke Museum, Seattle." "$f"; done`

`exiftool -Title="Historical Japanese Ceramic Comparative Collection" -Copyright="Photo courtesy of the Asian American Comparative Collection, University of Idaho." -XMP-dc:Source="Photo courtesy of the Asian American Comparative Collection, University of Idaho." *.jpg`

## Old Notes...

guidelines, http://www.digitizationguidelines.gov/guidelines/GuidelinesEmbeddedMetadata.pdf

exiftool, https://sno.phy.queensu.ca/~phil/exiftool/#running
IPTC tags, https://sno.phy.queensu.ca/~phil/exiftool/TagNames/IPTC.html

IPTC: 

- 115 Source
- 116 CopyrightNotice

-[GROUP:]TAG=VALUE

`exiftool -IPTC:Source="test" 45SN398B-2007-222_th_sm.jpg

-Copyright=""
-XMP:Source=""
-XMP:Rights=""exif
