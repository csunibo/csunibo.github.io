---
title: "Aggiungere un nuovo insegnamento"
date: 2023-06-06T00:49:44+02:00
---

Aggiungere un nuovo insegnamento è facile, se ti trovi già all'interno
dell'organizzazione [CSUnibo su GitHub](https//github.com/csunibo):

1. su [template-it](https://github.com/csunibo/template-it)/[template-en](https://github.com/csunibo/template-en),
   usa "Use this template"/"Create a new repository";
2. come nuovo nome, usa `la-convenzione-kebab-case`, `ing-` come eventuale
   prefisso per Ingegneria informatica, `isi-` come eventuale prefisso per
   Ingegneria e scienze informatiche (non servono prefissi per distinguere
   triennali da magistrali);
3. come descrizione, usa una frase simile a "Una raccolta di risorse per
   l'insegnamento di Linguaggi di programmazione (04138) del Corso di Laurea in
   Informatica";
4. vai su "Create repository from template";
5. abilita GitHub Pages da "Settings" / "Pages" impostando "Source" come
   "GitHub Actions";
6. nella pagina principale del nuovo insegnamento su GitHub, clicca
   sull'ingranaggio a fianco di "About";
7. come "Website", usa `https://risorse.students.cs.unibo.it/nome-repository`,
   e togli le spunte da "Releases" e "Packages", poi aggiungi "Topics" a piacere
   e clicca su "Save changes";
8. aggiorna il README riempiendo ogni segnaposto;
9. aggiungi eventuali estensioni che vuoi compaiano sul sito risultante
   modificando `.github/workflows/build-and-deploy.yml`;
10. concedi i diritti "Mantain" ai gruppi interessati. Per esempio, per un
    insegnamento di Ingegneria informatica del secondo anno, andrebbero aggiunti
    i gruppo di Ingegneria informatica del secondo e terzo anno;
11. aggiungi il nuovo insegnamento a
    [`teachings.json` della repository
    `config`](https://github.com/csunibo/config/blob/main/teachings.json)
    affinché sia riconosciuto da Dynamik;
12. apri una PR su [Dynamik](https://github.com/csunibo/dinamik) in cui
    aggiorni il sottomodulo git in `src/config`.
