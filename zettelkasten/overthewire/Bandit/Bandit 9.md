---
date: 13 Jul 2025 04:00
source_url: https://overthewire.org/wargames/bandit/bandit9.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level is stored in the file **data.txt** and is the only line of text that occurs only once
**Focus**: 
---
# Login
- username: `bandit8`
- password: `dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc`

```sh title:bandit8-sshpass
sshpass -p dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc ssh bandit8@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
sort data.txt | unqi -u
```
---
# Answer
- username: `bandit9`
- password: `4CKMh1JI91bUIZZPXDqGanal4xvAg0JM`

```sh title:bandit9-sshpass
sshpass -p 4CKMh1JI91bUIZZPXDqGanal4xvAg0JM ssh bandit9@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
- [Bandit 10](<./Bandit 10.md>)
---