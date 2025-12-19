---
title: Bandit 1
date: 13 Jul 2025 02:02
source_url: https://overthewire.org/wargames/bandit/bandit1.html
tags:
  - overthewire/bandit
layout: page
---
# Objective
- Password for the next level, stored in file called **readme** located in the home directory. 
- Use this password to log into bandit1 using SSH. 
- Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.
**Focus**: 
---
# Login
```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
# enter yes, password bandit0
```

> [!NOTE]- Quicker way way to use ssh is to install sshpass
> sshpass must be installed on your system for single command ssh access `sudo apt install sshpass` on Debian/Ubuntu

```sh title:bandit0-sshpass
sshpass -p bandit0 ssh bandit0@bandit.labs.overthewire.org -p 2220
```

---
# Steps
```sh
ssh bandit0@bandit.labs.overthewire.org -p 2220 # Enter yes, then enter bandit0
```
- Enter password in prompt `bandit0`
```sh
ls -al #list files in directory even hidden ones.
cat readme
```
- Ctrl + D to end ssh termminal.
## Bash Script
```sh title:bandit1-script
#!/bin/bash
sudo apt install sshpass
HOST="bandit.labs.overthewire.org"
PORT="2220"
USER="bandit0"
PASSWORD="bandit0"

echo "Connecting to $USER@$HOST..."
sshpass -p "$PASSWORD" ssh -p $PORT $USER@$HOST "find . -maxdepth 1 -name 'readme' -exec cat {} +"
```
---
# Answer
- username: `bandit1`
- password: `ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If
 `
```sh title:bandit1-sshpass
sshpass -p ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If ssh bandit1@bandit.labs.overthewire.org -p 2220
```
# Next Level: 
- [Bandit 2](</zettelkasten/overthewire/Bandit/Bandit 2.md>)
---
