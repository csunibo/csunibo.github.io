---
title: "Automation"
date: 2023-04-05T11:33:16+02:00
---

This [GitHub repository](https://github.com/csunibo/infrastructure) collects the _Ansible_ files used by [our system administrators](https://github.com/orgs/csunibo/teams/sistemisti) to maintain our services. The underlying infrastructure of the virtual machines on which these _Ansible_ files are executed, however, is [managed by the students of AdmStaff](https://students.cs.unibo.it/wiki/). The tasks are written to be used with _Ansible_ in playbook mode.

## Setup for all hosts

```bash
ansible-playbook install.yaml
```

## Setup for a single host

```bash
ansible-playbook install.yaml -l <hostname>

# Example for the host dynamik
ansible-playbook install.yaml -l dynamik
```

Hosts are defined in the `hosts` file.

## Exceptions

### `bot` (Informabot)

To execute the playbook on the `bot` host, it is necessary to insert the Telegram bot token in the `passwords/bot_token` file. After starting the bot as explained above, if new commands have been added, it is important to [configure it](../../bot/informabot#configuration).