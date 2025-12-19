---
date: 13 Jul 2025 03:39
source_url: https://overthewire.org/wargames/bandit/bandit7.html
tags:
  - overthewire/bandit
---
# Objective
The password for the next level is stored **somewhere on the server** and has all of the following properties:

- owned by user bandit7
- owned by group bandit6
- 33 bytes in size
**Focus**: 
---
# Login
- username: `bandit6`
- password: `HWasnPhtq9AVKe0dmk45nxy20cvUa6EG`

```sh title:bandit6-sshpass
sshpass -p HWasnPhtq9AVKe0dmk45nxy20cvUa6EG ssh bandit6@bandit.labs.overthewire.org -p 2220
```
---
# Steps
 ```bash 
 cat $(find / -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null)
```
## Breakdown 
- **find /**: Searches the entire filesystem starting from the root directory (/).
- **-type f**: Limits the search to regular files (not directories or links).
- **-user bandit7**: Matches files owned by user bandit7.
- **-group bandit6**: Matches files owned by group bandit6.
- **-size 33c**: Matches files exactly 33 bytes in size (c specifies bytes).
- **2>/dev/null**: Suppresses permission-denied error messages, as bandit6 lacks access to many system directories (e.g., /root).
- **cat $(...)**: Reads and displays the contents of the file found by find, which is the password for Level 7 (e.g., morbNTDkSW6jIlIjJkmHy2GAVakz4sgy).
---
# Answer
- username: `bandit7`
- password: `morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj`
```sh title:bandit7-sshpass
sshpass -p morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj ssh bandit7@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
- [Bandit 8](<./Bandit 8.md>)
---
