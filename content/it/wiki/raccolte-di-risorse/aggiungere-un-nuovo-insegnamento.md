---
title: "Aggiungere un nuovo insegnamento"
date: 2023-06-06T00:49:44+02:00
---

Aggiungere un nuovo insegnamento è facile, se ti trovi già all'interno
dell'organizzazione [CSUnibo su GitHub](https//github.com/csunibo):

1. su [template](https://github.com/csunibo/template), usa "Use this
   template"/"Create a new repository";
2. come nuovo nome, usa `la-convenzione-kebab-case`, `ing-` come eventuale
   prefisso per Ingegneria informatica, `isi-` come eventuale prefisso per
   Ingegneria e scienze informatiche (non servono prefissi per distinguere
   triennali da magistrali);
4. come descrizione, usa una frase simile a "Una raccolta di risorse per
   l'insegnamento di Linguaggi di programmazione (04138) del Corso di Laurea in
   Informatica";
5. vai su "Create repository from template";
6. abilita GitHub Pages da "Settings" / "Pages" impostando "Source" come
   "GitHub Actions";
7. nella pagina principale del nuovo insegnamento su GitHub, clicca
   sull'ingranaggio a fianco di "About";
8. spunta "Use your GitHub Pages website" e togli le spunte da "Releases" e
   "Packages", poi aggiungi "Topics" a piacere e clicca su "Save changes";
9. aggiorna il README riempiendo ogni segnaposto;
10. aggiungi eventuali estensioni che vuoi compaiano sul sito risultante
   modificando `.github/workflows/build-and-deploy.yml`;
13. concedi i diritti "Mantain" ai gruppi interessati. Per esempio, per un
    insegnamento di Ingegneria informatica del secondo anno, andrebbero aggiunti
    i gruppo di Ingegneria informatica del secondo e terzo anno;
14. aggiungi il nuovo insegnamento a
    [`courses.json` della repository
    `config`](https://github.com/csunibo/config/blob/main/courses.json)
    affinché sia riconosciuto da Dynamik;
16. apri una PR su [Dynamik](https://github.com/csunibo/dinamik) in cui
    aggiorni il sottomodulo git in `src/config`.
