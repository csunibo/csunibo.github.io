---
title: "Typst"
date: 2023-10-06:10:19+01:00
---

> "Quando la tipografia è curata, le parole diventano immagini."
> Shawn Lukas

## Introduzione

[Questo modello per tesi](https://github.com/csunibo/typst-thesis) fa uso di
[Typst](https://typst.app), un sistema tipografico alternativo e più moderno
rispetto a $\LaTeX$, ma al momento meno popolare. Anche Typst è pensato per
l'uso in ambito scientifico.

## Configurazione

Puoi usare questo progetto come modello per una nuova _repository_ sul tuo
profilo: basta cliccare su "Use this template" in alto a destra.

## Uso

La documentazione di Typst è disponibile [qui](https://typst.app/docs/).

## CI/CD

Cliccando su **Actions** in alto, potrai abilitare l'automatizzazione del
progetto:

- Per ogni **push** su una PR diretta verso `main`, verrà controllato
  che la tua tesi compili correttamente;
- Se avrai impostato **Github Actions** come
  `Settings` → `Pages` → `Build and depolyment` → `Source`, a ogni modifica su
  `main` la tua tesi verrà pubblicata su
  `https://<nome-utente>.github.io/<nome-repository>/tesi.pdf`.

Ricorda che se modifichi nome e percorso di `tesi.typ`, dovrai modificare le tue
**Actions** di conseguenza.
