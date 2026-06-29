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

## Open Ports Extract 


```sh
PORTS=$(grep -E '^[0-9]+/tcp' recon/rustscan.txt | awk -F'/' '{print $1}' | paste -sd ',')
```

# Deep Scan

```bash
nmap -p- -sC -sV -oN deep-scan.txt <target-ip>
nmap -p- -sU --top-ports 50 <target-ip>   # UDP, slower, run selectively
sudo nmap -sCV -Pn -vvv -p $PORTS -oN  recon/deep_scan $TARGET
```

## Output 

```sh

PORT      STATE SERVICE  REASON         VERSION
22/tcp    open  ssh      syn-ack ttl 63 OpenSSH 9.6p1 Ubuntu 3ubuntu13.16 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   256 0c:4b:d2:76:ab:10:06:92:05:dc:f7:55:94:7f:18:df (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBN9Ju3bTZsFozwXY1B2KIlEY4BA+RcNM57w4C5EjOw1QegUUyCJoO4TVOKfzy/9kd3WrPEj/FYKT2agja9/PM44=
|   256 2d:6d:4a:4c:ee:2e:11:b6:c8:90:e6:83:e9:df:38:b0 (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIH9qI0OvMyp03dAGXR0UPdxw7hjSwMR773Yb9Sne+7vD
80/tcp    open  http     syn-ack ttl 63 nginx 1.24.0 (Ubuntu)
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-title: Did not follow redirect to http://enigma.htb/
|_http-server-header: nginx/1.24.0 (Ubuntu)
110/tcp   open  pop3     syn-ack ttl 63 Dovecot pop3d
|_ssl-date: TLS randomness does not represent time
|_pop3-capabilities: SASL RESP-CODES CAPA AUTH-RESP-CODE STLS TOP PIPELINING UIDL
| ssl-cert: Subject: commonName=enigma
| Subject Alternative Name: DNS:enigma
| Issuer: commonName=enigma
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-02-18T20:33:33
| Not valid after:  2036-02-16T20:33:33
| MD5:   8361:ca20:2e4e:dff6:6e90:1445:7458:9fc3
| SHA-1: 9f91:b6ed:85b4:517c:0421:c62e:167d:5631:daa6:5a40

111/tcp   open  rpcbind  syn-ack ttl 63 2-4 (RPC #100000)
| rpcinfo:
|   program version    port/proto  service
|   100000  2,3,4        111/tcp   rpcbind
|   100000  2,3,4        111/udp   rpcbind
|   100000  3,4          111/tcp6  rpcbind
|   100000  3,4          111/udp6  rpcbind
|   100003  3,4         2049/tcp   nfs
|   100003  3,4         2049/tcp6  nfs
|   100005  1,2,3      43383/tcp6  mountd
|   100005  1,2,3      45001/tcp   mountd
|   100005  1,2,3      50811/udp   mountd
|   100005  1,2,3      55935/udp6  mountd
|   100021  1,3,4      34429/udp   nlockmgr
|   100021  1,3,4      41287/tcp6  nlockmgr
|   100021  1,3,4      45471/tcp   nlockmgr
|   100021  1,3,4      48972/udp6  nlockmgr
|   100024  1          39157/udp   status
|   100024  1          42701/tcp6  status
|   100024  1          44213/udp6  status
|   100024  1          59899/tcp   status
|   100227  3           2049/tcp   nfs_acl
|_  100227  3           2049/tcp6  nfs_acl
143/tcp   open  imap     syn-ack ttl 63 Dovecot imapd (Ubuntu)
|_ssl-date: TLS randomness does not represent time
| ssl-cert: Subject: commonName=enigma
| Subject Alternative Name: DNS:enigma
| Issuer: commonName=enigma
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-02-18T20:33:33
| Not valid after:  2036-02-16T20:33:33
| MD5:   8361:ca20:2e4e:dff6:6e90:1445:7458:9fc3
| SHA-1: 9f91:b6ed:85b4:517c:0421:c62e:167d:5631:daa6:5a40

|_imap-capabilities: more IDLE ENABLE IMAP4rev1 LITERAL+ capabilities OK Pre-login listed SASL-IR post-login ID LOGINDISABLEDA0001 have LOGIN-REFERRALS STARTTLS
993/tcp   open  ssl/imap syn-ack ttl 63 Dovecot imapd (Ubuntu)
|_ssl-date: TLS randomness does not represent time
| ssl-cert: Subject: commonName=enigma
| Subject Alternative Name: DNS:enigma
| Issuer: commonName=enigma
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-02-18T20:33:33
| Not valid after:  2036-02-16T20:33:33
| MD5:   8361:ca20:2e4e:dff6:6e90:1445:7458:9fc3
| SHA-1: 9f91:b6ed:85b4:517c:0421:c62e:167d:5631:daa6:5a40

|_imap-capabilities: more ENABLE IMAP4rev1 LITERAL+ IDLE OK Pre-login listed SASL-IR post-login AUTH=PLAINA0001 capabilities have LOGIN-REFERRALS ID

995/tcp   open  ssl/pop3 syn-ack ttl 63 Dovecot pop3d
|_ssl-date: TLS randomness does not represent time
|_pop3-capabilities: SASL(PLAIN) RESP-CODES CAPA USER AUTH-RESP-CODE TOP PIPELINING UIDL
| ssl-cert: Subject: commonName=enigma
| Subject Alternative Name: DNS:enigma
| Issuer: commonName=enigma
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2026-02-18T20:33:33
| Not valid after:  2036-02-16T20:33:33
| MD5:   8361:ca20:2e4e:dff6:6e90:1445:7458:9fc3
| SHA-1: 9f91:b6ed:85b4:517c:0421:c62e:167d:5631:daa6:5a40

2049/tcp  open  nfs_acl  syn-ack ttl 63 3 (RPC #100227)
35427/tcp open  mountd   syn-ack ttl 63 1-3 (RPC #100005)
42725/tcp open  mountd   syn-ack ttl 63 1-3 (RPC #100005)
45001/tcp open  mountd   syn-ack ttl 63 1-3 (RPC #100005)
45471/tcp open  nlockmgr syn-ack ttl 63 1-4 (RPC #100021)
59899/tcp open  status   syn-ack ttl 63 1 (RPC #100024)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

```
# Interesting Ports

| Service | Port | Version               | Note                             | Next Step |
| ------- | ---- | --------------------- | -------------------------------- | --------- |
| HTTP    | 80   | nginx/1.24.0 (Ubuntu) | redirect to `http://enigma.htb/` |           |
