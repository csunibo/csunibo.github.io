---
title: "Typst"
date: 2023-10-06T10:19:00+01:00
---

> "When typography is well executed, words become images."
> Shawn Lukas

## Introduction

[This thesis template](https://github.com/csunibo/typst-thesis) uses [Typst](https://typst.app), an alternative and more modern typographic system compared to $\LaTeX$, but currently less popular. Typst is also designed for scientific use.

## Configuration

You can use this project as a template for a new repository on your profile: just click on "Use this template" in the top right corner.

## Usage

Typst documentation is available [here](https://typst.app/docs/).

## CI/CD

By clicking on **Actions** at the top, you can enable project automation:

- For every **push** to a PR directly towards `main`, it will be checked that your thesis compiles correctly;
- If you have set up **GitHub Actions** as `Settings` → `Pages` → `Build and deployment` → `Source`, every change to `main` will result in your thesis being published at `https://<username>.github.io/<repository-name>/thesis.pdf`.

Remember that if you modify the name and location of `thesis.typ`, you will need to adjust your **Actions** accordingly.