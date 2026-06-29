---
title: 01-Reconnaissance
date: 2026-06-25 02:06
---
## Quick Scan  

> Tool: [Rustscan](<../../../../../../02-Capture/Rustscan.md>)

```sh
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

### Ports Variable

```sh
PORTS=$(grep -E '^[0-9]+/tcp' recon/rustscan.txt | awk -F'/' '{print $1}' | paste -sd ',')
```
## Deep Scan 

> Tool: [Nmap](<../../../../../../02-Capture/Nmap.md>) 

```sh 
sudo nmap -sCV $TARGET -vvv -p $PORTS -Pn -vvv
```

### Output 

```sh
53/tcp    open  domain        syn-ack ttl 127 Simple DNS Plus

80/tcp    open  http          syn-ack ttl 126 Microsoft IIS httpd 10.0
|_http-server-header: Microsoft-IIS/10.0
| http-methods:
|   Supported Methods: OPTIONS TRACE GET HEAD POST
|_  Potentially risky methods: TRACE
|_http-title: IIS Windows Server

88/tcp    open  kerberos-sec  syn-ack ttl 127 Microsoft Windows Kerberos (server time: 2026-06-25 07:33:51Z)
135/tcp   open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
139/tcp   open  netbios-ssn   syn-ack ttl 127 Microsoft Windows netbios-ssn

389/tcp   open  ldap          syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: pirate.htb0., Site: Default-First-Site-Name)
|_ssl-date: 2026-06-25T07:35:52+00:00; +7h05m14s from scanner time.
| ssl-cert: Subject: commonName=DC01.pirate.htb
| Subject Alternative Name: othername: 1.3.6.1.4.1.311.25.1:<unsupported>, DNS:DC01.pirate.htb
| Issuer: commonName=pirate-DC01-CA/domainComponent=pirate
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-06-25T07:00:19
| Not valid after:  2027-06-25T07:00:19
| MD5:   fcc0:6b41:9da8:7c05:126c:637a:b6ee:1936
| SHA-1: 6ac9:2dd0:74fd:4f1a:0f5a:9e1a:cecf:ae95:038b:ec9d
| -----BEGIN CERTIFICATE-----

445/tcp   open  microsoft-ds? syn-ack ttl 127
464/tcp   open  kpasswd5?     syn-ack ttl 127
593/tcp   open  ncacn_http    syn-ack ttl 127 Microsoft Windows RPC over HTTP 1.0
636/tcp   open  ssl/ldap      syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: pirate.htb0., Site: Default-First-Site-Name)
| ssl-cert: Subject: commonName=DC01.pirate.htb
| Subject Alternative Name: othername: 1.3.6.1.4.1.311.25.1:<unsupported>, DNS:DC01.pirate.htb
| Issuer: commonName=pirate-DC01-CA/domainComponent=pirate
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-06-25T07:00:19
| Not valid after:  2027-06-25T07:00:19
| MD5:   fcc0:6b41:9da8:7c05:126c:637a:b6ee:1936
| SHA-1: 6ac9:2dd0:74fd:4f1a:0f5a:9e1a:cecf:ae95:038b:ec9d
| -----BEGIN CERTIFICATE-----
|_ssl-date: 2026-06-25T07:35:49+00:00; +7h05m14s from scanner time.

2179/tcp  open  vmrdp?        syn-ack ttl 127
3268/tcp  open  ldap          syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: pirate.htb0., Site: Default-First-Site-Name)
|_ssl-date: 2026-06-25T07:35:52+00:00; +7h05m14s from scanner time.
| ssl-cert: Subject: commonName=DC01.pirate.htb
| Subject Alternative Name: othername: 1.3.6.1.4.1.311.25.1:<unsupported>, DNS:DC01.pirate.htb
| Issuer: commonName=pirate-DC01-CA/domainComponent=pirate
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-06-25T07:00:19
| Not valid after:  2027-06-25T07:00:19
| MD5:   fcc0:6b41:9da8:7c05:126c:637a:b6ee:1936
| SHA-1: 6ac9:2dd0:74fd:4f1a:0f5a:9e1a:cecf:ae95:038b:ec9d
| -----BEGIN CERTIFICATE-----
3269/tcp  open  ssl/ldap      syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: pirate.htb0., Site: Default-First-Site-Name)
|_ssl-date: 2026-06-25T07:35:49+00:00; +7h05m14s from scanner time.
| ssl-cert: Subject: commonName=DC01.pirate.htb
| Subject Alternative Name: othername: 1.3.6.1.4.1.311.25.1:<unsupported>, DNS:DC01.pirate.htb
| Issuer: commonName=pirate-DC01-CA/domainComponent=pirate
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-06-25T07:00:19
| Not valid after:  2027-06-25T07:00:19
| MD5:   fcc0:6b41:9da8:7c05:126c:637a:b6ee:1936
| SHA-1: 6ac9:2dd0:74fd:4f1a:0f5a:9e1a:cecf:ae95:038b:ec9d
| -----BEGIN CERTIFICATE-----
5985/tcp  open  http          syn-ack ttl 127 Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-server-header: Microsoft-HTTPAPI/2.0
|_http-title: Not Found
9389/tcp  open  mc-nmf        syn-ack ttl 127 .NET Message Framing
49667/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49691/tcp open  ncacn_http    syn-ack ttl 127 Microsoft Windows RPC over HTTP 1.0
49692/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49694/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49695/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49919/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49937/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49967/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
Service Info: Host: DC01; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode:
|   3:1:1:
|_    Message signing enabled and required
|_clock-skew: mean: 7h05m13s, deviation: 0s, median: 7h05m13s
| smb2-time:
|   date: 2026-06-25T07:35:09
|_  start_date: N/A
| p2p-conficker:
|   Checking for Conficker.C or higher...
|   Check 1 (port 65389/tcp): CLEAN (Timeout)
|   Check 2 (port 11614/tcp): CLEAN (Timeout)
|   Check 3 (port 53723/udp): CLEAN (Timeout)
|   Check 4 (port 44910/udp): CLEAN (Timeout)
|_  0/4 checks are positive: Host is CLEAN or ports are blocked
```

## Interesting Ports

| Service | Port | Version | Note                 |
| ------- | ---- | ------- | -------------------- |
| ldap    | 389  |         | DC:`DC01.pirate.htb` |

> clock-skew: 7h05m13s