---
title: Fawn
date: 2026-06-27 14:22
description:
platform: HTB
categories:
  - Machines
status:
  - Retired
os:
  - Linux
difficulty:
  - Very Easy
image: ./attachments/Fawn.png
tags:
finished: 2025-06-06
completed: false
---
# Synopsis

<img src="./attachments/Fawn.png" width="100" height="100">


| Machine    | [Fawn](https://app.hackthebox.com/machines/Fawn?sort_by=created_at&sort_type=desc) |
| ---------- | ---------------------------------------------------------------------------------- |
| OS         | Linux                                                                              |
| Difficulty | Easy                                                                               |
| Released   | 30th September, 2021                                                               |
| Created by | [HTB-Bot](https://app.hackthebox.com/users/16)                                     |
| CVE        |                                                                                    |


>[!summary]
>- Step 1
>- Step 2
## Improved skills
## Used tools

- rustscan / nmap 
- ftp

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

- [x] **root.txt**

| Task | Question                                                                                                                                                                                           | Answer                           |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 1    | What does the 3-letter acronym FTP stand for?                                                                                                                                                      | File Transfer Protocol           |
| 2    | Which port does the FTP service listen on usually?                                                                                                                                                 | 21                               |
| 3    | FTP sends data in the clear, without any encryption. What acronym is used for a later protocol designed to provide similar functionality to FTP but securely, as an extension of the SSH protocol? | SFTP                             |
| 4    | What is the command we can use to send an ICMP echo request to test our connection to the target?                                                                                                  | ping                             |
| 5    | From your scans, what version is FTP running on the target?                                                                                                                                        | vsftpd 3.0.3                     |
| 6    | From your scans, what OS type is running on the target?                                                                                                                                            | Unix                             |
| 7    | What is the command we need to run in order to display the 'ftp' client help menu?                                                                                                                 | ftp -?                           |
| 8    | What is username that is used over FTP when you want to log in without having an account?                                                                                                          | anonymous                        |
| 9    | What is the response code we get for the FTP message 'Login successful'?                                                                                                                           | 230                              |
| 10   | There are a couple of commands we can use to list the files and directories available on the FTP server. One is dir. What is the other that is a common way to list files on a Linux system.       | ls                               |
| 11   | What is the command used to download the file we found on the FTP server?                                                                                                                          | get                              |
| 12   | Submit the flag located on the FTP server.                                                                                                                                                         | 035db21c881520061c53e0536e44f815 |

---
# Proof 

![](<./attachments/Fawn-1.png>)

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
