---
title: 02-Enumeration
date: 2026-06-25 02:35
---
## DNS Config 

> `/etc/hosts` file
```sh
nxc smb $TARGET --generate-hosts-file hosts
cat hosts /etc/hosts | sudo tee /etc/hosts | head -1
```

> clock strew 
```sh
sudo ntpdate DC01.pirate.htb
```

## SMB (445)

> The give creds for machine
```sh
nxc smb $TARGET -u pentest -p 'p3nt3st2025!&'
nxc smb $TARGET -u pentest -p 'p3nt3st2025!&' --shares
nxc smb $TARGET -u pentest -p 'p3nt3st2025!&' --users
nxc smb $TARGET -u pentest -p 'p3nt3st2025!&' --rid-brute
```

- Shares are Default 

### Share 
```sh
nxc smb $TARGET -u pentest -p 'p3nt3st2025!&' --shares
```
### Users List 

```sh
nxc smb $TARGET -u pentest -p 'p3nt3st2025!&' --users
```

> `users.txt`
```txt
Administrator 
Guest 
krbtgt 
a.white_adm 
a.white
pentest 
j.sparrow
```

- Non-Default users: `j.sparrow` , `a.white`

### Domain Objects 

```sh
nxc smb $TARGET -u pentest -p 'p3nt3st2025!&' --rid-brute
```

![](<./attachments/02-Enumeration.png>)


## LDAP (TCP/389)

```sh
netexec ldap $TARGET -u pentest -p 'p3nt3st2025!&' --gmsa
```

![](<./attachments/02-Enumeration-2.png>)

## HTTP (TCP/80)

![](<./attachments/02-Enumeration-1.png>)