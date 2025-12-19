---
date: 13 Jul 2025 04:45
source_url: https://overthewire.org/wargames/bandit/bandit12.html
tags:
  - overthewire/bandit
---
# Objective
- The password for the next level is stored in the file **data.txt**, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions
**Focus**: 
---
# Login
- username: `bandit11`
- password: `dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr`
```sh title:bandit11-sshpass
sshpass -p dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr ssh bandit11@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
tr 'A-Za-z' 'N-ZA-Mn-za-m' < data.txt
```
---
# Answer
- username: `bandit12`
- password: `7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4`

```bash
sshpass -p 7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4 ssh bandit12@bandit.labs.overthewire.org -p 2220
```
---
# Next Level
- [Bandit 13](<./Bandit 13.md>)
---
