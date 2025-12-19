---
date: 13 Jul 2025 04:41
tags:
  - overthewire/bandit
source_url: https://overthewire.org/wargames/bandit/bandit11.html
---
# Objective
- The password for the next level is stored in the file data.txt, which contains base64 encoded data
**Focus**: 

---
# Login
- username: `bandit10`
- password: `FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey`
```bash
sshpass -p FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey ssh bandit10@bandit.labs.overthewire.org -p 2220
```

---
# Steps
```bash
base64 -d data.txt
```
---
# Answer
- username: `bandit11`
- password: `dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr`

```sh title:bandit11-sshpass
sshpass -p dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr ssh bandit11@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
- [Bandit 12](<./Bandit 12.md>)
---
