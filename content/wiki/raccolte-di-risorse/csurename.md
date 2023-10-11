---
title: "csurename"
date: 2023-04-05T12:35:38+02:00
draft: true
---

`csurename` (ospitato [su GitHub](https://github.com/csunibo/csurename)) è un
piccolo strumento con
intrefaccia a linea di comando che rinomina tutti i file in una cartella
affinché aderiscano alla convenzione `kebab-case` delle risorse di CSUnibo per
gli insegnamenti.

![screenshot-of-csurename](https://user-images.githubusercontent.com/34945306/90803472-c85b3f00-e2e6-11ea-8552-9e14ac306522.png)

## Uso

### Specificare una cartella diversa da quella attuale

Puoi usare una cartella diversa da quella corrente passandola come primo
parametro:

```bash
csurename ~/Pictures
```

### Rinominare ricorsivamente tutti i file nelle sottocartelle discendenti

Per rinominare ricorsivamente, puoi usare `-r` o `--recursive`:

```bash
csurename -r ~/Pictures
```

### Rinominare anche le cartelle

Per agire anche sulle cartelle oltre che sui file, puoi usare `-D` o `--dir`:

```bash
csurename -D ~/Pictures
```
