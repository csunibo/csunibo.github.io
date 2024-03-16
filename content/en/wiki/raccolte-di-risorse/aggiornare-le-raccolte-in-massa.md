---
title: "Updating Collections in Bulk"
date: 2023-10-06T10:39:00+02:00
---

## Introduction

The repository [csunibo/update](https://github.com/csunibo/update) contains a simple Bash script to apply the same patch (in `.diff` format) to all course repositories at once.

## Before You Begin

For each repository, passwords for any ssh and gpg keys are prompted by git about 4 times. To prevent this, you can resort to one of the following two alternatives:

- Remove all passwords from your ssh and gpg keys;
- Launch ssh and gpg agents to add them to the cache.

## Usage

Enter a repository where you have already made the changes you are interested in:

```bash
cd /my/repository/
```

Create the patch `patch.diff` using:

```bash
git diff <last origin commit> > /the/update/repository/patch.diff
```

Move to this folder:

```bash
cd /the/update/repository/
```

Apply the patch with the commit message of your choice:

```bash
./update <commit message>
```