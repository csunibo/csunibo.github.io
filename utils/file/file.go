package file

import (
	"errors"
	"io/ioutil"
	"os"
	"path"
	"time"
)

type Info interface {
	Name() string       // name of the file
	PathName() string   // path to the file relative to the repository root
	Mimo() string       // MIMO type of the file
	Size() int64        // length in bytes for regular files; system-dependent for others
	ModTime() time.Time // modification time
	IsDir() bool        // if the file is directory or not
}

// Separates files and directories and appends a base name
func unpackFiles(fileInfo []os.FileInfo, basename string) ([]string, []string) {
	var fileNames []string
	var dirNames []string
	for _, file := range fileInfo {
		if !file.IsDir() {
			fileNames = append(fileNames, path.Join(basename, file.Name()))
		} else {
			dirNames = append(dirNames, path.Join(basename, file.Name()))
		}
	}
	return fileNames, dirNames
}

func IsPathValid(path string) error {
	dir, err := os.Stat(path)
	if err != nil {
		return err
	}
	if !dir.IsDir() {
		return errors.New("the given path does not correspond to a directory")
	}
	return nil
}

// Ritorna l'array dei files (evitando le directories) presenti in una path
func GetDirFiles(path string, recursive bool) ([]string, error) {
	err := IsPathValid(path)
	if err != nil {
		return []string{}, err
	}

	filesInDir, err := ioutil.ReadDir(path)
	if err != nil {
		return []string{}, err
	}

	files, dirs := unpackFiles(filesInDir, path)
	if recursive {
		for _, dir := range dirs {
			newfiles, err := GetDirFiles(dir, true)
			if err != nil {
				return []string{}, err
			}
			files = append(files, newfiles...)
		}
	}
	return files, nil
}
