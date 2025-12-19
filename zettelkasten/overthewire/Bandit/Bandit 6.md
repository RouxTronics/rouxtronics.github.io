---
date: 13 Jul 2025 03:03
source_url: https://overthewire.org/wargames/bandit/bandit6.html
tags:
  - overthewire/bandit
---
# Objective
The password for the next level is stored in a file somewhere under the inhere directory and has all of the following properties:
- human-readable
- 1033 bytes in size
- not executable
**Focus**: 
---
# Login
- username: `bandit5`
- password: `4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw`
```sh title:bandit5-sshpass
sshpass -p 4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw ssh bandit5@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```bash
cat $(find ./inhere -type f -size 1033c ! -executable -exec file {} \; | grep "ASCII text" | cut -d: -f1)
```
## Break down
- **find ./inhere**: Searches in the ./inhere directory and its subdirectories.
- **-type f**: Limits the search to regular files (not directories).
- **-size 1033c**: Matches files exactly 1033 bytes in size (c specifies bytes).
- **! -executable**: Excludes files with executable permissions.
- **-exec file {} \;**: Runs the file command on each matching file to determine its type.
- **| grep "ASCII text"**: Filters for files identified as ASCII text (human-readable).
- **| cut -d: -f1**: Extracts the filename (e.g., ./inhere/maybehere07/-file1) from the file output (e.g., ./inhere/maybehere07/-file1: ASCII text).
- **cat $(...)**: Reads and displays the contents of the matched file, which is the password for Level 6 (e.g., HWasnPhtq9AVKe0dmk45nxy20cvUa6EG).

---
# Answer
- username: `bandit6`
- password: `HWasnPhtq9AVKe0dmk45nxy20cvUa6EG`
```sh title:bandit6-sshpass
sshpass -p HWasnPhtq9AVKe0dmk45nxy20cvUa6EG ssh bandit6@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
- [Bandit 7](<./Bandit 7.md>)
