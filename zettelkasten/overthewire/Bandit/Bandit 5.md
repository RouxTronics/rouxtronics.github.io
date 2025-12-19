---
date: 13 Jul 2025 02:40
source_url: https://overthewire.org/wargames/bandit/bandit5.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level is stored in the only human-readable file in the **inhere** directory. 
- Tip: if your terminal is messed up, try the “reset” command.
**Focus**: 
---
# Login
- username: `bandit4`
- password: `2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ`

```sh title:bandit4-sshpass
sshpass -p 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ ssh bandit4@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
ls -al
cd inhere
ls -al 
file ./-file*
cat ./-file07 #The ASCII file
```

OR
```bash
cat $(find ./inhere -type f -exec file {} \; | grep "ASCII text" | cut -d: -f1)
```

---
# Answer
- username: `bandit5`
- Password: `4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw`
```sh title:bandit5-sshpass
sshpass -p 4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw ssh bandit5@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
 - [Bandit 6](<./Bandit 6.md>)
---