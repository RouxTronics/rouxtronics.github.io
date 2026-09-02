---
title: Meow
date: 2025-12-08 20:43
description: Inital Machine on hack the box access via telnet
platform: HTB
categories: Machines
activity: Retired
plan: Free
status: 3-Completed
os: Linux
difficulty: 0-Very Easy
image: ./attachments/Meow-1.png
tags:
  - linux
  - privesc/telnet
finished: 2025-06-05
completed: true
publish: true
---
# Synopsis

<img src="./attachments/Meow-1.png" width="100" height="100">

>[!summary]
> Meow is the introductory machine in Hack The Box's Starting Point track, designed to familiarize beginners with fundamental penetration testing workflows. 
> 
> The target exposes a Telnet service on TCP port 23, which accepts default credentials (`root` with a blank password), granting immediate unrestricted access to the system.

| Machine    | [Meow](https://app.hackthebox.com/machines/Meow?sort_by=created_at&sort_type=desc) |
| ---------- | ---------------------------------------------------------------------------------- |
| OS         | Linux                                                                              |
| Difficulty | Easy                                                                               |
| Released   | 30th September, 2021                                                               |
| Created by | [HTB-Bot](https://app.hackthebox.com/users/16)                                     |
## Improved skills

- Port scanning 
- Accessing telnet
## Used tools

- rustscan / nmap 
- telnet 

## Resources 

- Official HTB machine page: [https://app.hackthebox.com/machines/Meow](https://app.hackthebox.com/machines/Meow)
- Official write-up available within the HTB platform


---
# Pre-Engagement
> [!info] **Prepare the Battlefield**
> Set the `$TARGET` variable, confirm VPN connectivity (`ping -c 3 $TARGET`), create the directory structure (`recon/`, `exploits/`, `loot/`), and ensure your tools are updated.

## Environment Setup 

```sh
# 1. Set target IP (replace with actual HTB IP)
export TARGET=<IP>
# 2. Verify VPN connectivity
ping -c 3 $TARGET
# 3. Create organized directory structure for this machine
mkdir -p $TARGET/{recon,exploits,loot,attachments}
cd $TARGET
# 4. Update essential tools
sudo apt update && sudo apt install nmap telnet rustscan -y
echo "[+] Environment ready. Target set to $TARGET"
```

---
# Reconnaissance

## Full Port Scan

We begin with an aggressive Nmap scan to discover all open ports, identify running services, and detect the operating system.

```sh
sudo nmap -sC -sV -p- $TARGET
```

**Key Findings:**

|Port|Service|Version|Status|
|---|---|---|---|
|**23**|Telnet|Linux telnetd|Open|

Only a single port (`23/TCP`) is exposed. This is an **unencrypted, legacy remote access protocol**—historically vulnerable to default credentials and man-in-the-middle attacks. The presence of Telnet significantly reduces the attack surface, making credential guessing the most viable vector.

> ℹ️ **Note on `-p-`**: This flag scans all 65,535 TCP ports. While comprehensive, it takes longer. For a quick check, you could use `-p 1-1000` first, but the full scan ensures nothing is missed (even though Meow is deliberately sparse).


---
# Enumeration

## Telnet (TCP/23)

### Install Telnet utils
If your system does not already have the Telnet client installed, install it via:

```sh
# For Debian-based systems (Kali, Parrot, Ubuntu)
sudo apt update
sudo apt install telnet -y
```

### Initial Connection
Connect to the target using the `$TARGET` environment variable we set earlier:

```sh
telnet $TARGET
```

**Connection Behavior:**  
After issuing the command, there is an approximate **30-second delay** before the login prompt appears. This is often caused by the Telnet daemon performing a reverse DNS lookup on the connecting client. We can ignore it for now, but it is useful to note for future troubleshooting.


![](<./attachments/02.1-Enumeration.png>)

### Credential Discovery

At this stage, we have a login prompt but no valid credentials. The first logical step is to attempt **common default credentials**:

|Username|Password|Result|
|---|---|---|
|`admin`|`admin`|❌ Failed|
|`admin`|`password`|❌ Failed|
|`anonymous`|`anonymous`|❌ Failed|
|`root`|`root`|❌ Failed|
|`root`|`toor`|❌ Failed|
|`root`|(blank)|❓ (Awaiting decision)|

After exhausting basic guesses, the next step is **OSINT (Open Source Intelligence)**. A quick web search for `telnet default login` or `default credentials for Linux embedded systems` reveals a common pattern: many legacy systems and IoT devices allow the `root` user with a **blank password**.

---
# Exploitation

## Shell as `root`
### Gaining Unauthorized Access

Connect again via Telnet and supply the `root` username while leaving the password field entirely blank:

```bash
telnet $TARGET
```

```txt
Ubuntu 20.04.2 LTS
Meow login: root
Password: (press Enter / leave blank)
```

**Result:** 🎯 The system grants us immediate, unrestricted access.

![](<./attachments/03-Exploitation.png>)

```bash
whoami
# Output: root
pwd
# Output: /root
```


**Shell**:`root`

```sh
ls 
cat flag.txt
```
---
# Post Exploitation
With root access secured, we conduct a brief system enumeration to understand the environment and identify critical misconfigurations.

## OS & Kernel Information

```bash
uname -a
```

```
Linux Meow 5.4.0-77-generic #86-Ubuntu SMP Thu Jun 17 02:35:03 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux
```

## Shadow File Analysis
Inspecting the `/etc/shadow` file reveals how user passwords are stored (or not stored):

```bash
cat /etc/shadow | grep root
```

```txt
root::18785:0:99999:7:::
```

**Critical Finding:** The password hash field for the `root` user is **completely empty** (`::`). This means the system is configured to accept a blank password for the root account—no hashing, no verification, just a direct login. This is the root cause of our successful exploitation.

---
# Remediation

> [!summary] **Fix the Root Cause**
> For each vulnerability, list the actionable fix (patch, config change, principle of least privilege) and assign a priority. 

|Finding|Fix|Priority|
|---|---|---|
|**Telnet service exposed** (port 23)|Disable Telnet immediately. `sudo systemctl stop telnet && sudo systemctl disable telnet`. Replace with SSH for encrypted remote access (`sudo apt install openssh-server`).|**Critical**|
|**Blank password for `root`**|Enforce a strong password. `sudo passwd root` (choose a complex passphrase). Alternatively, lock the root account entirely if not needed for interactive login: `sudo passwd -l root`.|**Critical**|
|**Default/weak password hashing algorithm** (MD5)|Migrate to modern hashing algorithms (SHA-512). Run `sudo pam-auth-update` and select `sha512` and `yescrypt`. Force all users to reset passwords upon next login to rehash them securely.|**High**|
|**No firewall restrictions**|Implement a host-based firewall to restrict access to administrative services.  <br>`sudo ufw allow 22/tcp` (if SSH enabled)  <br>`sudo ufw deny 23/tcp`  <br>`sudo ufw enable`|**High**|
|**Root remote login allowed**|Prevent root from logging in remotely over the network. In `/etc/ssh/sshd_config`, set `PermitRootLogin no`. For Telnet, restrict access via `/etc/hosts.deny` or simply disable the service entirely (already covered above).|**Medium**|
|**Lack of intrusion detection**|Install and configure `fail2ban` to block repeated login attempts on exposed services. `sudo apt install fail2ban && sudo systemctl enable fail2ban`.|**Low**|

---
# Trophies

- [x] **root.txt**

## Guided Mode

| Task | Question                                                                                                                                                                                       | Answer                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 1    | In cybersecurity, isolated environments—like Pwnbox or the vulnerable target machines—are often VMs. What does VM stand for?                                                                   | Virtual Machine                  |
| 2    | What tool do we use to interact with the operating system in order to issue commands via the command line, such as the one to start our VPN connection? It's also known as a console or shell. | terminal                         |
| 3    | What service do we use to form our VPN connection into HTB labs?                                                                                                                               | openvpn                          |
| 4    | What tool do we use to test our connection to the target with an ICMP echo request?                                                                                                            | ping                             |
| 5    | What is the name of the most common tool for finding open ports on a target?                                                                                                                   | nmap                             |
| 6    | What service do we identify on port 23/tcp during our scans?                                                                                                                                   | telnet                           |
| 7    | What username is able to log into the target over telnet with a blank password?                                                                                                                | root                             |
| 8    | Submit the flag located in root's home directory.                                                                                                                                              | b40abdfe23665f766f9c61ecba8a4c19 |

---
# Conclusion
![](<./attachments/Meow.png>)

---
