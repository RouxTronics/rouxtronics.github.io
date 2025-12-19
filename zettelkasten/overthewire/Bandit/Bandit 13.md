---
date: 13 Jul 2025 04:51
source_url: https://overthewire.org/wargames/bandit/bandit13.html
tags:
  - overthewire/bandit
---
# Objective
- **password stored in the file data.tx**t, which is a hexdump of a file that has been repeatedly compressed. 
> [!tip]-
> For this level it may be useful to create a directory under /tmp in which you can work.  use the command “mktemp -d”. copy the datafile using cp, and rename it using mv

Focus: 

---
# Login
- username: `bandit12`
- password: `7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4`

```sh title:bandit12-sshpass
sshpass -p 7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4 ssh bandit12@bandit.labs.overthewire.org -p 2220
```
---
# Steps
```sh
cd $(mktemp -d)
cp ~/data.txt .
mv data.txt data
xxd -r data > binary
file binary # type of data is stored, gzip was data2.bin
mv binary binary.gz
gzip -d binary.gz
file binary # compressed bzip2
mv binary binary.bz2
bzip2 -d binary.bz2
file binary # compressed gzip, data4.bin
mv binary binary.gz
gzip -d binary.gz
file binary # tar archive
tar -xf binary 
rm binary data 
ls
file data5.bin # tar arachive
tar -xf data5.bin && ls 
rm data5.bin 
file data6.bin
mv data6.bin data6.bz2 
bzip2 -d data6.bz2 && ls 
file data6 
tar -xf data6 && ls 
rm data6 && file data8.bin
mv data8.bin data8.gz
gzip -d data8.gz
file $(ls) && cat $(ls) # ASCII test is the flag
```

---
# Answer
- Next Level: `bandit13`
- Password: `FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn`

```sh title:bandit13-sshpass
sshpass -p FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn ssh bandit13@bandit.labs.overthewire.org -p 2220
```
---
# Next Level 
- [Bandit 14](<./Bandit 14.md>)
---

