---
title: "Configurazioni"
date: 2023-04-29T15:13:05+02:00
---

Talvolta, gli stessi valori di configurazione possono essere usati più volte in
progetti diversi di CSUnibo. Per esempio, le espressioni regolari che esprimono
le convenzioni di nomenclatura sono usate sia dai processi di CI/CD che
controllano esse siano rispettate sia da `csurename`, che rinomina le risorse
affinché esse passino in seguito questi controlli.

In un'ottica di riuso del codice, queste configurazioni sono centralizzate
su [csunibo/config](https://github.com/csunibo/config).

## CI/CD (`.github/workflows/`)

In `.github/workflows`, sono presenti le procedure di CI/CD riutilizzate da
ogni insegnamento.

## Nomenclatura (`*.synta`)

Le grammatiche che descrivono le regole di nomenclatura da adottare per i nomi
delle risorse sono memorizzate nei file `.synta`. Synta è un formato interno
ad-hoc. La correttezza di questi file è verificata automaticamente a ogni
modifica di `main`.

## Insegnamenti (`courses.json`)

In `courses.json` sono raccolti tutti gli insegnamenti (obbligatori e opzionali)
per cui CSUnibo offre strumenti. Sono organizzati per Corsi di Laurea e anni,
e includono il nome della _repository_ di riferimento e il collegamento al
gruppo Telegram.
