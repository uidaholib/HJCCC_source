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

exiftool -IPTC:Source="Burke Museum 45SN398B/2007" -XMP-dc:Source="Photo courtesy of the Burke Museum of Natural History and Culture, catalog nos. 45SN398B/2007, US Air Force Collection, held in trust at the Burke Museum, Seattle." *.jpg
