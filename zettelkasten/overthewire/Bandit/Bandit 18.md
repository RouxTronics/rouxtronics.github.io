---
date: 09 Aug 2025 16:22
source_url: https://overthewire.org/wargames/bandit/bandit18.html
tags:
  - overthewire/bandit
---
# Objective
There are 2 files in the homedirectory: **passwords.old and passwords.new**. The password for the next level is in **passwords.new** and is the only line that has been changed between **passwords.old and passwords.new**

**NOTE: if you have solved this level and see ‘Byebye!’ when trying to log into bandit18, this is related to the next level, bandit19**

**Focus**: diff

---
# Login
- username: `bandit17`
- password: `EReVavePLFHtFlFsjn3hyzMlvSuSAcRD`

```sh title:bandit17-sshpass
sshpass -p EReVavePLFHtFlFsjn3hyzMlvSuSAcRD ssh bandit17@bandit.labs.overthewire.org -p 2220
```

---
# Steps
```bash
 diff -h passwords.old passwords.new
```
---
# Answer
- username: `bandit18`
- password: `x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO`

```sh title:bandit18-sshpass
sshpass -p x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO ssh bandit18@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
- [Bandit 19](<./Bandit 19.md>)
---
# Bash Script
---