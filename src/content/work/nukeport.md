---
title: "nukeport"
summary: "A terminal dashboard that maps every listening port to its process and project folder, and kills a stuck dev server in one key."
category: open-source
year: 2026
role: "Author & maintainer"
stack: ["Node.js", "blessed", "blessed-contrib", "systeminformation"]
status: shipped
order: 33
metric: "On npm"
color: "#DC2626"
links:
  package: "https://www.npmjs.com/package/nukeport"
  repo: "https://github.com/zamansheikh/nukeport"
highlights:
  - "Maps each port to its process and the project directory it runs from"
  - "Graceful or forced kill of the whole process tree with one key"
  - "Live CPU, memory, network, load, uptime and battery panel"
  - "Works on Windows, macOS and Linux"
---

"Port 3000 is already in use" usually means hunting through `lsof` or Task Manager for a dev server you forgot about. nukeport shows every listening port in one terminal dashboard, with the owning process and the project it belongs to, found by reading the process's working directory and walking up to the nearest `package.json`.

Select a row and press Enter to stop it gracefully, or Shift+K to force it, with `taskkill /T` on Windows and SIGTERM or SIGKILL elsewhere, so child processes stop too. A side panel charts CPU, memory, network, load, uptime and battery, refreshing every 1.5 seconds. Install it from npm, or run it once with `npx nukeport`.
