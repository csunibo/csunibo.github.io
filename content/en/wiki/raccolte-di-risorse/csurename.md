---
title: "csurename"
date: 2023-04-05T12:35:38+02:00
draft: true
---

`csurename` (hosted [on GitHub](https://github.com/csunibo/csurename)) is a small command-line tool that renames all files in a folder to adhere to the `kebab-case` convention of CSUnibo's resources for courses.

![screenshot-of-csurename](https://user-images.githubusercontent.com/34945306/90803472-c85b3f00-e2e6-11ea-8552-9e14ac306522.png)

## Usage

### Specify a Different Folder Than the Current One

You can use a different folder than the current one by passing it as the first parameter:

```bash
csurename ~/Pictures
```

### Recursively Rename All Files in Descendant Subfolders

To rename recursively, you can use `-r` or `--recursive`:

```bash
csurename -r ~/Pictures
```

### Rename Folders as Well

To act on folders as well as files, you can use `-D` or `--dir`:

```bash
csurename -D ~/Pictures
```