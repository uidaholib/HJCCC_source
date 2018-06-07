# compound objects

## prep metadata 

1. export CDM data as tsv
2. open in refine (if refine has issues, open with LibreOffice first, save as csv, then refine)
3. sort on Identifier, reorder permanently.
4. on description, facet on blank
5. select blank false, this is sub-set of object/record descriptions. 
6. create an id by: create new column "object-id" from CDM number.
7. export csv, and rename `metadata-objects.csv`
8. unselect blank facet, then on "object-id", edit cells > fill down. 
9. on "CONTENTdm file name", text filter for ".cpd", then click "invert". this should be a sub-set of all images (page-level metadata, or non-compound objects)
10. export csv, and rename `metadata-images.csv`

## use in templates 

Jekyll builds item pages from objects.csv, since this contains all the top level items. 
The page template checks images.csv using object-id to find the image information, including multiple images if a compound object.

image based viz can build from images.csv, and draw full description if necessary from object.csv using object-id. 

