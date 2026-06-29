---
title: Reconnaissance
description: Passive and active information gathering about the target (OSINT, DNS, broad scans).
start: 
end: 
---

# Quick Scan

```bash
nmap -F <target-ip>
nmap --top-ports 100 -sV <target-ip>
```

# Deep Scan

```bash
nmap -p- -sC -sV -oN deep-scan.txt <target-ip>
nmap -p- -sU --top-ports 50 <target-ip>   # UDP, slower, run selectively
```

# Interesting Ports

| Service | Port | Version | Note | Next Step |
| ------- | ---- | ------- | ---- | --------- |
|         |      |         |      |           |