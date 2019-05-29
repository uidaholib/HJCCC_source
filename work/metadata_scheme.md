# Metadata files

`hjccc_objects.csv` defines the object records, with full metadata describing each object. Each record will result in an item page that displays the full metadata and all associated images. Each record must have a unique `object-id`. The object-id is used through out the site to link records and images, and must be web safe, thus no spaces or odd characters. Currently follows convention of `hjccc-` + a number.

`hjccc_images.csv` defines individual images associated with object records. Each has an `object-id` that connects it to the record id (i.e. there maybe multiple images associated with the same object-id). Images much have a unique `identifier`, which is generally based on the original museum identifier, and matches the file name of the image. The identifier and file name must be safe for the web, thus should not include any spaces or odd characters.

`hjccc_glossary.csv` defines glossary terms that will appear in the glossary page and have an individual term page displaying the full definition and associated example images. Glossary terms are linked with objects via the `subject` field which must exactly match a term in the objects `subjects` field.
