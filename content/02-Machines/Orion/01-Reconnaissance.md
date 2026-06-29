---
title: Reconnaissance
description: Passive and active information gathering about the target (OSINT, DNS, broad scans).
start: 2026-06-25T15:07:00
end: 2026-06-25T15:18:00
---
# Quick Scan

```bash
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

- Ports: 22,80
# Deep Scan

```bash
sudo nmap -sCV $TARGET -vvv -p 22,80 -Pn -oA recon/nmap_deep
```

## Output 

```sh

PORT   STATE SERVICE REASON         VERSION
22/tcp open  ssh     syn-ack ttl 63 OpenSSH 8.9p1 Ubuntu 3ubuntu0.15 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   256 3e:ea:45:4b:c5:d1:6d:6f:e2:d4:d1:3b:0a:3d:a9:4f (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBJ+m7rYl1vRtnm789pH3IRhxI4CNCANVj+N5kovboNzcw9vHsBwvPX3KYA3cxGbKiA0VqbKRpOHnpsMuHEXEVJc=
|   256 64:cc:75:de:4a:e6:a5:b4:73:eb:3f:1b:cf:b4:e3:94 (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOtuEdoYxTohG80Bo6YCqSzUY9+qbnAFnhsk4yAZNqhM
80/tcp open  http    syn-ack ttl 63 nginx 1.18.0 (Ubuntu)
|_http-server-header: nginx/1.18.0 (Ubuntu)
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-title: Did not follow redirect to http://orion.htb/
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```


# Interesting Ports

| Service | Port | Version       | Note                            | Next Step           |
| ------- | ---- | ------------- | ------------------------------- | ------------------- |
| SSH     | 22   | OpenSSH 8.9p1 | Possiable Entry point           |                     |
| HTTP    | 80   | nginx/1.18.0  | redirect to `http://orion.htb/` | update `/etc/hosts` |