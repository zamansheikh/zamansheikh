---
title: "Pagewright"
summary: "An MCP server and Chrome extension that let AI agents see and drive the browser you already use, to fix frontends and scrape data."
category: open-source
year: 2026
role: "Author & maintainer"
stack: ["Node.js", "JavaScript", "MCP", "Chrome extension", "Chrome DevTools Protocol", "WebSocket"]
status: live
featured: true
order: 5
metric: "25 MCP tools"
color: "#7C3AED"
cover: ../../assets/work/pagewright/cover.jpg
gallery:
  - src: ../../assets/work/pagewright/screenshot-1-hero.jpg
  - src: ../../assets/work/pagewright/screenshot-2-layout.jpg
    caption: "Layout audit: the overflowing element, its CSS rule with file and line, and the fix"
  - src: ../../assets/work/pagewright/screenshot-3-scraping.jpg
    caption: "Scraping a paginated listing to CSV"
  - src: ../../assets/work/pagewright/screenshot-4-setup.jpg
    caption: "One-command setup"
links:
  repo: "https://github.com/zamansheikh/browser-mcp"
highlights:
  - "Works in your own browser, with your logins, instead of a fresh empty one"
  - "browser_audit_layout finds overflow, overlaps, clipped text, low contrast and small tap targets"
  - "browser_inspect returns the matching CSS rule with its file and line"
  - "Scrapes across pagination and infinite scroll to CSV or JSON"
  - "Local only: the hub listens on 127.0.0.1 and websites cannot connect to it"
---

## The problem

Most browser tools for AI agents start a fresh, empty browser. It has none of your sessions, so the agent cannot reach a dashboard or admin panel behind a login, and it usually reads pages through screenshots, which are expensive and imprecise.

## What I built

Pagewright is an MCP server plus a Chrome extension. Claude, Cursor or any MCP client starts the server, the extension connects to it, and the agent works in the browser you already have open, with your logins. It exposes 25 tools across navigation, reading the page, input, frontend debugging and scraping.

- **Fixing frontends.** The agent sets a phone, tablet or desktop viewport and runs a layout audit that reports horizontal overflow and the element causing it, clipped text, covered elements, broken images, low contrast and small tap targets. It then inspects the culprit to get the matching CSS rule with its file and line, tests a fix live by injecting CSS, confirms it with a second audit and edits the source.
- **Scraping.** Give it an item selector and field specs, and it follows Next buttons or infinite scroll and saves records to CSV or JSON. It can also read the JSON APIs a page calls.
- **Automating flows.** Pages are read as a compact snapshot of headings, text and controls, each control with a ref handle the agent clicks or types into. That is cheaper and more precise than screenshots.

## How it works

The first server process becomes a hub on `127.0.0.1`. Later ones relay through it, and one takes over if the hub exits, so several agents can share one browser. Clicks and keystrokes go through Chrome's DevTools protocol, so they work with React, Vue and Svelte, and if a modal covers the target the click fails and says so instead of landing on the wrong element.

The hub accepts extension connections only from browser-extension origins and rejects agent requests that carry an `Origin` header, so a website cannot drive your browser. There is no telemetry and no account.

## Status

Setup is one `npx` command that also registers the server with Claude Code. CI runs on every push, and the tool reference is generated from the code so it never drifts. A Chrome Web Store listing has been submitted for review.
