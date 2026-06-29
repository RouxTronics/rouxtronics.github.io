---
title: Reconnaissance
date: 2026-06-24 23:06
---
## Rustscan 

```sh
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

![](<./attachments/01-Reconnaissance.png>)
## Nmap 

```sh
sudo nmap $TARGET -p 22,80 -sCV -oA recon/nmap_deep -vvv -Pn 
```

- Output 

```txt
PORT   STATE SERVICE REASON         VERSION

22/tcp open  ssh     syn-ack ttl 63 OpenSSH 9.6p1 Ubuntu 3ubuntu13.16 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   256 eb:ab:8f:be:99:02:0b:3e:c4:1c:83:b2:66:2f:17:13 (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBGsUbYkfB8pMEvFAGi5paPNGhksvnw0eRjwGZ4AlHmJIysuuzTNQaX/bcOE08prJ2+cOxCyMh5lG38v7rPC+Dag=
|   256 c1:69:ab:84:f3:88:8b:b3:8a:ae:e2:28:35:54:35:0b (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIByNLKDy0k2w61ihV1fOWk1bHErDkuYcwcYxN1vWpGrb

80/tcp open  http    syn-ack ttl 63 nginx 1.24.0 (Ubuntu)
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-title: Did not follow redirect to http://nimbus.htb/
|_http-server-header: nginx/1.24.0 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

```


## Intersting Ports 


| Service | Port | Software     | Note                          |
| ------- | ---- | ------------ | ----------------------------- |
| HTTP    | 80   | nginx/1.24.0 | redirect to http://nimbus.htb |
