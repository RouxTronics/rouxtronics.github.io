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
image: ./attachments/Orion.png
tags:
  - CVE/CVE-2025-32432
  - CVE/CVE-2026-24061
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

%% Begin Waypoint %%
- [00-Pre-Engagement](<./00-Pre-Engagement.md>)
- [01-Reconnaissance](<./01-Reconnaissance.md>)
- [02.1-Enumeration](<./02.1-Enumeration.md>)
- [02.2-Vulnerability-Analysis](<./02.2-Vulnerability-Analysis.md>)
- [03-Exploitation](<./03-Exploitation.md>)
- [04.1-Lateral-Movement](<./04.1-Lateral-Movement.md>)
- [04.2-Privilege-Escalation](<./04.2-Privilege-Escalation.md>)
- [05-Post-Exploitation](<./05-Post-Exploitation.md>)
- [06-Remediation](<./06-Remediation.md>)

%% End Waypoint %%

---
