---
title: "Decrizione unificata degli insegnamenti"
date: 2023-04-05T18:32:54+02:00
---

Un webscraper che, quotidianamente, raccoglie tutti i corsi con descrizione e link alla pagina relativa.
Il progetto è ospitato su [GitHub](https://github.com/csunibo/course-description-merged). 
Il documento autogenerato risultante è disponibile nei formati:

- [HTML](https://csunibo.github.io/course-description-merged/courses.html);
- [Asciidoc](https://csunibo.github.io/course-description-merged/courses.adoc);
- [PDF](https://csunibo.github.io/course-description-merged/courses.pdf).

## Eseguire in locale

Usare `cargo run` per avviare il programma.

Il file generato è un file AsciiDoc. 
E' necessario installare asciidoctor, oppure asciidoctor-pdf, per convertire il file rispettivamente in HTML o PDF.

## Riconoscimenti

Si ringrazia [Fabio Gaiba](https://github.com/faguccio) che, prima
dello svilupppo di questo progetto, ha reperito le varie descrizioni dei corsi
manualmente.
