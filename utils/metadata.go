package main

import (
	"errors"
	"fmt"
	"log"
	"metadata/file"
	"os"
)

func main() {
	// NOTA: per ora è in grado di creare l'array di tutti i file presenti in una directory
	// oppure creare l'array di tutti i file in modo ricorsivo
	// TODO: migliore gestore per flag CLI (es. settare se usarlo ricorsivo o meno)
	// TODO: scrivere i metadata generati su file
	// TODO: scrivere un filtro per la funzione getDirFiles (non vogliamo le directory git e simili)
	if len(os.Args) != 2 {
		log.Fatal(errors.New("Invalid number of arguments, 1 needed [the valid path]"))
	}

	files, err := file.GetDirFiles(os.Args[1], true)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(files)
}
