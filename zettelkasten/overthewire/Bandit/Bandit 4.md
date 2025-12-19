---
date: 13 Jul 2025 02:36
source_url: https://overthewire.org/wargames/bandit/bandit4.html
tags:
  - overthewire/bandit
---
# Objective
 - The password for the next level is stored in a hidden file in the **inhere** directory.
**Focus**:
---
# Login
- username: `bandit3`
- password: `MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx`
```sh title:bandit3-sshpass
sshpass -p MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx ssh bandit3@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
ls -al 
cd inhere 
ls -al 
cat ...Hiding-From-You
```
---
# Answer
- username: `bandit4`
- password: `2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ`

```sh title:bandit4-sshpass
sshpass -p 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ ssh bandit4@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
- [Bandit 5](<./Bandit 5.md>)
---
# Bash Script
```bash

```
---