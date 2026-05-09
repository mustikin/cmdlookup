# CMD Lookup

A fast, searchable cheat sheet for everyday Windows CMD commands. Built for IT professionals, deskside support teams, and anyone who needs quick command references during work.

## Features

- **🔍 Instant Search** - Search across command names, actual commands, and descriptions in real-time
- **🏷️ Category Filtering** - Filter by Network, Active Directory, Disk, User, and System categories
- **📋 One-Click Copy** - Copy any command to clipboard with instant visual feedback
- **➕ Custom Commands** - Add your own frequently-used commands and save them locally
- **🌙 Dark Theme** - Easy on the eyes during night shifts and extended work sessions
- **📱 Responsive Design** - Works seamlessly on desktop and mobile browsers
- **⚡ No Dependencies** - Pure HTML/CSS/JavaScript, no build tools required
- **💾 Offline-First** - Runs entirely in the browser, custom commands persist in localStorage

## Quick Start

### Option 1: GitHub Pages (Instant)
1. Clone or fork this repo
2. Enable GitHub Pages in Settings → Pages → Source: main branch
3. Your CMD Lookup goes live at `yourusername.github.io/cmd-lookup`
4. Start using it immediately

### Option 2: Local Use
1. Download `index.html`
2. Double-click to open in your browser
3. Works instantly, no server needed

### Option 3: Self-Hosted
1. Download `index.html`
2. Drop it on any web server
3. Access via your domain

## How to Use

### Search Commands
Type in the search box to find commands by:
- Command name (e.g., "Check IP")
- Actual command syntax (e.g., "ipconfig")
- Description (e.g., "network")

Results filter in real-time as you type.

### Filter by Category
Click any category button to narrow results:
- **Network** - IP, DNS, connectivity, ports
- **AD** - Active Directory, users, groups, domain
- **Disk** - Storage, partitions, disk checks
- **User** - Local user management, accounts
- **System** - Processes, services, event logs

Combine search + category for precise results.

### Copy a Command
Click the 📋 button on any command card to copy it to your clipboard. The button turns ✓ briefly to confirm.

### Add Custom Commands
1. Click "➕ Add Custom Command"
2. Enter command name (e.g., "My Custom Ping")
3. Enter the actual command (e.g., `ping -t myserver.com`)
4. Select a category
5. Click "Save"

Custom commands are saved to your browser's localStorage and persist across sessions. You can delete them anytime.

## Built-In Commands

Comes with 30 pre-loaded commands across 5 categories:

**Network** (6 commands)
- IP configuration, DNS flushing, connectivity testing, port checking, tracerouting

**Active Directory** (6 commands)
- User queries, password resets, group membership, account unlocking, computer info

**Disk/Storage** (6 commands)
- Disk space checking, usage calculation, health monitoring, partitioning, formatting

**User Management** (6 commands)
- Local user creation/deletion, listing, group assignment, account disabling

**System** (6 commands)
- System info, process listing, process termination, event log queries

See each command's description for full details on syntax and use cases.

## Project Structure

```
cmd-lookup/
├── index.html          # Complete app (HTML + CSS + JS)
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Standard Node/IDE ignores
```

The entire app is in one file. No dependencies, no build step.

## For IT Teams

### Deskside Support
Share CMD Lookup with your team for consistent command reference during support calls. Add your organization's common commands.

### Golden Image Management
Bookmark CMD Lookup in your golden image for consistent access across deployed machines.

### Night Shift Ops
Works perfectly offline. Keep it open in a tab during night shifts for zero-friction command lookup.

### Training
Use as a training reference for junior techs learning common Windows administration commands.

## Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Uses modern JavaScript APIs (ES6+, localStorage, clipboard API). Works anywhere you can run a modern browser.

## Customization

### Add More Built-In Commands

Edit `index.html` and add to the `defaultCommands` array:

```javascript
const defaultCommands = [
    // ... existing commands ...
    { 
        id: 31, 
        category: 'Network', 
        name: 'Your Command Name', 
        command: 'your command here', 
        description: 'What it does' 
    },
];
```

Then commit and push. Your changes are live on GitHub Pages.

### Change Colors

Modify the CSS variables in the `<style>` section. Example:

```css
body {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 50%, #your-color-1 100%);
}
```

Colors currently use Slate 900/700/600 palette for dark theme.

### Add Keyboard Shortcuts

The app supports basic keyboard navigation. To extend:

```javascript
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        searchInput.focus();  // Ctrl+K to focus search
    }
});
```

Add this before the `init()` call in the `<script>` section.

## Known Limitations

- **localStorage Limit** - Browsers limit localStorage to ~5MB. Practically means you can add 200+ custom commands before hitting the limit
- **No Cloud Sync** - Custom commands are stored locally. Each device has its own copy. To share, export manually or use the shared README approach
- **No Multi-Device Sync** - If you use CMD Lookup on multiple computers, custom commands don't sync between them
- **No Offline Export** - Can't currently export custom commands to a file (future feature)

## Contributing

Found a bug? Want to add more commands to the default set? Have a better way to organize categories?

1. Fork this repo
2. Create a feature branch (`git checkout -b feature/add-powershell-commands`)
3. Make your changes
4. Commit with clear messages (`git commit -m "Add PowerShell command reference set"`)
5. Push to your fork
6. Open a Pull Request

Contributions are welcome! Whether it's new commands, UI improvements, or documentation fixes.

## Roadmap

Potential future enhancements:

- [ ] PowerShell command set
- [ ] Batch script templates
- [ ] Command history / recent searches
- [ ] Export/import custom commands (JSON)
- [ ] Dark/light mode toggle
- [ ] Keyboard shortcuts guide
- [ ] Tags for more granular filtering
- [ ] Mobile app wrapper
- [ ] Analytics (optional, privacy-respecting)

These are ideas, not promises. Open an issue if you'd like to see something specific.

## Troubleshooting

### Commands Not Appearing
- **Issue:** Search returns no results
- **Solution:** Check spelling, try partial matches, clear the search box, click "All" category filter

### Copy Button Not Working
- **Issue:** Clipboard copy fails silently
- **Solution:** Your browser may not support `navigator.clipboard` (old browsers). Try updating your browser.

### Custom Commands Disappeared
- **Issue:** Added commands but they're gone after closing the browser
- **Solution:** Check your browser's privacy settings. Some browsers clear localStorage in private/incognito mode. Use normal browsing.

### Slow Performance on Mobile
- **Issue:** App feels sluggish on phone
- **Solution:** This is unlikely—the app is optimized for 30 commands. If slow, it's your phone's browser. Try reloading or using a different browser.

## License

MIT License - Copyright (c) 2025 A.B. Mustikin

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**In Plain English:** You can use, modify, distribute, and even sell CMD Lookup. Just keep the copyright notice. No warranty—use at your own risk.

```
MIT License

Copyright (c) 2025 A.B. Mustikin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Support

Need help? Have questions?

- **Found a bug?** Open an issue
- **Have a suggestion?** Open an issue
- **Want to contribute?** See Contributing section above
- **Just want to say thanks?** Star the repo ⭐

## Credits

Built for IT professionals working night shifts, golden image deployments, and deskside support scenarios. Inspired by the need for zero-friction command reference during high-pressure situations.

---

**Happy commanding.** May your scripts run smooth and your DNS cache be ever flushed.