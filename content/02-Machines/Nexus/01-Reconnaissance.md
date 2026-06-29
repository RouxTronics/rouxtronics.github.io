---
title: Reconnaissance
description: Passive and active information gathering about the target (OSINT, DNS, broad scans).
start: 2026-06-25T22:08:00
end: 2026-06-25T22:13:00
---

# Quick Scan

```bash
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

- port: `22,80`
# Deep Scan

```bash
sudo nmap -sCV $TARGET -vvv -p 22,80 -Pn -vvv
```

## Output

```sh

PORT   STATE SERVICE REASON         VERSION
22/tcp open  ssh     syn-ack ttl 63 OpenSSH 9.6p1 Ubuntu 3ubuntu13.16 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   256 0c:4b:d2:76:ab:10:06:92:05:dc:f7:55:94:7f:18:df (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBN9Ju3bTZsFozwXY1B2KIlEY4BA+RcNM57w4C5EjOw1QegUUyCJoO4TVOKfzy/9kd3WrPEj/FYKT2agja9/PM44=
|   256 2d:6d:4a:4c:ee:2e:11:b6:c8:90:e6:83:e9:df:38:b0 (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIH9qI0OvMyp03dAGXR0UPdxw7hjSwMR773Yb9Sne+7vD

80/tcp open  http    syn-ack ttl 63 nginx 1.24.0 (Ubuntu)
|_http-title: Did not follow redirect to http://nexus.htb/
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: nginx/1.24.0 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```
# Interesting Ports

| Service | Port | Version       | Note                           | Next Step           |
| ------- | ---- | ------------- | ------------------------------ | ------------------- |
| SSH     | 22   | OpenSSH 9.6p1 |                                |                     |
| HTTP    | 80   | nginx 1.24.0  | redirect to `http://nexus.htb` | update `/etc/hosts` |
> Ubuntu

