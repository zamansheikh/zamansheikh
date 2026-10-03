---
title: "SVGA Studio"
summary: "A browser tool that previews, compresses, watermarks and re-letters SVGA gift animations, with nothing uploaded to a server."
category: product
year: 2026
role: "Lead engineer"
stack: ["Next.js", "React", "TypeScript", "protobuf.js", "pako", "Canvas API"]
status: live
order: 12
metric: "100% client-side"
color: "#7C5CFF"
cover: ../../assets/work/svga-studio/cover.jpg
links:
  live: "https://svga-studio.vercel.app"
  repo: "https://github.com/zamansheikh/svga-studio"
highlights:
  - "Parses the SVGA 2.x protobuf in the browser at runtime"
  - "Replaces text painted into a badge, such as a level number, in its original lettering"
  - "Removes a bitmap and every sprite drawn from it, and merges duplicate bitmaps"
  - "Side-by-side original and result playback with quality, scale and format controls"
---

## The problem

SVGA is the animation format behind gift effects and badges in live-streaming apps. Designers hand over files that are too large for mobile, and changing a level number painted into a badge normally means going back to the source artwork.

## What I built

SVGA Studio decodes SVGA 2.x files in the browser with protobuf.js and pako. Drop in a whole set of files and it plays the original and the result side by side, with quality, scale and output-format controls (WebP, PNG or JPEG). To replace the text in a badge, it first compares sibling files, say level 41 to level 50, to find which bitmaps hold the text, then redraws it in the original lettering. It also strips exporter metadata such as the author's email and timestamps.

Decoding, re-encoding and gzip all happen on the device, so no file leaves the browser. It grew out of our live-streaming client work.
