---
date: 04 Aug 2025 20:58
source_url: https://overthewire.org/wargames/bandit/bandit14.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level is stored in **/etc/bandit_pass/bandit14 and can only be read by user bandit14**. 
- For this level, you don’t get the next password, but you get a private SSH key that can be used to log into the next level. 
- **Note:** **localhost** is a hostname that refers to the machine you are working on

---
# Login
- username: `bandit13`
- password: `FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn`
```sh title:bandit13-sshpass
sshpass -p FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn ssh bandit13@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
ls
ssh -i sshkey.private -p 2220 bandit14@localhost -y # yes for password 
```

```bash
cat /etc/bandit_pass/bandit14
```
---
# Answer
- username: `bandit14`
- password: `MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS`

```sh title:bandit14-sshpass
sshpass -p MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS ssh bandit14@bandit.labs.overthewire.org -p 2220
```
---
# Next Level
- [Bandit 15](<./Bandit 15.md>)
---
