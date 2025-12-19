---
date: 09 Aug 2025 17:21
source_url: https://overthewire.org/wargames/bandit/bandit20.html
tags:
  - overthewire/bandit
---
# Objective
- To gain access to the next level, you should use the [setuid](https://en.wikipedia.org/wiki/Setuid) binary in the homedirectory. Execute it without arguments to find out how to use it. 
- The password for this level can be found in the usual place (/etc/bandit_pass), after you have used the setuid binary.
**Focus**: 
---
# Login
- username: `bandit19`
- password: `cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8`
```sh
sshpass -p cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8 ssh bandit19@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```sh
./bandit20-do cat /etc/bandit_pass/bandit20
```
---
# Answer
- username: `bandit20`
- Password: `0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO`

```sh title:bandit20-sshpass
sshpass -p 0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO ssh bandit20@bandit.labs.overthewire.org -p 2220
```
---
# Next Level
- [Bandit 21](<./Bandit 21.md>)
---
# Bash Script
```sh title:bandit20-script
```
---