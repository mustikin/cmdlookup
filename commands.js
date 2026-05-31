const commands = [

  // ── NETWORK ──────────────────────────────────────────────
  {
    category: "network",
    command: "ipconfig",
    description: "Show basic IP address info for all adapters",
    example: "ipconfig"
  },
  {
    category: "network",
    command: "ipconfig /all",
    description: "Show full network adapter details including MAC address and DNS",
    example: "ipconfig /all"
  },
  {
    category: "network",
    command: "ipconfig /release",
    description: "Release the current DHCP IP address",
    example: "ipconfig /release"
  },
  {
    category: "network",
    command: "ipconfig /renew",
    description: "Request a new DHCP IP address",
    example: "ipconfig /renew"
  },
  {
    category: "network",
    command: "ipconfig /flushdns",
    description: "Clear the local DNS resolver cache",
    example: "ipconfig /flushdns"
  },
  {
    category: "network",
    command: "ping",
    description: "Test connectivity to a host. Use -t to ping continuously",
    example: "ping google.com\nping -t 192.168.1.1"
  },
  {
    category: "network",
    command: "tracert",
    description: "Trace the route packets take to reach a host",
    example: "tracert google.com"
  },
  {
    category: "network",
    command: "nslookup",
    description: "Look up DNS records for a domain or IP address",
    example: "nslookup google.com\nnslookup 8.8.8.8"
  },
  {
    category: "network",
    command: "netstat -an",
    description: "Show all active connections and listening ports",
    example: "netstat -an"
  },
  {
    category: "network",
    command: "netstat -b",
    description: "Show active connections with the executable name (run as admin)",
    example: "netstat -b"
  },
  {
    category: "network",
    command: "arp -a",
    description: "Display the ARP table (IP to MAC address mappings)",
    example: "arp -a"
  },
  {
    category: "network",
    command: "net use",
    description: "Map a network drive or show existing mapped drives",
    example: "net use Z: \\\\server\\share\nnet use"
  },
  {
    category: "network",
    command: "net use * /delete",
    description: "Disconnect all mapped network drives",
    example: "net use * /delete"
  },
  {
    category: "network",
    command: "pathping",
    description: "Combines ping and tracert — shows packet loss per hop",
    example: "pathping google.com"
  },

  // ── USER & AD ─────────────────────────────────────────────
  {
    category: "user",
    command: "whoami",
    description: "Show the currently logged-in user and domain",
    example: "whoami"
  },
  {
    category: "user",
    command: "net user",
    description: "List all local user accounts on the machine",
    example: "net user"
  },
  {
    category: "user",
    command: "net user [username]",
    description: "Show details for a specific local user account",
    example: "net user jsmith"
  },
  {
    category: "user",
    command: "net user [username] * /domain",
    description: "Reset a domain user password (run as admin)",
    example: "net user jsmith * /domain"
  },
  {
    category: "user",
    command: "net localgroup administrators",
    description: "List members of the local Administrators group",
    example: "net localgroup administrators"
  },
  {
    category: "user",
    command: "net localgroup administrators [user] /add",
    description: "Add a user to the local Administrators group",
    example: "net localgroup administrators jsmith /add"
  },
  {
    category: "user",
    command: "gpupdate /force",
    description: "Force an immediate Group Policy update",
    example: "gpupdate /force"
  },
  {
    category: "user",
    command: "gpresult /r",
    description: "Show applied Group Policy results for current user and computer",
    example: "gpresult /r"
  },
  {
    category: "user",
    command: "set",
    description: "Display environment variables including USERNAME and USERDOMAIN",
    example: "set"
  },
  {
    category: "user",
    command: "net accounts",
    description: "Show local account policy (password age, lockout settings)",
    example: "net accounts"
  },

  // ── DISK ──────────────────────────────────────────────────
  {
    category: "disk",
    command: "diskpart",
    description: "Open the disk partition management tool (run as admin)",
    example: "diskpart"
  },
  {
    category: "disk",
    command: "chkdsk",
    description: "Check a disk for errors. Use /f to fix, /r to locate bad sectors",
    example: "chkdsk C: /f /r"
  },
  {
    category: "disk",
    command: "sfc /scannow",
    description: "Scan and repair corrupted Windows system files (run as admin)",
    example: "sfc /scannow"
  },
  {
    category: "disk",
    command: "DISM /Online /Cleanup-Image /RestoreHealth",
    description: "Repair the Windows image using Windows Update (run as admin)",
    example: "DISM /Online /Cleanup-Image /RestoreHealth"
  },
  {
    category: "disk",
    command: "dir",
    description: "List files and folders in the current directory",
    example: "dir C:\\Users\ndir /s /b *.log"
  },
  {
    category: "disk",
    command: "tree",
    description: "Display folder structure as a tree",
    example: "tree C:\\Users\\jsmith /f"
  },
  {
    category: "disk",
    command: "del",
    description: "Delete a file or files matching a pattern",
    example: "del C:\\Temp\\*.tmp"
  },
  {
    category: "disk",
    command: "xcopy",
    description: "Copy files and folders including subdirectories",
    example: "xcopy C:\\Source D:\\Backup /e /i /h"
  },
  {
    category: "disk",
    command: "robocopy",
    description: "Robust file copy — great for migrations and backups",
    example: "robocopy C:\\Source D:\\Dest /e /copyall /log:log.txt"
  },
  {
    category: "disk",
    command: "format",
    description: "Format a drive (use with caution!)",
    example: "format D: /fs:NTFS /q"
  },

  // ── SYSTEM ────────────────────────────────────────────────
  {
    category: "system",
    command: "systeminfo",
    description: "Show detailed OS, hardware, and patch info for the machine",
    example: "systeminfo"
  },
  {
    category: "system",
    command: "hostname",
    description: "Display the computer name",
    example: "hostname"
  },
  {
    category: "system",
    command: "msinfo32",
    description: "Open System Information GUI window",
    example: "msinfo32"
  },
  {
    category: "system",
    command: "winver",
    description: "Show Windows version and build number in a popup",
    example: "winver"
  },
  {
    category: "system",
    command: "shutdown /r /t 0",
    description: "Restart the computer immediately",
    example: "shutdown /r /t 0"
  },
  {
    category: "system",
    command: "shutdown /s /t 0",
    description: "Shut down the computer immediately",
    example: "shutdown /s /t 0"
  },
  {
    category: "system",
    command: "shutdown /a",
    description: "Abort a pending shutdown",
    example: "shutdown /a"
  },
  {
    category: "system",
    command: "eventvwr",
    description: "Open Event Viewer to check system/application logs",
    example: "eventvwr"
  },
  {
    category: "system",
    command: "devmgmt.msc",
    description: "Open Device Manager",
    example: "devmgmt.msc"
  },
  {
    category: "system",
    command: "services.msc",
    description: "Open the Services management console",
    example: "services.msc"
  },
  {
    category: "system",
    command: "compmgmt.msc",
    description: "Open Computer Management console",
    example: "compmgmt.msc"
  },
  {
    category: "system",
    command: "regedit",
    description: "Open the Registry Editor (use with caution!)",
    example: "regedit"
  },
  {
    category: "system",
    command: "mstsc",
    description: "Open Remote Desktop Connection",
    example: "mstsc\nmstsc /v:192.168.1.100"
  },

  // ── PROCESS ───────────────────────────────────────────────
  {
    category: "process",
    command: "tasklist",
    description: "Show all running processes with PID and memory usage",
    example: "tasklist\ntasklist | find \"chrome\""
  },
  {
    category: "process",
    command: "taskkill /PID [pid]",
    description: "Kill a process by its PID number",
    example: "taskkill /PID 1234 /F"
  },
  {
    category: "process",
    command: "taskkill /IM [name]",
    description: "Kill a process by its image/exe name",
    example: "taskkill /IM chrome.exe /F"
  },
  {
    category: "process",
    command: "sc query",
    description: "List all Windows services and their current state",
    example: "sc query\nsc query wuauserv"
  },
  {
    category: "process",
    command: "sc stop [service]",
    description: "Stop a Windows service by name",
    example: "sc stop spooler"
  },
  {
    category: "process",
    command: "sc start [service]",
    description: "Start a Windows service by name",
    example: "sc start spooler"
  },
  {
    category: "process",
    command: "net stop [service]",
    description: "Stop a service using net command",
    example: "net stop spooler"
  },
  {
    category: "process",
    command: "net start [service]",
    description: "Start a service using net command",
    example: "net start spooler"
  },

  // ── REMOTE ────────────────────────────────────────────────
  {
    category: "remote",
    command: "mstsc /v:[host]",
    description: "Connect to a remote machine via RDP",
    example: "mstsc /v:PC-NAME\nmstsc /v:192.168.1.50"
  },
  {
    category: "remote",
    command: "ping [host] -t",
    description: "Continuously ping a remote machine to check if it's online",
    example: "ping PC-NAME -t"
  },
  {
    category: "remote",
    command: "net view \\\\[host]",
    description: "View shared resources on a remote machine",
    example: "net view \\\\SERVER01"
  },
  {
    category: "remote",
    command: "shutdown /r /m \\\\[host] /t 0",
    description: "Remotely restart another machine on the network (admin rights needed)",
    example: "shutdown /r /m \\\\PC-NAME /t 0"
  },
  {
    category: "remote",
    command: "nbtstat -a [host]",
    description: "Get NetBIOS name info from a remote computer",
    example: "nbtstat -a PC-NAME"
  },
  {
    category: "remote",
    command: "psexec \\\\[host] cmd",
    description: "Run CMD on a remote machine using Sysinternals PsExec",
    example: "psexec \\\\PC-NAME cmd"
  }

];
