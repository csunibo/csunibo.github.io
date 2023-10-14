---
title: "CSGITBOT"
date: 2023-06-02T12:15:00+02:00
draft: true
---

See [github repo](https://github.com/csunibo/csgitbot) for the code

A github bot used to manage workflows in csunibo

## How to run

1. Create a .env file in the project root, follow `.env.example` schema
2. Install poetry, a python package manager, similar to npm
3. Run `poetry install`
4. Set the `config.ini` owner to correct owner repo, e.g. `csunibo`, or a user, you should have write and PR access to this
5. Serve the application with `poetry run start`
6. The application should be able to accept requests now.

## Try it locally
1. Be sure to have github token for the bot, and have it in the .env.example.
2. Create a repository for the tests on github.
3. Run some scripts listed  in `src/test.py` with `poetry run python3 src/test.py [flags]` and you should see some logs on the server end.

# Features

## Automatic pull request

- You can specify a repo and a branch, and it automatically uploads a file and creates a PR on that repo!
- You can specify a commit author when creating a PR
- You can delete all the branches, except those defined in the config.
