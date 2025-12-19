---
date: 09 Aug 2025 16:31
source_url: https://overthewire.org/wargames/bandit/bandit19.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level is stored in a file **readme** in the homedirectory. Unfortunately, someone has modified **.bashrc** to log you out when you log in with SSH.
**Focus**: 
---
# Login
- username: `bandit18`
- password: `x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO`
```sh title:bandit18-sshpass
sshpass -p x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO ssh bandit18@bandit.labs.overthewire.org -p 2220 -t "/bin/sh"
```

---
# Steps
- access previous level bandit 17 and see want other shells it uses, because bash shell is being blocked for bandit18 
- `cat /etc/shells` see you can use `/bin/sh`
```sh
sshpass -p x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO ssh bandit18@bandit.labs.overthewire.org -p 2220 -t "/bin/sh"
```

```sh
ls -al
cat readme
```
---
# Answer
- username: `bandit19`
- password: `cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8`
```sh title:bandit19-sshpass
sshpass -p cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8 ssh bandit19@bandit.labs.overthewire.org -p 2220
```
# Next Level
- [Bandit 20](<./Bandit 20.md>)
---
# Bash Script
---