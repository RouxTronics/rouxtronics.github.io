---
date: 13 Jul 2025 02:15
source_url: https://overthewire.org/wargames/bandit/bandit2.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level is stored in a file called `-` located in the home directory
**Focus**: 
---
#  Login
- username: `bandit1`
- password: `ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If`

```sh title:bandit1-sshpass
sshpass -p ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If ssh bandit1@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```sh
ls -al 
cat ./-
```
- Use `ls` you see file named `-`
- To read flag use `cat ./-`
---
# Answer
- usernamel: `bandit2`
- password: `263JGJPfgU6LtdEvgfWU1XP5yac29mFx`

```sh title:bandit2-sshpass
sshpass -p 263JGJPfgU6LtdEvgfWU1XP5yac29mFx ssh bandit2@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
-  [Bandit 3](<./Bandit 3.md>)
---
# Bash Script
```sh title:2bandit-pass
#!/bin/bash

HOST="bandit.labs.overthewire.org"
PORT="2220"
USER="bandit1"
PASSWORD="ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If"

echo "Connecting to $USER@$HOST..."
sshpass -p "$PASSWORD" ssh -p $PORT $USER@$HOST "find . -maxdepth 1 -name '-' -exec cat {} +"
```
---