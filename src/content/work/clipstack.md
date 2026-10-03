---
title: "ClipStack"
summary: "A free, native macOS clipboard manager with unlimited history, full-text search, pinboards and a paste stack, in about 2 MB."
category: open-source
year: 2026
role: "Author & maintainer"
stack: ["Swift", "SwiftUI", "SQLite FTS5", "macOS"]
status: shipped
order: 32
metric: "Native Swift, about 2 MB"
color: "#5B4BDB"
cover: ../../assets/work/clipstack/cover.jpg
links:
  repo: "https://github.com/zamansheikh/ClipStack"
highlights:
  - "Captures text, links, images and files with the source app"
  - "⌘⇧V overlay that never steals focus, so paste lands where you were typing"
  - "Full-text search over the whole history with SQLite FTS5"
  - "Skips password-manager copies; nothing leaves the Mac"
---

ClipStack is a free, native clipboard manager for macOS. It is inspired by paid apps like Paste, but written from scratch in Swift and SwiftUI as a menu bar app of about 2 MB, with no subscription and no account.

Everything you copy is captured, whether text, links, images or files, along with the app it came from, and kept in a local SQLite database with full-text search. `⌘⇧V` opens a bottom-anchored overlay of preview cards that never takes focus, so a paste lands exactly where you were typing. You can pin clips into named pinboards, preview and edit text before pasting, and select several cards to paste them in sequence into a form.

Copies flagged as concealed by password managers are never recorded, any app can be excluded, and retention rules clear old history automatically. It is released on GitHub at version 0.3.
