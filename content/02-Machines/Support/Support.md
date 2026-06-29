---
title: Support - HTB Machine [Windows, Easy]
date: 2026-06-26 20:51
description:
platform: HTB
categories:
  - Machines
status:
  - Retired
os:
  - Windows
difficulty:
  - Easy
image: ./attachments/Support.png
tags:
finished: false
completed: false
---
# Synopsis

<img src="./attachments/Support.png" width="100" height="100">

| Machine    | [Support](https://app.hackthebox.com/machines/Support?sort_by=created_at&sort_type=desc) |
| ---------- | ---------------------------------------------------------------------------------------- |
| OS         | Windows                                                                                  |
| Difficulty | Easy                                                                                     |
| Released   | 30th July, 2022                                                                          |
| Created by | [0xdf](https://app.hackthebox.com/users/4935)                                            |


 Support is an Easy difficulty Windows machine that features an SMB share that allows anonymous authentication. 
- After connecting to the share, an executable file is discovered that is used to query the machine&amp;amp;amp;#039;s LDAP server for available users. 
- Through reverse engineering, network analysis or emulation, the password that the binary uses to bind the LDAP server is identified and can be used to make further LDAP queries. 
- A user called `support` is identified in the users list, and the `info` field is found to contain his password, thus allowing for a WinRM connection to the machine.
- Once on the machine, domain information can be gathered through `SharpHound`, and `BloodHound` reveals that the `Shared Support Accounts` group that the `support` user is a member of, has `GenericAll` privileges on the Domain Controller.
- A Resource Based Constrained Delegation attack is performed, and a shell as `NT Authority\System` is received.

>[!summary]
>- Step 1
>- Step 2

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

| Nr. | Task                                                                                                               | Answer        |
| --- | ------------------------------------------------------------------------------------------------------------------ | ------------- |
| 1   | How many shares is Support showing on SMB?                                                                         | 6             |
| 2   | Which share is not a default share for a Windows domain controller?                                                | support-tools |
| 3   | Almost all of the files in this share are publicly available tools, but one is not. What is the name of that file? |               |

---
# Proof 
<!-- HTB pwned-badge screenshot -->

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

