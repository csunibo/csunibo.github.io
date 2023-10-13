---
title: "Informabot"
date: 2023-04-05T17:47:04+02:00
---

`Informabot` (ospitato [su GitHub](https://github.com/csunibo/informabot)) è il
bot Telegram che assiste gli studenti del DISI. Puoi scrivergli [da
qui](https://t.me/UniboInformabot).

## Dipendenze

È richiesto [Go](https://go.dev/) 1.18+.

## Compilazione

Per compilare il bot dalla cartella radice del progetto, usare:

```bash
go build
```

## Esecuzione

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
mandare la lista dei comandi del tuo bot. Puoi il risultato del comando
`/help` di Informabot te li fornisce tutti, ma bisogna rimuovere i `/`
prefissi prima di inoltrare a BotFather.

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
di descrizione, viene tralasciato.

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

#### `todayLectures`

Legge gli orari di oggi da `url`, usando `title` come intestazione. In caso di
fallimento `fallbackText` viene usato come risposta.

#### `tomorrowLectures`

Legge gli orari di domani oggi da `url`, usando `title` come intestazione. In
caso di fallimento `fallbackText` viene usato come risposta.
Scrapes tomorrow's timetable from `url`, using `title` as header. On faliure,
`fallbackText` is used as a reply.

#### `course`

Mette assieme una descrizione dell'insegnamento in questione, includendo diversi
attributi.

### Memi

I memi sono memorizzati in `json/memes.json`. Ogni chiave è il nome del comando
che innesca il meme, mentre ogni valore è il contenuto della risposta del bot
(un semplice messaggio statico).

## Ringraziamenti

Informabot nasce da un frammento JavaScript consegnato dalla coorte 2019/20 a
quella 2020/21. I ringraziamenti degli studenti vanno al nostro collega
[@Wifino](https://github.com/Wifino), che ha manutenuto ed espanso il progetto
originale per lungo tempo.
