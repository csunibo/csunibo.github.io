---
title: 'Our Website'
subtitle: 'Quick and Easy Guide to CSUnibo Website'
summary: 'Brief information on contributing to the CSUnibo website, how to deploy locally, and how to add new content.'

# Date published
date: '2023-10-19T16:54:45+02:00'

# Date updated
lastmod: '2023-10-19T16:54:45+02:00'

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: false

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: ''
  focal_point: ''     # Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  placement: 2        # Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
  preview_only: false

authors:
  - csunibo

tags:
  - howto

categories:
  - contribute
  - web applications
---

[CSUnibo](https://github.com/csunibo)'s static homepage.

## How to Deploy Locally?
```bash
hugo server
```

If something goes wrong, execute
```bash
hugo --gc --minify
```	
----
## Adding New Projects to the Homepage
To add new projects to the homepage, simply create a new markdown file in the `content/en/project/` folder using the command below.
```bash
hugo new ./content/en/project/project-name/index.md
```

{{% callout note %}}
The name you give to the project will automatically be used as a link to the corresponding GitHub repository.

If it's incorrect, you can manually modify it in the markdown file.
{{% /callout %}}

> **Remember** to assign the correct tags among those proposed.

### Adding Cover Image
You can insert a cover image for a content by placing an image in the content folder named `featured.png` or `featured.jpg`

----
## Adding New Content to the Wiki
To add new content to the wiki, simply create a new markdown file in the `content/en/wiki/` folder using the command below.
This will generate a file with a ready-to-be-filled header.
```bash
hugo new ./content/en/wiki/content-name/index.md
```

To add the Italian version, just do:
```bash	
hugo new wiki/content-name/index.md
```

> **Note** Remember to set the categories, authors, and tags correctly for new content so that they can be easily found and classified.

### Adding Cover Image
You can insert a cover image for a content by placing an image in the content folder named `featured.png` or `featured.jpg`

You can configure any other display settings in the header of the `index.md` file at lines 17-25.

### Content Ordering
They are automatically sorted by creation date, except for the "Contribute" content, which is always the first.
If you want to give a different order to the content, you can set the `weight` parameter in the header of the `index.md` file of the content.

### Associating a Project with Content
Through the `projects: []` setting [line 7], you can associate a project from the homepage with the wiki content by entering the name of the project folder you want to refer to instead of the brackets.