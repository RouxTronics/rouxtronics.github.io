---
title: Orion
date: 2026-06-25 15:02
description:
platform: HTB
categories:
  - Machines
status:
  - Retired
os:
  - Linux
difficulty:
  - Easy
image: orion/attachments/Orion.png
tags:
  - CVE/2025-32432
  - CVE/2026-24061
  - privesc/telnet
finished: 2026-06-25
completed: true
---
# Synopsis

<img src="./attachments/Orion.png" width="100" height="100">

| Machine    | Orion                                             |
| ---------- | ------------------------------------------------- |
| OS         | Linux                                             |
| Difficulty | Easy                                              |
| Release    | 23 Jun, 2026                                      |
| Created by | [Pho3o](https://app.hackthebox.com/users/1829350) |


>[!summary]
>- Step 1
>- Step 2


`Orion` is a very easy Linux machine that features CSRF Validation Bypass and exploration of CraftCMS and Telnetd.

The foothold includes achieving remote code execution by exploiting CVE-2025-32432 in a vulnerable version of CraftCMS. 

Then the default Craft environment variable file exposes the credentials for its MySQL database, which contains a crackable password.

The password has been reused and leads to SSH access to the user on the machine. 

Finally, privilege escalation is achieved by finding and exploiting a vulnerable version of telnetd (CVE-2026-24061), allowing authentication bypass to root.

## Improved skills
## Used tools

---
# Commands & Payloads

## Reconnaissance

---
## Enumeration
---
## Exploitation
---
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

---
# Proof 

![](<./attachments/Orion-1.png>)

---
# Conclusion

---

# Table of Content 
