---
date: 07 Aug 2025 22:10
source_url: https://overthewire.org/wargames/bandit/bandit17.html
tags:
  - overthewire/bandit
---
# Objective
- The credentials for the next level can be retrieved by submitting the password of the current level to **a port on localhost in the range 31000 to 32000**. 
- First find out which of these ports have a server listening on them. 
- Then find out which of those speak SSL/TLS and which don’t. 
- There is only 1 server that will give the next credentials, the others will simply send back to you whatever you send to it.
**Focus**: 
---
# Login
- username: `bandit16`
- password: `kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx`
```sh title:bandit16-sshpass
sshpass -p kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx ssh bandit16@bandit.labs.overthewire.org -p 2220
```

---
# Steps
```bash
nmap -sV -p 31000-32000 localhost 
```
- finds 5 ports open 31046,31518,31691,**31790**,31960, port 31790 is the port to use.
- use ssl/unknown, not ssl/echo
```bash
nmap -p 31000-32000 localhost 
cd $(mktemp -d)
echo "kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx" | openssl s_client -connect localhost:31790 -ign_eof | sed -n '/-----BEGIN RSA PRIVATE KEY-----/,/-----END RSA PRIVATE KEY-----/p' > pvt16.key && chmod 600 pvt16.key
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i pvt16.key bandit17@localhost -p 2220 "cat /etc/bandit_pass/bandit17"
```
`echo` the password in `openssl` command, `sed` extracts the RSA PRIVATE KEY part and outputs to `pvt16.key` and `chmod` changes premisson

---
# Answer
- username: `bandit17`
- password: `EReVavePLFHtFlFsjn3hyzMlvSuSAcRD`

```sh title:bandit17-sshpass
sshpass -p EReVavePLFHtFlFsjn3hyzMlvSuSAcRD ssh bandit17@bandit.labs.overthewire.org -p 2220
```
---
# Next Level
- [Bandit 18](<./Bandit 18.md>)
---
# Bash Script
```bash
#!/bin/bash
sshpass -p kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null bandit16@bandit.labs.overthewire.org -p 2220 /bin/bash << 'EOF'
# Step 1: Scan ports 31000-32000 for SSL/TLS services
nmap -p 31000-32000 --open -sV localhost | grep -E '31000-32000.*ssl'

# Step 2: Create temporary directory and verify
TEMP_DIR=$(mktemp -d) || { echo "Failed to create temp directory"; exit 1; }
cd "$TEMP_DIR" || { echo "Failed to change to temp directory"; exit 1; }

# Step 3: Retrieve and validate RSA private key
echo "kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx" | openssl s_client -connect localhost:31790 -ign_eof -quiet 2>/dev/null | sed -n '/-----BEGIN RSA PRIVATE KEY-----/,/-----END RSA PRIVATE KEY-----/p' > pvt16.key
if [ ! -s pvt16.key ]; then
    echo "Error: Failed to retrieve private key or key is empty"
    exit 1
fi
chmod 600 pvt16.key

# Step 4: Verify key format
if ! grep -q "BEGIN RSA PRIVATE KEY" pvt16.key; then
    echo "Error: pvt16.key is not a valid RSA private key"
    exit 1
fi

# Step 5: SSH and retrieve password
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i pvt16.key bandit17@localhost -p 2220 "cat /etc/bandit_pass/bandit17" 2>/dev/null || { echo "SSH failed: Check key or connection"; exit 1; }
```
- `chmod +x filename.sh && ./filename.sh`
---