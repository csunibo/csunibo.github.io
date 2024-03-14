---
title: "LaTeX"
date: 2023-03-18T18:05:34+01:00
---

> "If you're thinking but not writing, you're just thinking about thinking."
> Leslie Lamport

## Introduction

[This LaTeX thesis template](https://github.com/csunibo/latex-thesis) combines the frontispiece and the example, both in LaTeX, proposed by the department.

## Usage

Click on "Use this template" to create a new thesis based on this template. Then, click on Actions to access the CI/CD functions. If you want your thesis to be automatically republished in PDF every time `main` is updated, under "Settings"/"Pages"/"Build and deployment" set "Source" to "GitHub Actions".

## CI/CD

Every time you add a commit to an open PR to `main`, the correct compilation of `thesis/thesis.tex` is checked. Every time `main` undergoes changes, the compilation result is published at `https://<username>.github.io/<repository-name>/thesis.pdf`.
