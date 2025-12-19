---
date: 06 Aug 2025 20:28
source_url: https://overthewire.org/wargames/bandit/bandit16.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level can be retrieved by submitting the password of the current level to **port 30001 on localhost** using SSL/TLS encryption.
- The simplest way to achieve this is using the `openssl` command along with `s_client` which allows to connect to services on our machine using SSL.
---
# Login
- username: `bandit15`
- password: `8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo`
```sh title:bandit15-sshpass
sshpass -p 8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo ssh bandit15@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
echo "8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo" | openssl s_client -connect localhost:30001 -ign_eof 
```
- The flag with be given
---
# Answer
- username: `bandit16`
- password: `kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx`

```sh title:bandit16-sshpass
sshpass -p kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx ssh bandit16@bandit.labs.overthewire.org -p 2220
```
---
# Next Level
- [Bandit 17](<./Bandit 17.md>)
---