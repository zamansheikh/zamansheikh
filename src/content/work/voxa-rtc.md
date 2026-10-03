---
title: "Voxa RTC"
summary: "An Agora-compatible real-time video engine on self-hosted LiveKit, so a Flutter app can leave per-minute pricing without a rewrite."
category: product
year: 2026
role: "Founder & lead engineer"
stack: ["Flutter", "Dart", "Go", "LiveKit", "WebRTC", "Next.js", "Redis", "Docker"]
status: live
featured: true
order: 1
metric: "Live at voxartc.com"
color: "#5B3DF5"
cover: ../../assets/work/voxa-rtc/cover.jpg
links:
  live: "https://voxartc.com"
  package: "https://pub.dev/packages/voxa_rtc_engine"
  docs: "https://voxartc.com/docs"
highlights:
  - "voxa_rtc_engine keeps the classes, signatures, error codes and callback order of agora_rtc_engine 6.x"
  - "A transcript-parity suite compares Agora's behaviour with ours call by call, and CI blocks on it"
  - "A Go gateway accepts Agora-style tokens and mints LiveKit ones"
  - "Token builders in Node, Go, Python, PHP and Java"
  - "Zimo Live runs on it in production"
---

## The problem

Every live-streaming app we had built at Silifton paid Agora by the minute. The media bill grows with every host who goes live, and the client has no say in where the servers run or what they cost. Moving to a self-hosted media server normally means rewriting every call site in the app.

## What I built

Voxa RTC is a Flutter package, `voxa_rtc_engine`, that reproduces the public API of the Agora Flutter SDK: the same classes, method signatures, error codes and callback order as `agora_rtc_engine` 6.x. Underneath, media goes through LiveKit servers we run ourselves. For an app already written against Agora, the switch is an import change. The SDK supports Android, iOS and macOS.

Around the SDK sits everything needed to run it as a service:

- a Go compatibility gateway that accepts Agora-style tokens and mints LiveKit ones,
- token-builder libraries in Node, Go, Python, PHP and Java, so existing backends keep their token code,
- TURN and SFU infrastructure on Docker Compose and nginx, with Redis Sentinel for failover,
- a Next.js console with documentation and billing.

## How I keep the compatibility claim honest

"Agora-compatible" is easy to say and hard to prove. A transcript-parity suite records what Agora does for a sequence of calls and compares it with what Voxa does, call by call. CI runs the analysers, the tests and that parity gate on every change. The monorepo has passed 370 commits.

## Result

Voxa RTC is live at [voxartc.com](https://voxartc.com) and published on pub.dev. Zimo Live moved entirely off Agora onto it and runs on it in production, and the studio's other streaming apps are queued to follow. [Voxa Beauty](/work/voxa-beauty/), our beauty-filter package, plugs into its camera path.
