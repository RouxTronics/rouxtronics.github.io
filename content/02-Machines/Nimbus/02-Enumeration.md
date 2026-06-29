---
title: 02-Enumeration
date: 2026-06-24 23:15
---
## DNS Config 

```sh
echo "$TARGET nimbus.htb" | sudo tee -a /etc/hosts
```

## HTTP (80)

```sh
whatweb  http://nimbus.htb
```

![](<./attachments/02-Enumeration.png>)

### Site 

![](<./attachments/02-Enumeration-1.png>)

**Version**: nimbus v1.4.2

### Tech Stack

### 404 Page 

![](<./attachments/02-Enumeration-2.png>)

### Directory Brute force 

![](<./attachments/02-Enumeration-4.png>)
### Vuln Scan 

```sh
nuclei http://nimbus.htb
```

![](<./attachments/02-Enumeration-3.png>)

### Subdomain Search 

```sh
ffuf -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-20000.txt -u http://nimbus.htb/ -H "Host: FUZZ.nimbus.htb" -fs 178
```

![](<./attachments/02-Enumeration-5.png>)

> Found `aws`

- edit `/etc/hosts` file