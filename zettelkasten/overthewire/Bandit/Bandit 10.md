---
date: 13 Jul 2025 04:29
source_url: https://overthewire.org/wargames/bandit/bandit10.html
tags:
  - overthewire/bandit
---
# Objective
- The password is stored in the file **data.txt** in one of the few human-readable strings, preceded by several ‘=’ characters.
**Focus**: 
---
# Login
- username: `bandit9`
- password: `4CKMh1JI91bUIZZPXDqGanal4xvAg0JM`
```sh title:bandit9-sshpass
sshpass -p 4CKMh1JI91bUIZZPXDqGanal4xvAg0JM ssh bandit9@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
string data.txt | grep "=="
```
## Breakdown
Extract Human-Readable Strings: The `strings` command extracts sequences of printable characters (at least 4 by default) from data.txt, which may contain binary data. Pipe the output to grep to find lines with multiple = characters:

---
# Answer
- username: `bandit10`
- password: `FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey`

```sh title:bandit10-sshpass
sshpass -p FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey ssh bandit10@bandit.labs.overthewire.org -p 2220
```

---
# Next Level
- [Bandit 11](<./Bandit 11.md>)
---