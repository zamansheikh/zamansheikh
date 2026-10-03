---
title: "Zimo Live"
summary: "A live-streaming and voice-room app with gifting, the first to move fully off Agora onto Voxa RTC, with its own games platform."
category: client
year: 2024
role: "Lead engineer at Silifton"
stack: ["Flutter", "Voxa RTC", "NestJS", "MongoDB", "Redis", "Socket.IO", "Unity WebGL"]
status: live
featured: true
order: 4
metric: "1K+ Play Store installs"
color: "#E11D74"
cover: ../../assets/work/zimo-live/cover.jpg
gallery:
  - src: ../../assets/work/zimo-live/screen-1.jpg
  - src: ../../assets/work/zimo-live/screen-2.jpg
  - src: ../../assets/work/zimo-live/screen-3.jpg
  - src: ../../assets/work/zimo-live/screen-4.jpg
  - src: ../../assets/work/zimo-live/screen-5.jpg
  - src: ../../assets/work/zimo-live/screen-6.jpg
links:
  live: "https://zimolive.com"
  store: "https://play.google.com/store/apps/details?id=com.programmernexus.zimolive"
highlights:
  - "First app to run entirely on Voxa RTC instead of Agora"
  - "Voxa Beauty filters on the camera path"
  - "Games backend owns the round clock, RTP-bounded winner selection and payouts"
  - "A lighter sibling app, Zimo Lite, also on Google Play"
  - "Mobile app past 290 commits, with about 400 more across backends and admin panels"
---

## The product

Zimo Live is a social live-streaming app. Hosts go live on video or open voice rooms, and viewers send gifts bought with coins. It is the original instance of the streaming platform we run at Silifton for several clients, and the one that has gone furthest. A lighter sibling, Zimo Lite, ships as a separate app.

## Moving off Agora

Like every streaming app we had built, Zimo Live paid Agora by the minute for media. It was the first app to move entirely onto [Voxa RTC](/work/voxa-rtc/), the Agora-compatible engine I built on self-hosted LiveKit. Because Voxa RTC keeps Agora's API, a full migration of a production app was practical rather than a rewrite. Beauty filters come from [Voxa Beauty](/work/voxa-beauty/) on the same camera path.

## A games platform beside the app

Next to the main app sits a separate games platform. The games backend owns the round clock, RTP-bounded winner selection and payouts for Unity WebGL wheel games built on a shared core. The games are served as static files and load into the app in a WebView. The backend is designed to sit in front of any host backend and ships with integration documentation for third parties. Vendor Cocos titles plug in the same way and stay out of the core repositories.

## Stack and scale

The app is Flutter. The API is NestJS on MongoDB and Redis, with Socket.IO for real-time events, and separate admin panels run operations for the app and the games. The mobile app alone is past 290 commits, with roughly 400 more across the backends and admin panels. Zimo Live is on Google Play with more than a thousand installs and is served from zimolive.com.
