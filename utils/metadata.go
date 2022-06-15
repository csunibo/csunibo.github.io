package main

import (
    "fmt"
    "io/ioutil"
    "log"
	"os"
	"errors"
)

// Separates files and directories and appends a base name
func unpackFiles(fileInfo []os.FileInfo, basename string) ([]string, []string) {
	var fileNames []string 
	var dirNames []string 
    for _, file := range fileInfo {
		if !file.IsDir() {
			fileNames = append(fileNames, basename + file.Name());
		} else {
			dirNames = append(dirNames, basename + file.Name());
		}
    }
	return fileNames, dirNames
}

// checks if path is valid, and beautifies it with the slash :D
func parsePath(path string) (string, error) {
	// TODO: make this windows compatible?
	if (path[len(path) - 1:] != "/") {
		path += "/"
	}

	dir, err := os.Stat(path)
	if err != nil {
		return "", err 
	}
	if !dir.IsDir() {
		return "", errors.New("The given path does not correspond to a directory")
	}
	return path, nil
}

// Ritorna l'array dei files (evitando le directories) presenti in una path
func getDirFiles(path string, recursive bool) ([]string, error) {
	path, err := parsePath(path) 
	if err != nil {
		return []string(), err 
	}

    filesInDir, err := ioutil.ReadDir(path)
    if err != nil {
		return []string(), err 
    }

	files, dirs := unpackFiles(filesInDir, path) 
	if recursive {
		for _, dir := range dirs {
			newfiles, err := getDirFiles(dir, true) 
			if err != nil {
				return []string(), err 
			}
			files = append(files, newfiles...)
		}
	}
	return files, nil
}

func main() {
	// NOTA: per ora è in grado di creare l'array di tutti i file presenti in una directory 
	// oppure creare l'array di tutti i file in modo ricorsivo 
	// TODO: migliore gestore per flag CLI (es. settare se usarlo ricorsivo o meno) 
	// TODO: scrivere i metadata generati su file
	if len(os.Args) != 2 {
		log.Fatal(errors.New("Invalid number of arguments, 1 needed [the valid path]"))
	}

	files, err := getDirFiles(os.Args[1], true)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(files)
}