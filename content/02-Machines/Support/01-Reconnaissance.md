---
title: Reconnaissance
description: Passive and active information gathering about the target (OSINT, DNS, broad scans).
start: 2026-06-26T14:04:00
end:
---

# Quick Scan

```bash
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

## Extract open Ports 

```sh
PORTS=$(grep -E '^[0-9]+/tcp' recon/rustscan.txt | awk -F'/' '{print $1}' | paste -sd ',')
```

# Deep Scan

```bash
sudo nmap -sCV $TARGET -vvv -p  $PORTS -Pn -oA recon/nmap_deep
```

## Output

```sh

PORT      STATE SERVICE       REASON          VERSION
53/tcp    open  domain        syn-ack ttl 127 Simple DNS Plus
88/tcp    open  kerberos-sec  syn-ack ttl 127 Microsoft Windows Kerberos (server time: 2026-06-26 12:10:39Z)
135/tcp   open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
139/tcp   open  netbios-ssn   syn-ack ttl 127 Microsoft Windows netbios-ssn
389/tcp   open  ldap          syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: support.htb0., Site: Default-First-Site-Name)
445/tcp   open  microsoft-ds? syn-ack ttl 127
464/tcp   open  kpasswd5?     syn-ack ttl 127
593/tcp   open  ncacn_http    syn-ack ttl 127 Microsoft Windows RPC over HTTP 1.0
636/tcp   open  tcpwrapped    syn-ack ttl 127
3268/tcp  open  ldap          syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: support.htb0., Site: Default-First-Site-Name)
3269/tcp  open  tcpwrapped    syn-ack ttl 127
5985/tcp  open  http          syn-ack ttl 127 Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-title: Not Found
|_http-server-header: Microsoft-HTTPAPI/2.0
9389/tcp  open  mc-nmf        syn-ack ttl 127 .NET Message Framing
49664/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49669/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49680/tcp open  ncacn_http    syn-ack ttl 127 Microsoft Windows RPC over HTTP 1.0
49692/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49708/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
Service Info: Host: DC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-time:
|   date: 2026-06-26T12:11:57
|_  start_date: N/A
| p2p-conficker:
|   Checking for Conficker.C or higher...
|   Check 1 (port 22477/tcp): CLEAN (Timeout)
|   Check 2 (port 51404/tcp): CLEAN (Timeout)
|   Check 3 (port 48427/udp): CLEAN (Timeout)
|   Check 4 (port 32928/udp): CLEAN (Timeout)
|_  0/4 checks are positive: Host is CLEAN or ports are blocked
|_clock-skew: 5m11s
| smb2-security-mode:
|   3:1:1:
|_    Message signing enabled and required

NSE: Script Post-scanning.
NSE: Starting runlevel 1 (of 3) scan.
Initiating NSE at 14:07
Completed NSE at 14:07, 0.00s elapsed
NSE: Starting runlevel 2 (of 3) scan.
Initiating NSE at 14:07
Completed NSE at 14:07, 0.00s elapsed
NSE: Starting runlevel 3 (of 3) scan.
Initiating NSE at 14:07
Completed NSE at 14:07, 0.01s elapsed
Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 150.03 seconds
           Raw packets sent: 18 (792B) | Rcvd: 18 (792B)

```
# Interesting Findings 

> Domain:  support.htb

| Service | Port | Version | Note | Next Step |
| ------- | ---- | ------- | ---- | --------- |
|         |      |         |      |           |