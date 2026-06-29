---
date: 2026-06-25 02:25
tags:
---

# Quickscan 

> Tool: [Rustscan](<../../../../../../02-Capture/Rustscan.md>)

```sh
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

### Set Ports Variable

```sh
PORTS=$(grep -E '^[0-9]+/tcp' recon/rustscan.txt | awk -F'/' '{print $1}' | paste -sd ',')
```

# Deep Scan 

> Tool: [Nmap](<../../../../../../02-Capture/Nmap.md>)

```sh
sudo nmap -vvv -sC -sV -p $PORTS $TARGET -Pn -oA recon/nmap
```

### Output 

```
Scanned at 2026-06-17 15:12:22 SAST for 122s

PORT      STATE SERVICE           REASON          VERSION
53/tcp    open  domain            syn-ack ttl 127 Simple DNS Plus
88/tcp    open  kerberos-sec      syn-ack ttl 127 Microsoft Windows Kerberos (server time: 2026-06-17 20:12:32Z)
135/tcp   open  msrpc             syn-ack ttl 127 Microsoft Windows RPC
139/tcp   open  netbios-ssn       syn-ack ttl 127 Microsoft Windows netbios-ssn
389/tcp   open  ldap              syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: checkpoint.htb0., Site: Default-First-Site-Name)
445/tcp   open  microsoft-ds?     syn-ack ttl 127
464/tcp   open  kpasswd5?         syn-ack ttl 127
593/tcp   open  ncacn_http        syn-ack ttl 127 Microsoft Windows RPC over HTTP 1.0
636/tcp   open  ldapssl?          syn-ack ttl 127
3269/tcp  open  globalcatLDAPssl? syn-ack ttl 127
5985/tcp  open  http              syn-ack ttl 127 Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-server-header: Microsoft-HTTPAPI/2.0
|_http-title: Not Found
9389/tcp  open  mc-nmf            syn-ack ttl 127 .NET Message Framing
49664/tcp open  msrpc             syn-ack ttl 127 Microsoft Windows RPC
49669/tcp open  msrpc             syn-ack ttl 127 Microsoft Windows RPC
49671/tcp open  msrpc             syn-ack ttl 127 Microsoft Windows RPC
49675/tcp open  msrpc             syn-ack ttl 127 Microsoft Windows RPC
49676/tcp open  ncacn_http        syn-ack ttl 127 Microsoft Windows RPC over HTTP 1.0
49686/tcp open  msrpc             syn-ack ttl 127 Microsoft Windows RPC
49706/tcp open  msrpc             syn-ack ttl 127 Microsoft Windows RPC
49715/tcp open  msrpc             syn-ack ttl 127 Microsoft Windows RPC
Service Info: Host: DC01; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-time:
|   date: 2026-06-17T20:13:34
|_  start_date: N/A
| smb2-security-mode:
|   3:1:1:
|_    Message signing enabled and required
|_clock-skew: 6h59m59s
| p2p-conficker:
|   Checking for Conficker.C or higher...
|   Check 1 (port 10839/tcp): CLEAN (Timeout)
|   Check 2 (port 37275/tcp): CLEAN (Timeout)
|   Check 3 (port 25280/udp): CLEAN (Timeout)
|   Check 4 (port 9717/udp): CLEAN (Timeout)
|_  0/4 checks are positive: Host is CLEAN or ports are blocked

NSE: Script Post-scanning.
NSE: Starting runlevel 1 (of 3) scan.
Initiating NSE at 15:14
Completed NSE at 15:14, 0.00s elapsed
NSE: Starting runlevel 2 (of 3) scan.
Initiating NSE at 15:14
Completed NSE at 15:14, 0.00s elapsed
NSE: Starting runlevel 3 (of 3) scan.
Initiating NSE at 15:14
Completed NSE at 15:14, 0.00s elapsed
Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 122.48 seconds
           Raw packets sent: 20 (880B) | Rcvd: 20 (880B)

```

## Interesting Ports 

|Service|Port(s)|Version / Info|Note|
|---|---|---|---|
|**DNS**|53/tcp|Simple DNS Plus|Check for zone transfers (`dig axfr`), SRV records, etc.|
|**Kerberos**|88/tcp|Microsoft Windows Kerberos (server time: 20:12:32Z)|AS-REP roasting (if pre‑auth disabled), Kerberoasting, user enum.|
|**SMB**|445/tcp (and 139)|microsoft-ds? (SMB)|Enumerate shares, check null sessions, SMB signing (enabled).|
|**LDAP**|389/tcp|Microsoft AD LDAP (Domain: checkpoint.htb)|Anonymous bind? Enumerate users/groups with `ldapsearch`.|
|**LDAPS / Global Catalog SSL**|636/tcp, 3269/tcp|ldapssl?, globalcatLDAPssl?|Secure LDAP – potentially valid certificates, less common attacks.|
|**WinRM (HTTP)**|5985/tcp|Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)|Remote PowerShell with valid creds (`evil-winrm`, `winrm`).|
|**AD WS (mc‑nmf)**|9389/tcp|.NET Message Framing|AD DS web services – useful for enumeration if authenticated.|
|**RPC (MSRPC)**|135/tcp, 49664, 49669, 49671, 49675, 49686, 49706, 49715|Microsoft Windows RPC|Enumerate users, groups, shares via `rpcclient` (null sessions?).|
|**RPC over HTTP**|593/tcp, 49676/tcp|Microsoft Windows RPC over HTTP 1.0|Alternative RPC channel; may be used for NTLM relay.|
|**NetBIOS**|139/tcp|Microsoft Windows netbios-ssn|Legacy SMB over NetBIOS – often unnecessary but check.|
|**kpasswd5**|464/tcp|kpasswd5?|Kerberos password change service – rare attack vector.|