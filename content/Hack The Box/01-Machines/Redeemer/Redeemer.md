---
title: Redeemer
date: 2026-06-27 19:58
description: Redis enumeration and exploitation on a very easy HTB Linux machine.
platform: HTB
categories: Machines
status: 3-Completed
os: Linux
activity: Retired
plan: Free
difficulty: 0-Very Easy
image: ./attachments/Redeemer.png
finished: 2025-07-06
completed: false
publish: false
tags:
  - redis
  - linux
  - htb
---
# Synopsis

<img src="./attachments/Redeemer.png" width="100" height="100">
>[!summary]
>- **Reconnaissance**: Scanned all ports with `rustscan` and identified an open Redis server on TCP/6379.
>- **Enumeration**: Connected to the Redis service using `redis-cli`, ran the `info` command, and discovered a non-default database (index 0) containing 4 keys.
>- **Exploitation**: Listed all keys with `KEYS *`, then retrieved the flag using `get flag`.

| Machine    | [Redeemer](https://app.hackthebox.com/machines/Redeemer?sort_by=created_at&sort_type=desc) |
| ---------- | ------------------------------------------------------------------------------------------ |
| OS         | Linux                                                                                      |
| Difficulty | Very Easy                                                                                  |
| Released   | 11th May, 2022                                                                             |
| Created by | [ch4p](https://app.hackthebox.com/users/1)                                                 |
| CVE        |                                                                                            |

Redeemer is a very easy Linux machine which explores the enumeration and exploitation of a Redis database server while showcasing the redis-cli command line utility and basic commands to interact with the Redis service.
## Improved skills

- Redis Enumeration
## Used tools

- rustscan / nmap 
- metasploit-framework
- redis-cli
## Resources 

- [Official HTB Writeup](https://www.hackthebox.com/machines/Redeemer)
---

# Pre-Engagement
> [!info] **Prepare the Battlefield**
> Set the `$TARGET` variable, confirm VPN connectivity (`ping -c 3 $TARGET`), create the directory structure (`recon/`, `exploits/`, `loot/`), and ensure your tools are updated.

## Environment Setup 

```sh
# Common Variable Used 
export TARGET=10.129.74.111
mkdir -p recon exploits loot attachments
echo "[+] Directories created. Target set to $TARGET"
```

---

# Reconnaissance

> [!todo] **Find the Attack Surface**
> Scan ALL ports. Identify services, versions, and OS. Note anything unusual. Don't skip UDP if TCP looks empty.

## Port Scan
We'll start with a full TCP port scan using `rustscan` – it's fast, modern, and handles large scans efficiently.

```sh
rustscan -a $TARGET -r 1-65535 -t 10000 --ulimit 6500 -- -Pn -oN recon/rustscan.txt
```

📝 **Why these flags?**

- `-r 1-65535` – Scans **all** TCP ports (crucial on HTB, as services often hide on non-standard ports)
    
- `-t 10000` – Higher timeout for slower connections
    
- `--ulimit 6500` – Increases file descriptor limit for faster scanning
    
- `-Pn` – Skip host discovery (treat target as online)

**Rustscan Output:**
```bash
PORT     STATE SERVICE REASON
6379/tcp open  redis   syn-ack
```

Only one port is open – Redis on 6379. Investigate deeper.
## Deep Scan
Run an `nmap` service and script scan on the discovered port to gather more details:

```sh
 sudo nmap -sCV -Pn -vvv -p 6379 -oN  recon/deep_scan $TARGET
```

📝 **Why these flags?**

- `-sC` – Run default NSE scripts (helps extract version and service info)
    
- `-sV` – Version detection (identifies exact Redis version)
    
- `-vvv` – Very verbose output (great for debugging, especially on slow networks)
    
- `-p 6379` – Scan only the discovered port
    
- `-Pn` – Skip host discovery
    
- `-oN` – Save output in normal format

### Nmap Output 

```sh
PORT     STATE SERVICE REASON         VERSION
6379/tcp open  redis   syn-ack ttl 63 Redis key-value store 5.0.7
```
## Interesting Ports

| Service | Port     | Version                     | Note | Next Step |
| ------- | -------- | --------------------------- | ---- | --------- |
| redis   | 6379/tcp | Redis key-value store 5.0.7 | Default port, no authentication detected | Enumerate with `redis-cli` |

---
# Enumeration

## Redis (TCP/6379)

### What is Redis?

Redis (REmote DIctionary Server) is an open-source advanced **NoSQL key-value data store** used as a database, cache, and message broker. The data is stored in a dictionary format with key-value pairs.

It is typically used for **short-term storage** of data that needs fast retrieval. Redis does backup data to hard drives to provide consistency, but by default, it runs **without authentication** – which makes it a common target for attackers.

> 🔑 **Key Takeaway**: Redis on port 6379 with no authentication is a common CTF vector. The default configuration allows anyone to connect, read, and write data. This is our entry point.

### Installing redis-cli 

To interact with the Redis server, we need the `redis-cli` command-line utility:

```bash
sudo apt install redis-tools
```

📝 **Note**: The `redis-tools` package includes `redis-cli`, `redis-server`, and other utilities
### Enumerating Redis Server 

Let's connect to the Redis service and start enumerating:

```bash
# Get Help 
redis-cli --help 
# Connect to Target Host 
redis-cli -h $TARGET
# Info Dump

```

Once connected, we see the Redis prompt:

```bash
10.129.74.111:6379>
```

From here, we can run commands directly on the server. Let's start by dumping server information 

```bash
10.129.74.111:6379> info
```

The `info` command returns a large amount of data, including server statistics, memory usage, and database keyspace information. Here's the relevant section:

```bash
# Keyspace
db0:keys=4,expires=0,avg_ttl=0
```

The **keyspace section** provides statistics on the main dictionary of each database. In our case, we can see:

- **Database 0 (db0)** exists
    
- It contains **4 keys**
    
- No keys have an expiry set

> 🔍 **Why this matters**: The presence of keys in the database indicates that the server is actively storing data – and we can potentially retrieve it.

Let's switch to database 0 to examine its contents:

```bash
10.129.74.111:6379> select 0
OK
```

The `select` command switches to the specified database index (0 by default). The `OK` response confirms we're now working with database 0.

Now let's list all the keys in this database:

```bash
10.129.74.111:6379> KEYS *
1) "flag"
2) "temp"
3) "numb"
4) "stor"
```

We see four keys: `flag`, `temp`, `numb`, and `stor`. The `flag` key looks promising – let's retrieve its value:

```bash
10.129.74.111:6379> get flag
"03e1d2b376c37ab3f5319922053953eb"
```

 successfully retrieved the flag during enumeration! 🎉
⚠️ **Important Note**: The `KEYS *` command is **O(N)** and can be dangerous in production environments with large datasets. In a real pentest, you'd prefer the `SCAN` command for iterative, non-blocking enumeration.

---
# Exploitation

## Capturing the Flag

We successfully enumerated the Redis server and discovered the flag. The exploitation here was **trivial** – the server had no authentication, allowing us to read data directly.

### Attack Summary

|Step|Action|Result|
|---|---|---|
|1|Connect to Redis|`redis-cli -h $TARGET`|
|2|Check databases|`info` → found `db0` with 4 keys|
|3|Switch to database|`select 0`|
|4|List keys|`KEYS *` → found `flag`|
|5|Retrieve flag|`get flag` → `03e1d2b376c37ab3f5319922053953eb`|
### Why Did This Work?

This attack succeeded because the Redis server was:

1. **Exposed to the network** – Binding to all interfaces (`0.0.0.0`) instead of localhost
    
2. **Unprotected** – No password authentication configured (`requirepass` not set)
    
3. **Running on default port** – Making it easy to discover and target
    

> 🔐 **Security Lesson**: Redis should **never** be exposed to untrusted networks without authentication. The default configuration is designed for **development environments**, not production.

### Flag Captured

```
03e1d2b376c37ab3f5319922053953eb
```
---

# Remediation

> [!summary] **Fix the Root Cause**
> For each vulnerability, list the actionable fix (patch, config change, principle of least privilege) and assign a priority. 

| Finding | Fix | Priority |
| ------- | --- | -------- |
| Redis server exposed without authentication on port 6379 | Bind Redis to localhost only by setting `bind 127.0.0.1` in `/etc/redis/redis.conf` | **Critical** |
| No password authentication configured for Redis | Enable authentication by setting `requirepass <strong-password>` in `/etc/redis/redis.conf` | **High** |
| Redis running on default port 6379 | Change the default port (e.g., to a non-standard port) in `/etc/redis/redis.conf` to reduce automated scanning exposure | **Low** |
| Sensitive flag stored in plaintext within Redis | Encrypt sensitive data before storing or use Redis with TLS/SSL encryption enabled | **Medium** |
# Trophies

- [x] **root.txt**

| Task | Question                                                                                                                                              | Answer                             |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 1    | Which TCP port is open on the machine?                                                                                                                | 6379                               |
| 2    | Which service is running on the port that is open on the machine?                                                                                     | redis                              |
| 3    | What type of database is Redis? Choose from the following options: (i) In-memory Database, (ii) Traditional Database                                  | In-memory Database                 |
| 4    | Which command-line utility is used to interact with the Redis server? Enter the program name you would enter into the terminal without any arguments. | redis-cli                          |
| 5    | Which flag is used with the Redis command-line utility to specify the hostname?                                                                       | -h                                 |
| 6    | Once connected to a Redis server, which command is used to obtain the information and statistics about the Redis server?                              | info                               |
| 7    | What is the version of the Redis server being used on the target machine?                                                                             | 5.0.7                              |
| 8    | Which command is used to select the desired database in Redis?                                                                                        | select                             |
| 9    | How many keys are present inside the database with index 0?                                                                                           | 4                                  |
| 10   | Which command is used to obtain all the keys in a database?                                                                                           | keys *                             |
| 11   | Submit the flag located in the database.                                                                                                              | `03e1d2b376c37ab3f5319922053953eb` |

---
# Conclusion

![](<./attachments/Redeemer-1.png>)

---
