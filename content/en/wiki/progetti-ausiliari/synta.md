---
title: "Synta"
date: 2023-10-06T12:00:05+02:00
---

## Introduction

Synta [^1] is a command-line tool for performing various operations on the regular definition format used internally at [CSUnibo](https://github.com/csunibo) to constrain file naming conventions. It is available at [csunibo/synta](https://github.com/csunibo/synta). With Synta, you can:

- validate a `.synta` file's correctness;
- convert a `.synta` file into a regular expression;
- convert a `.synta` file into a JSON file describing its contents.

## Language Definition

The Synta language is defined by the following BNF:

```bnf
<upperletter> ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" |
                  "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" |
                  "U" | "V" | "W" | "X" | "Y" | "Z"
<lowerletter> ::= "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" |
                  "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" |
                  "u" | "v" | "w" | "x" | "y" | "z"
<digit>       ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<alphanum>    ::= <lowerletter> | <upperletter> | <digit>
<char>        ::= <alphanum> | ":" | ";" | "," | "." | "-" | "_"
<word>        ::= <char> <word> | <char>
<text>        ::= <word> " " <text> | <word>

<comment>     ::= "; " <text> "\n" | ";" <text> "\n"
<id>          ::= <lowerletter> <id> | <lowerletter>
<def>         ::= <id> " = " <regexp> "\n"
<commdef>     ::= <comment> <commdef> | <comment> <def>
<commdefs>    ::= <commdef> <commdefs> | <commdef>

<segment>     ::= "-" <id> | <opt_segment>
<opt_segment> ::= "(-" <id> ")?" | "(-" <id> <opt_segment> ")?"
<join>        ::= <segment> <join> | <segment>
<main>        ::= "> " <id> <join> "." <id> "\n"

<language>    ::= <commdefs> <main>
```

where `<regexp>` is a valid syntax expressing a regular expression. The regexp syntax used is that of Go, but for our purposes, it should also be compatible with that of JavaScript and Rust.

### Examples

```
; Test type
type = written|oral
; A date in the format yyyy-mm-dd
date = \d{4}-\d{2}-\d{2}
; The row is a number
row = \d
; Any alphanumeric word
extra = (\w|\d)+
; File extension. Possible values:
; - txt, tex, md, pdf, doc, docx
ext = txt|tex|md|pdf|doc|docx

> type-date(-row)?-extra.ext
```

## Parser Implementation

For parsing the entire file, we use a simplistic parser by manipulating the string, as parsing definitions and comments is rather straightforward. For parsing the final line, which contains the concatenation of all rules, we use a small FSA with side effects as follows:

``` mermaid
graph TD
0 -- "[a-z]         , concat"                   --> 1
0 -- "(     , L+1   , generateOptional"         --> 2
1 -- "-             , push"                     --> 0
1 -- "[a-z]         , concat"                   --> 1
1 -- "(     , L+1   , push; generateOptional"   --> 2
1 -- ".             , L!=0 ? ERR : push"        --> 7
2 -- "-               "                         --> 3
3 -- "[a-z]         , concat"                   --> 4
4 -- "(     , L+1   , push; generateOptional"   --> 2
4 -- "[a-z]         , concat"                   --> 4
4 -- ")     , L-1   , push"                     --> 5
5 -- "?"                                        --> 6
6 -- "-               "                         --> 0
6 -- "(     , L+1   , generateOptional "        --> 2
6 -- ")     , L-1     "                         --> 5
6 -- ".             , L!=0 ? ERR : "            --> 7
7 -- "[a-z]         , concat"                   --> 8
8 -- "[a-z]         , concat"                   --> 8
```

The side effects are:
- `L`: variable to manage the depth level
- `concat`: appends the read symbol to `id`
- `push`: depending on the depth level, adds to the structure the `id` read so far
- `generateOptional`: creates the structure to add optional blocks later through push

### Development

Here is a list of files in the repository and their purpose:

```
├── data.go        # Data structures for the parser
├── parser.go      # Parsing logic and FSA
├── parser_test.go # Unit tests for the parser
```

[^1]: **Origin of the name**: it is one of the top-10 names suggested by chat GPT. We used the prompt: "suggest me a short name for a tiny parser command line utility. the name must not be made up of two or more words"