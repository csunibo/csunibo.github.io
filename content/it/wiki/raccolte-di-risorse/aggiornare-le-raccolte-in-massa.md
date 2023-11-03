---
title: "Aggiornare le raccolte in massa"
date: 2023-10-06T10:39:00+02:00
---

## Introduzione

La _repository_ [csunibo/update](https://github.com/csunibo/update) contiene un
semplice script Bash per applicare le stessa _patch_ (in formato `.diff`) a
tutte le repository degli insegnamenti in un colpo solo.

## Prima di cominciare

Per ogni _repository_, le password di eventuali chiavi ssh e gpg vengono chieste
da git circa 4 volte. Per prevenire questo, si può ricorrere a una delle
seguenti due alternative:

- rimuovere tutte le password dalle proprie chiavi ssh e gpg;
- lanciare gli agenti ssh e gpg per aggiungerle alla _cache_.


## Uso

Entra in una repo in cui hai già effettuato le modifiche che ti interessano:

```bash
cd /la/mia/repository/
```

Crea la pezza `patch.diff` tramite:

```bash
git diff <last origin commit> > la/repository/di/update/patch.diff
```

Spostati in questa cartella:

```bash
cd /la/repository/di/update/
```

Applica la pezza con il messaggio di _commit_ che preferisci:

```bash
./update <messaggio di commit>
```
