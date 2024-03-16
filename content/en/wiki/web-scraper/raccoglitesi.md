---
title: "Raccoglitesi"
date: 2023-03-18T13:13:34+01:00
---

> "To forget how to dig the earth and to tend the soil is to forget ourselves."
> Mahatma Gandhi

## Introduction

Raccoglitesi is a command-line utility for Unibo students: it finds all the bachelor's and master's theses offered by a certain department. Raccoglitesi updates automatically and daily.

The project is hosted on [GitHub](https://github.com/csunibo/raccoglitesi). The most recent version of the generated list is always available [here in PDF](https://csunibo.github.io/raccoglitesi/disi.pdf) or [here as a web page](https://csunibo.github.io/raccoglitesi/disi).

## How it Works

Raccoglitesi is a web scraper written in golang, based on the [project](https://github.com/giammirove/raccoglitesi_unibo) of the same name by [@giammirove](https://github.com/giammirove).
It finds information on certain pages of the website, such as:

- `https://www.unibo.it/it/ateneo/sedi-e-strutture/dipartimenti`, to discover the departments present;
- `https://{{dip}}.unibo.it/it/dipartimento/persone/docenti-e-ricercatori` to find the names of people in the department;
- `https://www.unibo.it/sitoweb/gianluigi.zavattaro/didattica?tab=tesi` to find the theses listed on the site.

It is worth noting that all this information could change over time (such as the URLs of resources, HTML tags through which the desired information is found). It is therefore important to continue monitoring whether the script still works. For this reason, the program is run every day at midnight.

## Analyzed Departments
- [DISI: Department of Computer Science and Engineering](https://csunibo.github.io/raccoglitesi/disi)
- [DEI: Department of Electrical, Electronic, and Information Engineering "Guglielmo Marconi"](https://csunibo.github.io/raccoglitesi/dei)