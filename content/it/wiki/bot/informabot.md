---
title: "Informabot"
date: 2023-04-05T17:47:04+02:00
---

`Informabot` (ospitato [su GitHub](https://github.com/csunibo/informabot)) è il
bot Telegram che assiste gli studenti del DISI. Puoi scrivergli [da qui](https://t.me/UniboInformabot).

## Dipendenze

È richiesto [Go](https://go.dev/) 1.21+.

Per la formattazione del codice JSON è richiesto
[Prettier](https://prettier.io/) `@latest`.

## Compilazione

Per compilare il bot dalla cartella radice del progetto, usare:

```bash
go build
```

## Esecuzione

In vista della prima esecuzione, bisogna popolare il sottomodulo che incorpora
[`csunibo/config`](../infrastruttura/configurazioni/):

```bash
git submodule update --init --recursive
```

Per lanciare il bot dalla cartella radice del progetto, usare:

```bash
TOKEN=123:A4b5C6 go run .
```

usando il codice di autorizzazione ricevuto da
[BotFather](https://core.telegram.org/bots#6-botfather) anziché
`123:A4b5C6`.

## Configurazione

Quando configuri il bot con
[BotFather](https://core.telegram.org/bots#6-botfather), ti sarà chiesto di
mandare la lista dei comandi del tuo bot. Puoi incollare il risultato del
comando `/help_botfather` di Informabot (a differenza di `/help`, questo comando
non fa uso di `/` nel risultato).

## Aggiungere nuovi comandi

### Azioni

Le azioni sono salvate in `json/actions.json`. Ogni chiave è il nome comando
del comando che innesca l'azione, mentre ogni valore è un oggetto descritto da
diversi attributi:

- `type` specifica la logica del comando. I tipi disponibili sono descritti
  sotto;
- `data` offre dati aggiuntivi, tutti dipendenti dal tipo di azione. Tutti gli
  attributi descritti sotto sono da intendersi come appartenenti a questo campo;
- `description` (opzionale) riassume l'obiettivo dell'azione.

#### `message`

Il bot risponde con un messaggio statico, specificato dall'attributo `text`.

#### `list`

Il bot risponde con una lista automaticamente generata, preceduta da `header`.
Ogni elemento della lista è generato sostituendo i segnaposto di `template`
con gli elementi di un diverso vettore dall'attributo matrice `items`.

#### `help`

Il bot risponde elencando ogni coppia comando-descrizione. Se un comando è privo
di descrizione, viene tralasciato. L'attributo `slashes` specifica se i
prefissi `/` per i comandi dovrebbero essere usati (come di consueto) o
tralasciati (come richiesto da BotFather).

#### `luck`

Mette alla prova la tua fortuna.

#### `alias`

Questi comandi sono sinonimi di altri. L'attributo `command` specifica a quale
comando questo alias si riferisca. Si faccia attenzione ai cicli di alias, che
causano _stack overflow_ dovuti a ricorsione infinita.

#### `lookingFor`

Il bot aggiunge l'utente alla lista di persone in cerca di compagne e compagni
di gruppo in questa _chat_, e risponde con la lista aggiornata. `singularText`,
`pluralText` e `chatError` sono usati come messaggi personalizzati per
comunicare con l'utente.

#### `notLookingFor`

Il bot rimuove l'utente dalla lista di persone in cerca di compagne e compagni
di gruppo in questa _chat_. `chatError` e `nonFoundError` sono usati per
comunicare con l'utente.

#### `yearly`

Proprio come un alias che ha `abc` come valore dell'attributo `command` lancia
l'azione `abc`, così un'azione di tipo `yearly` che ha `abc` come valore del suo
attributo `command` potrebbe eseguire `abc1`, `abc2` o `abc3` a seconda della
_chat_ in cui è invocato. Il bot ispeziona il titolo della chat, e tenta di
intuire l'anno di corso appropriato. Se il bot non riesce a indovinare alcun
anno di corso, il valore dell'attributo `noyear` è usato come risposta
predefinita.

#### `buttonsLecture`

Crea un percorso a step di selezione per le lezioni dei corsi di laurea 
(triennali e magistrali) descritti in `csunibo/config/timetables.json`.
Per prima cosa richiede la selezione del CdL e dell'anno, infine la selezione
di un giorno a partire da quello odierno fino ai 6 giorni successivi.
Gli step funzionano grazie alle 
[callback](https://core.telegram.org/bots/api#callbackquery).
Usa come intestazione del messaggio il titolo descritto in `title`.
In caso di fallimento `fallbackText` viene usato come risposta.

#### `issue`

Il bot risponde taggando i `mantainer` di Informabot che sono presenti nel gruppo.
In caso non ci sia alcun mantainer all'interno del gruppo consiglia di portare 
all'attenzione dei `mantainer` nel gruppo `csunibo` il problema riscontrato.

### Insegnamenti e corsi di laurea

Insegnamenti e corsi di laurea sono prelevati dal sottomodulo `csunibo/config`
collocato in `json/condig/`.

### Memi

I memi sono memorizzati in `json/memes.json`. Ogni chiave è il nome del comando
che innesca il meme, mentre ogni valore è il contenuto della risposta del bot
(un semplice messaggio statico).

## Prima di contribuire

Dopo aver applicato le proprie modifiche, lanciare dalla cartella radice del
progetto:

```bash
go test -v ./...           # esegue i test
go fmt ./...               # formatta il codice Go
prettier --write **/*.json # formatta i file JSON
```

Questo assicura che i controlli automatici passino una volta aperta la PR.

## Ringraziamenti

Informabot nasce da un frammento JavaScript consegnato dalla coorte 2019/20 a
quella 2020/21. I ringraziamenti degli studenti vanno al nostro collega
[@Wifino](https://github.com/Wifino), che ha manutenuto ed espanso il progetto
originale per lungo tempo.
