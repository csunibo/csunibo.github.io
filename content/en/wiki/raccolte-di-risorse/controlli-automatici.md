---
title: "Automated Checks"
date: 2023-04-05T12:21:04+02:00
---

When there are new changes on a PR or on the `main` branch, some automated checks are performed.

It's important that all checks pass before the PR is accepted. Moderators will help you along the way.

## Naming Convention

For most folders, it's sufficient to use `kebab-case` (i.e., lowercase letters and hyphens) for both folder and file names: this check is applied recursively to subfolders and their contents to ensure consistency throughout the collection.

The following cases are exceptions. They have stricter checks, but if a subfolder passes them, its contents are not checked (the folder is not visited recursively). This is useful for subfolders whose elements, by their nature, must preserve their original naming convention, such as projects or some collections of files provided by the teaching staff.

### `dispense/` and `lucidi/`

The rules in [enumerazione.synta](https://github.com/csunibo/config/blob/main/enumerazione.synta) must be followed.

### `prove/`

The rules in [prove.synta](https://github.com/csunibo/config/blob/main/prove.synta) must be followed.

## Compilation

Any "source" files `.tex`/`.md`/`.doc(x)`/`.odt(x)` and similar must compile correctly into formats supported by CSUnibo.