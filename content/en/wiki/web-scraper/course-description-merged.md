---
title: "Unified Course Descriptions"
date: "2023-04-05T18:32:54+02:00"
---

A web scraper that gathers all courses with descriptions and links to their respective pages on a daily basis.
The project is hosted on [GitHub](https://github.com/csunibo/course-description-merged).
The resulting self-generated document is available in the following formats:

- [HTML](https://csunibo.github.io/course-description-merged);
- Asciidoc (visit the page of a single degree program and use the `.adoc` extension instead of `.html`);
- PDF (visit the page of a single degree program and use the `.pdf` extension instead of `.html`).

## Running Locally

Use `cargo run` to start the program.

The generated file is an AsciiDoc file.
You need to install asciidoctor, or asciidoctor-pdf, to convert the file into HTML or PDF respectively.

## Acknowledgments

Thanks to [Fabio Gaiba](https://github.com/faguccio) who, before the development of this project, manually collected the various course descriptions.