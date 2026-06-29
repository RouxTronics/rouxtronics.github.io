---
title: NanoCorp
date: 2026-06-23 01:46
description:
platform: HTB
categories:
  - Machines
status:
  - Retired
os:
  - Windows
difficulty:
  - Hard
image: ./attachments/NanoCorp.png
tags:
Wishlist:
  - In-Progress
finished: false
completed: false
---
# Synopsis

<img src="./attachments/NanoCorp.png" width="100" height="100">

| Machine    |              |
| ---------- | ------------ |
| OS         |              |
| Difficulty |              |
| Released   | 08 Nov, 2025 |
| Retired    | 20 Jun 2026  |
| Created by | EmSec        |
| CVE        |              |

>[!summary]
>- Step 1
>- Step 2

NanoCorp is a Windows Active Directory machine built around a careers portal that accepts uploaded application archives. I’ll craft a malicious archive that leaks a service account’s authentication to my host when an automated job extracts it, and crack the result to get a foothold. With BloodHound, I’ll map a permissions chain that lets me add my user to a support group and then reset a second service account’s password. That account sits in the Protected Users group, so I’ll authenticate over Kerberos to get a shell. From there, I’ll find the Checkmk monitoring agent installed and abuse CVE-2024-0670 to drop write-protected files into a temp directory that the agent runs as SYSTEM, taking full control of the host. In Beyond Root, I’ll dig into the scheduled automations that keep the box in its intended state.
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


- [Ippsec](https://www.youtube.com/watch?v=8CjoKTPjbbk&pp=ygUMbmFub2NvcnAgaHRi)
- [Oxdf](https://0xdf.gitlab.io/2026/06/20/htb-nanocorp.html)
---
# Trophies

- [ ] **user.txt**
- [ ] **root.txt**

---
# Proof 
<!-- HTB pwned-badge screenshot -->

---
# Conclusion

---

# Table of Content 

%% Begin Waypoint %%
- [00-Setup](<./00-Setup.md>)
- [01-Reconnaissance](<./01-Reconnaissance.md>)
- [02.1-Enumeration](<./02.1-Enumeration.md>)
- [02.2-Vulnerability Analysis](<./02.2-Vulnerability Analysis.md>)
- [03-Foothold](<./03-Foothold.md>)
- [04.1-Lateral Movement](<./04.1-Lateral Movement.md>)
- [04.2-Privilege Escalation](<./04.2-Privilege Escalation.md>)

%% End Waypoint %%

---
