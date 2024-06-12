---
title: "Dynamik"
date: 2023-10-06T10:58:08+02:00
---

## Introduction

[Dynamik](https://github.com/csunibo/dynamik) is the web application that allows you to browse the collections of resources of CSUnibo.

## Development

Clone the project, install dependencies, and update Git submodules:

```bash
pnpm install
git submodule init
git submodule update
```

Create a `.env` file with:

```env
VITE_UPLD_URL="http://localhost"
```

To start a development instance:

```bash
pnpm dev
```

## Compilation

To compile a production instance:

```bash
pnpm build
```

To preview it:

```bash
pnpm preview
```

## Public Instances

There are several public instances of Dynamik:

- [main](https://risorse.students.cs.unibo.it);
- [Vercel](https://dynamik.vercel.app/) (Backup istance).

While the deployment of the second and third instances is controlled by CI/CD processes, for the first one, refer to [the guide on infrastructure automation](https://csunibo.github.io/wiki/infrastruttura/automazione/index.html).

----
## Useful Links

[📊Build Status](https://risorse.students.cs.unibo.it/build)
