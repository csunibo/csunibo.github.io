---
title: "Controlli automatici"
date: 2023-04-05T12:21:04+02:00
---

Quando ci sono nuove modifiche su una PR o sulla _branch_ `main`, vengono
eseguiti alcuni controlli automatici.

È bene che tutti i controlli passino prima che la PR venga accettata. Le
moderatrici e i moderatori ti aiuteranno lungo tutto il percorso.

## Nomenclatura

Per la maggior parte delle cartelle, è sufficiente usare il `kebab-case` (e
cioè lettere minuscole e trattini alti) sia per i nomi delle cartelle che
dei file: questo controllo è applicato ricorsivamente anche alle sottocartelle
e al loro contenuto, in modo da garantire uniformità per l'intera raccolta.

Fanno eccezione i casi che seguono. Essi prevedono controlli più stringenti ma,
se una sottocartella li passa, i contenuti a essa appartenenti non vengono
controllati (tale cartella non viene visitata ricorsivamente). Questo è utile
per le sottocartelle i cui elementi, per loro natura, devono preservare la
nomenclatura originale, come i progetti, o alcune raccolte di file fornite dal
corpo docente.

### `dispense/` e `lucidi/`

Le regole in
[enumerazione.synta](https://github.com/csunibo/config/blob/main/enumerazione.synta)
devono essere rispettate.

### `prove/`

Le regole in
[prove.synta](https://github.com/csunibo/config/blob/main/prove.synta)
devono essere rispettate.

## Compilazione

Eventuali file "sorgenti" `.tex`/`.md`/`.doc(x)`/`.odt(x)` e simili devono
compilare correttamente nei formati supportati da CSUnibo.
