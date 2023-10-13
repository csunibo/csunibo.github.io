---
title: "Dynamik"
date: 2023-10-06T10:58:08+02:00
---

## Introduzione

[Dynamik](https://github.com/csunibo/dynamik) è l'applicativo web che ti
permette di consultare le raccolte di risorse di CSUnibo.

## Sviluppo

Clona il progetto, installa le dipendenze e aggiorna i sottomuduli Git:

```bash
pnpm install
git submodule init
git submodule update
```

Crea un file `.env` con
```env
VITE_UPLD_URL="http://localhost"
```

Per avviare un'istanza di sviluppo:

```bash
pnpm dev
```

## Compilazione

Per compilare un'istanza di produzione:

```bash
pnpm build
```

Per vederne un'anteprima:

```bash
pnpm preview
```

## Istanze pubbliche

Esistono diverse istanze pubbliche di Dynamik:

- [principale](https://risorse.students.cs.unibo.it);
- [GitHub Pages](https://csunibo.github.io/dynamik) (più lenta, senza SSR);
- [Vercel](https://dynamik.vercel.app/) (non pubblicizzata).

Mentre la messa in produzione della seconda e della terza è controllata dai
processi di CI/CD, per la prima si veda [la guida relativa all'automazione
dell'infrastruttura](https://csunibo.github.io/wiki/infrastruttura/automazione/index.html).

----
## Link utili

[📊Build Status](https://risorse.students.cs.unibo.it/build)
