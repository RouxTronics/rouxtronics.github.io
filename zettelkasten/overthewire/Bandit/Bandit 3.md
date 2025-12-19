---
date: 13 Jul 2025 02:27
source_url: https://overthewire.org/wargames/bandit/bandit3.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level is stored in a file called `spaces in this filename` located in the home directory
**Focus**: 
---
# Login
- username: `bandit2`
- password: `263JGJPfgU6LtdEvgfWU1XP5yac29mFx`

```sh title:bandit2-sshpass
sshpass -p 263JGJPfgU6LtdEvgfWU1XP5yac29mFx ssh bandit2@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash 
ls -al 
cat './--spaces in this filename--'
```

---
# Answer
- username: `bandit3`
- password: `MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx`

```sh title:bandit3-sshpass
sshpass -p MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx ssh bandit3@bandit.labs.overthewire.org -p 2220`
```
---
# Next Level: 
- [Bandit 4](<./Bandit 4.md>)

---
# Bash Script
```sh title:bandit3-pass
#!/bin/bash

HOST="bandit.labs.overthewire.org"
PORT="2220"
USER="bandit2"
PASSWORD="263JGJPfgU6LtdEvgfWU1XP5yac29mFx"

echo "Connecting to $USER@$HOST..."
sshpass -p "$PASSWORD" ssh -p $PORT $USER@$HOST "cat './--spaces in this filename--'"
```