---
date: 13 Jul 2025 03:55
source_url: https://overthewire.org/wargames/bandit/bandit8.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level is stored in the file data.txt next to the word millionth
**Focus**: 
---
# Login
- username: `bandit7`
- password: `HWasnPhtq9AVKe0dmk45nxy20cvUa6EG`
```sh title:bandit7-sshpass
sshpass -p HWasnPhtq9AVKe0dmk45nxy20cvUa6EG ssh bandit7@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
less data.txt | grep millionth
```
---
# Answer
- username: `bandit8`
- password: `dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc`

```sh title:bandit8-sshpass
sshpass -p dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc ssh bandit8@bandit.labs.overthewire.org -p 2220
```
---
# Next Level
- [Bandit 9](<./Bandit 9.md>)
---
