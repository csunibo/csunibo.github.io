---
title: "Configurazioni"
date: 2023-04-29T15:13:05+02:00
---

Talvolta, gli stessi valori di configurazione possono essere usati più volte in
progetti diversi di CSUnibo. Per esempio, le informazioni sui corsi di laurea
e sugli insegnamenti sono usate sia da `csunibo/dynamik` (per la
visualizzazione delle risorse in rete) che da `csunibo/informabot`.

In un'ottica di riuso del codice, queste configurazioni sono centralizzate
su [csunibo/config](https://github.com/csunibo/config).

### Modifiche alla repository

Se avvengono delle modifiche nella repository puoi aprire una PR per aggiornare 
csunibo/config per i servizi che ti interessano urgentemente. Per tutti gli 
altri abbiamo configurato Dependabot in modo che apra una PR in automatico nel 
giro di ventiquattr'ore.

## CI/CD (`.github/workflows/`)

In `.github/workflows`, sono presenti le procedure di CI/CD riutilizzate da
ogni insegnamento.

## Nomenclatura (`*.synta`)

Le grammatiche che descrivono le regole di nomenclatura da adottare per i nomi
delle risorse sono memorizzate nei file `.synta`. Synta è un formato interno
ad-hoc. La correttezza di questi file è verificata automaticamente a ogni
modifica di `main`.

## Insegnamenti (`teachings.json`)

In `teachings.json` sono raccolti tutti gli insegnamenti (obbligatori e
opzionali) per cui CSUnibo offre strumenti.

## Corsi di laurea (`degrees.json`)

I vari corsi di laurea del DISI sono elencati e internamente suddivisi in anni.
Ciascuno contiene anche gli identificativi dei rispettivi insegnamenti in
`teachings.json`.

## Mantenitori (`maintainers.json`)

In `maintainers.json`, sono raccolti tutti i maintainers dei progetti la quale
presenza può essere utile.
