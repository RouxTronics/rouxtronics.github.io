## Nmap

```sh
 sudo nmap -p- --reason --min-rate 10000 $TARGET
```

![](<./attachments/01-Reconnaissance.png>)

### Specific Ports 

```sh
sudo nmap -p 53,80,88,135,139,389,445,464,593,636,3268,3269,5986,9389,49664,49669,49677,51243,51259 -sCV $TARGET
```


```txt

PORT      STATE SERVICE       REASON          VERSION
53/tcp    open  domain        syn-ack ttl 127 Simple DNS Plus
80/tcp    open  http          syn-ack ttl 127 Apache httpd 2.4.58 (OpenSSL/3.1.3 PHP/8.2.12)
|_http-server-header: Apache/2.4.58 (Win64) OpenSSL/3.1.3 PHP/8.2.12
|_http-title: Did not follow redirect to http://nanocorp.htb/
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
88/tcp    open  kerberos-sec  syn-ack ttl 127 Microsoft Windows Kerberos (server time: 2026-06-23 07:22:45Z)
135/tcp   open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
139/tcp   open  netbios-ssn   syn-ack ttl 127 Microsoft Windows netbios-ssn
389/tcp   open  ldap          syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: nanocorp.htb0., Site: Default-First-Site-Name)
445/tcp   open  microsoft-ds? syn-ack ttl 127
464/tcp   open  kpasswd5?     syn-ack ttl 127
593/tcp   open  ncacn_http    syn-ack ttl 127 Microsoft Windows RPC over HTTP 1.0
636/tcp   open  tcpwrapped    syn-ack ttl 127
3268/tcp  open  ldap          syn-ack ttl 127 Microsoft Windows Active Directory LDAP (Domain: nanocorp.htb0., Site: Default-First-Site-Name)
3269/tcp  open  tcpwrapped    syn-ack ttl 127
5986/tcp  open  ssl/http      syn-ack ttl 127 Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
| tls-alpn:
|_  http/1.1
|_ssl-date: TLS randomness does not represent time
|_http-server-header: Microsoft-HTTPAPI/2.0
|_http-title: Not Found
| ssl-cert: Subject: commonName=dc01.nanocorp.htb
| Subject Alternative Name: DNS:dc01.nanocorp.htb
| Issuer: commonName=dc01.nanocorp.htb
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2025-04-06T22:58:43
| Not valid after:  2026-04-06T23:18:43
| MD5:   2e3e:1a10:10b8:7f43:dc93:a4d9:05ef:6053
| SHA-1: 4674:6312:27ce:e783:91b7:ec00:1746:f114:d669:4ea0
| -----BEGIN CERTIFICATE-----
| MIIDMDCCAhigAwIBAgIQIG1hb/WXAZBNVk/iii5EyjANBgkqhkiG9w0BAQsFADAc
| MRowGAYDVQQDDBFkYzAxLm5hbm9jb3JwLmh0YjAeFw0yNTA0MDYyMjU4NDNaFw0y
| NjA0MDYyMzE4NDNaMBwxGjAYBgNVBAMMEWRjMDEubmFub2NvcnAuaHRiMIIBIjAN
| BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvhk2VBmIaEaly06th345bTcNsYcV
| D4rgwzD861bdYfo3DYKG0XykF5u1O17P/jO7TUokAfQB2IeNTAb77ZU1iK1PdCCX
| bv6jeV+MEgsJcvCUSYdX5eEurSnDgTteegJ5APzUVgleNaFMkQi7rB9gG422AJov
| fJzCxPHm0irdfJt0cH5JRGg1+5zcm3A8FzQ1WxBS0KfmfMKCYhnFufpiUcFMtire
| azOyDb4IXFEpWuDVuPrr0O5GwWIiHlydtfY5u8+AeDaIEFHfP2qtN4T+6BEyadOT
| hdbPLxx53qFxAWVfoHjr6M9RWUHKEVmRBacBa4Jjj5VzEWt0IJM9Nq7/2QIDAQAB
| o24wbDAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwIGCCsGAQUF
| BwMBMBwGA1UdEQQVMBOCEWRjMDEubmFub2NvcnAuaHRiMB0GA1UdDgQWBBQaIgqw
| fFwJfesMFBU9Usbf0k55ODANBgkqhkiG9w0BAQsFAAOCAQEAY84V2Zwkjqqiraun
| KN+g7VoDri61Yn4U6DnVHt2h87gJRNVPukb64oAIqbTuyVRDe9CKtQo8SDul/x/Y
| GbNu0oHXYssqx37uowexR3AwoYkg1rLiRKik1cYbjawVjCUZ8ZEL1OLsMg362uaG
| hEvxeACIwiuoEpPXNWsLr4Vx44ImHMNVEeQg3luTTE/YcaProZO+/7TkB8yj1RbT
| D2hom7Eo8cGz5hVxCsHyv+KjUkWGC/prCEZXKgO+yHwc/ZGQIYnO0gEaNWnxlal5
| hFH4guGtiqkjjSQgPdSrCSxpEE1tHssCualeYyyMtxLq/dNLNSK+uRX+/A0/F7An
| VGJ53g==
|_-----END CERTIFICATE-----
9389/tcp  open  mc-nmf        syn-ack ttl 127 .NET Message Framing
49664/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49669/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
49677/tcp open  ncacn_http    syn-ack ttl 127 Microsoft Windows RPC over HTTP 1.0
51243/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
51259/tcp open  msrpc         syn-ack ttl 127 Microsoft Windows RPC
Service Info: Hosts: nanocorp.htb, DC01; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-time:
|   date: 2026-06-23T07:23:45
|_  start_date: N/A
|_clock-skew: 6h59m57s
| p2p-conficker:
|   Checking for Conficker.C or higher...
|   Check 1 (port 43140/tcp): CLEAN (Timeout)
|   Check 2 (port 13685/tcp): CLEAN (Timeout)
|   Check 3 (port 40227/udp): CLEAN (Timeout)
|   Check 4 (port 59798/udp): CLEAN (Timeout)
|_  0/4 checks are positive: Host is CLEAN or ports are blocked
| smb2-security-mode:
|   3:1:1:
|_    Message signing enabled and required

NSE: Script Post-scanning.
NSE: Starting runlevel 1 (of 3) scan.
Initiating NSE at 02:24
Completed NSE at 02:24, 0.00s elapsed
NSE: Starting runlevel 2 (of 3) scan.
Initiating NSE at 02:24
Completed NSE at 02:24, 0.00s elapsed
NSE: Starting runlevel 3 (of 3) scan.
Initiating NSE at 02:24
Completed NSE at 02:24, 0.00s elapsed
Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 129.99 seconds
           Raw packets sent: 23 (988B) | Rcvd: 29 (1.260KB)

```


## Findings 

- many of the ports associated with a [Windows Domain Controller](https://0xdf.gitlab.io/cheatsheets/os#windows-domain-controller).
- domain is `nanocorp.htb`, and the hostname is `DC01`.
- All of the ports show a TTL of 127, which matches the [expected TTL](https://0xdf.gitlab.io/cheatsheets/os#os-identification) for Windows one hop away.
- A redirect to `http://nanocorp.htb`
- Clock Skew,  sure to run `sudo ntpdate DC01.nanocorp.htb` before any actions that use Kerberos auth.
