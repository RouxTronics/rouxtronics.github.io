---
title: Reconnaissance
description: Passive and active information gathering about the target (OSINT, DNS, broad scans).
start: 
end: 
---

# Quick Scan

```bash
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

> Ports: `23`
# Deep Scan

```bash
sudo nmap -sCV $TARGET -vvv -p 23 -Pn -oA recon/nmap_deep
```

# Interesting Ports

| Service | Port | Version | Note | Next Step |
| ------- | ---- | ------- | ---- | --------- |
| telnet  | 23   |         |      |           |