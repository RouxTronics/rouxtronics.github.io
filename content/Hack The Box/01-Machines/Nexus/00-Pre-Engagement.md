---
description: " Scope, target IP, objectives, and tooling setup before any active work begins."
start: 2026-06-25T22:03:00
end: 2026-06-25T22:08:00
---
# Environment 

## Variables 

```sh
export ATTACKER=10.10.16.33
export TARGET=10.129.110.112
export MACHINE=Nexus
ping $TARGET -c4
```

## Workspace 

```sh
HTB
cd Machines
mkdir -p ./$MACHINE/{recon,loot,exploit,www}
cd $MACHINE
```
