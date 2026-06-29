---
title: Pre-Engagement
description: " Scope, target IP, objectives, and tooling setup before any active work begins."
start:
end:
---
# Envirnoment 

## Variables 

```sh
export TARGET=10.129.4.169
export ATTACKER=10.10.16.48
ping $TARGET
```


## Workspace 

```sh
mkdir -p ./{loot,exploit,www,recon}
ln -s CyberTools ./tools

```