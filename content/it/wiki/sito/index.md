---
title: 'Il nostro sito'
subtitle: 'Guida facile e veloce al sito di CSUnibo'
summary: 'Brevi informazioni per contribuire al sito di CSUnibo, come fare il deploy localmente e come aggiungere nuovi contenuti.'

# Date published
date: '2023-10-19T16:54:45+02:00'

# Date updated
lastmod: '2023-10-19T16:54:45+02:00'

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: false

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: ''
  focal_point: ''     # Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  placement: 2        # Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
  preview_only: false

authors:
  - csunibo

tags:
  - howto

categories:
  - contribuire
  - applicativi web
---
[CSUnibo](https://github.com/csunibo)'s static homepage.

## Come fare il deploy localmente?
```bash
hugo server
```

Se qualcosa non va esegui
```bash
hugo --gc --minify
```	
----
## Aggiungere nuovi progetti nella home
Per aggiungere nuovi progetti nella home, basta creare un nuovo file markdown nella cartella `content/it/projects/` con il comando qui sotto.
```bash
hugo new project/nome-del-progetto/index.md
```

{{% callout note %}}
Il nome che darete al progetto verrà usato automaticamente come link alla corrispondente repository GitHub.

Se non è corretto, potete modificarlo manualmente nel file markdown.
{{% /callout %}}

> **Ricorda** di assegnare i tag corretti tra quelli proposti

### Aggiungere immagine di copertina
È possibile inserire un'immagine di copertina per un contenuto, basta inserire un'immagine nella cartella del contenuto della wiki rinominata in `featured.png` o `featured.jpg`

----
## Aggiungere nuovi contenuti alla wiki
Per aggiungere nuovi contenuti alla wiki, basta creare un nuovo file markdown nella cartella `content/it/wiki/` con il comando qui sotto.
Questo ti genererà un file con un header già pronto per essere compilato.
```bash
hugo new wiki/nome-del-contenuto/index.md
```

Per aggiungere la versione inglese basta fare:
```bash	
hugo new ./content/en/wiki/nome-del-contenuto/index.md
```

> **Nota** ricordate di impostare bene le categorie, autori e tags per i nuovi contenuti, in modo da poterli trovare e classificare facilmente.

### Aggiungere immagine di copertina
È possibile inserire un'immagine di copertina per un contenuto, basta inserire un'immagine nella cartella del contenuto della wiki rinominata in `featured.png` o `featured.jpg`

Puoi configurare evenutali altre impostazioni di visualizzazione nell'header del file `index.md` alle righe 17-25.

### Ordinamento dei contenuti
Sono automaticamente ordinati per data di creazione, ad eccezione del contenuto _"Contribuire"_ che è sempre il primo.
Se vuoi dare un ordine diverso ai contenuti, puoi impostare il parametro `weight` nell'header del file `index.md` del contenuto.

### Associare un progetto ad un contenuto
Attraverso l'impostazione `projects: []` [riga 7], puoi associare un progetto della home al contenuto della wiki inserendo al posto delle parentesi il nome della cartella del progetto a cui ti vuoi riferire.
