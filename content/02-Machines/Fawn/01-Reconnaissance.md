---
title: Reconnaissance
description: Passive and active information gathering about the target (OSINT, DNS, broad scans).
start: 2026-06-27T14:20:00
end: 2026-06-27T14:31:00
---

# Quick Scan

```bash
 rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

- ports:`21`
# Deep Scan

```bash

nmap -p- -sU --top-ports 50 <target-ip>   # UDP, slower, run selectively
```

## Output
```txt
21/tcp open  ftp     syn-ack ttl 63 vsftpd 3.0.3
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_-rw-r--r--    1 0        0              32 Jun 04  2021 flag.txt
| ftp-syst:
|   STAT:
| FTP server status:
|      Connected to ::ffff:10.10.15.129
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 3
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
Service Info: OS: Unix


```
# Interesting Ports

| Service | Port | Version      | Note                        | Next Step           |
| ------- | ---- | ------------ | --------------------------- | ------------------- |
| FTP     | 21   | vsftpd 3.0.3 | Anonymous FTP login allowed | anonymous:anonymous |
