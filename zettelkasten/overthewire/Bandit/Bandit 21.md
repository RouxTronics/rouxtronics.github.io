---
date: 13 Aug 2025 00:11
source_url: https://overthewire.org/wargames/bandit/bandit21.html
tags:
  - overthewire/bandit
---
# Objective
**There is a setuid binary in the homedirectory that does the following:** 
- it makes a connection to localhost on the port you specify as a commandline argument.
- It then reads a line of text from the connection and compares it to the password in the previous level (bandit20). 
- If the password is correct, it will transmit the password for the next level (bandit21).

**NOTE:** Try connecting to your own network daemon to see if it works as you think
- **Focus**: 
---
# Login
- username: `bandit20`
- Password: `0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO`

```sh title:bandit20-sshpass
sshpass -p 0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO ssh bandit20@bandit.labs.overthewire.org -p 2220
```
---
# Steps

---
# Answer
- username: `bandit21`
- password: ``
```sh title:bandit21-sshpass
sshpass -p passwd ssh banditLV@bandit.labs.overthewire.org -p 2220
```
---
# Next Level: 
- 
---
# Bash Script
```sh title:banditx-script
```
---
