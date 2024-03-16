---
title: "AsciiDoc"
date: 2023-03-18T13:13:34+01:00
---

> "When typography is done well, words become images."
> Shawn Lukas

## Introduction

[This thesis template](https://github.com/csunibo/asciidoc-thesis) uses [AsciiDoc](https://asciidoc.org), a document format simpler and more concise than LaTeX, yet still capable of generating rich and engaging content. It is often used for technical documentation. Writing your thesis in this format can simplify your life.

You can use this project as a template for a new repository on your profile: just click on "Use this template" in the top right corner.

## Prerequisites

- [Ruby](https://www.ruby-lang.org/en/) `v2.7` or higher;
- [Asciidoctor PDF](https://docs.asciidoctor.org/pdf-converter/latest/install/).

It is recommended to install a code editor extension that supports **Asciidoc**.

## Getting Started

To compile the sample file `thesis.adoc`, use the command:

```bash
asciidoctor-pdf -a pdf-fontsdir=fonts thesis.adoc
```

## CI/CD

By clicking on **Actions** at the top, you can enable project automation:

- For each **push** to a PR directly into `main`, it will be checked
  whether your thesis compiles correctly;
- If you have set up **Github Actions** as
  `Settings` → `Pages` → `Build and deployment` → `Source`, with every change to
  `main`, your thesis will be published at
  `https://<username>.github.io/<repository-name>/thesis.pdf`.

Remember that if you change the name and path of `thesis.adoc` or `unibo.yml`, you will
need to adjust your **Actions** accordingly.

## Customization

**Asciidoc** is the language you will need to use, and you can find the
[documentation](https://docs.asciidoctor.org/asciidoc/latest/) here.

**Asciidoctor PDF** is the software that will produce the `.pdf`, and you can find the
[documentation](https://docs.asciidoctor.org/pdf-converter/latest/) for layout here.

> 🚸 Be careful when editing the `unibo.yml` file.
>
> Indentation is very important (2 spaces).
>
> **Changing the file extension of `unibo.yml` is prohibited.**

### Files

### Sections

### Decorators

### Lists

The official documentation for structure and style:

- [Generic Lists](https://docs.asciidoctor.org/asciidoc/latest/lists/unordered/)
- [Ordered Lists](https://docs.asciidoctor.org/asciidoc/latest/lists/unordered/)
- [Style](https://docs.asciidoctor.org/pdf-converter/latest/theme/list/)

We offer different styles for lists:

`•` with type `[circle]` +
`■` with type `[square]` +
`❉` with type `[disc]`

Example of a generic list:

```adoc
[circle]
* Protons
* Electrons
* Neutrons
```

Example of an ordered list:

```adoc
1. Protons
2. Electrons
3. Neutrons
```

If you use `.` instead of numbers in the ordered list, the numbers
will be automatically inserted.

### Images

### Tables

### Math Mode

### Charts

### Syntax Highlighting

### Bibliography

The bibliography is located in the `bibliografia.adoc` file.
It's simply a generic list of elements starting with
`* [[[placeholder,Placeholder Text]]]`. +
The `placeholder` before the comma is a code that can be
used in the text as a reference, the placeholder text is
the text that appears in place of the code.

### Page Numbers

The `footer` section in the `unibo.yml` file controls the [page numbers](https://docs.asciidoctor.org/pdf-converter/latest/theme/page-numbers/)
that are preset in the center. To set them on the outside edge of the
binding, replace the entire `footer` section with this:

```yaml
footer:
  height: 100
  recto:
    right:
      content: "{page-number}"
  verso:
    left:
      content: "{page-number}"
```

## External Resources

The `Computer Modern` font is released under the SIL Open Font License.
