# 💻 IT CMD Reference

A simple, searchable CMD command reference app for deskside IT engineers. No installs. No backend. Just open the HTML file or deploy to GitHub Pages.

## Features
- 🔍 Search commands by name, description, or example
- 📂 Filter by category (Network, User/AD, Disk, System, Process, Remote)
- 📋 One-click copy to clipboard
- 🌙 Dark theme built for long shifts

## Categories
| Category   | Commands Included                              |
|------------|------------------------------------------------|
| 🌐 Network  | ipconfig, ping, tracert, nslookup, netstat...  |
| 👤 User/AD  | whoami, net user, gpupdate, gpresult...        |
| 💾 Disk     | chkdsk, sfc, DISM, robocopy, diskpart...       |
| 🖥️ System   | systeminfo, shutdown, eventvwr, regedit...     |
| ⚙️ Process  | tasklist, taskkill, sc query, net stop...      |
| 🔗 Remote   | mstsc, psexec, net view, shutdown /m...        |

## How to Run
1. Clone or download this repo
2. Open `index.html` in any browser
3. That's it

## Deploy to GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch / root
4. Your app is live

## Contributing
Want to add a command? Edit `commands.js` and open a PR. Each command follows this format:

```javascript
{
  category: "network",
  command: "your command here",
  description: "What it does",
  example: "example usage"
}
```
