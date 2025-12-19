---
date: 06 Aug 2025 19:57
source_url: https://overthewire.org/wargames/bandit/bandit15.html
tags:
  - overthewire/bandit
---
# Objective
The password for the next level can be retrieved by submitting the password of the current level to **port 30000 on localhost**.
- **Focus**:
---
#  Login
- username: `bandit14`
- password: `MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS`

```sh title:bandit14-sshpass
sshpass -p MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS ssh bandit14@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
cat /etc/bandit_pass/bandit14 | nc localhost 30000
```


---
# Answer
- username: `bandit15`
- password: `8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo`

```sh title:bandit15-sshpass
sshpass -p 8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo ssh bandit15@bandit.labs.overthewire.org -p 2220
```
---
# Next Level
- [Bandit 16](<./Bandit 16.md>)
---