---
title: "Voxa Beauty"
summary: "Real-time skin smoothing, filters, makeup looks and face stickers for Flutter live-video apps, applied on the camera path."
category: product
year: 2026
role: "Founder & lead engineer"
stack: ["Flutter", "Dart", "Android", "MediaPipe", "OpenGL ES"]
status: live
order: 10
metric: "In 3 production apps"
color: "#EC4899"
cover: ../../assets/work/voxa-beauty/cover.jpg
links:
  package: "https://pub.dev/packages/voxa_beauty"
  docs: "https://voxartc.com/docs/beauty"
highlights:
  - "No Gradle edits, activity changes or ProGuard rules to integrate"
  - "Runs inside voxa_rtc_engine, or as a standalone camera for apps still on Agora"
  - "Cloud catalog of about 100 filters, 11 makeup looks and 800+ stickers"
  - "Key-based tiers, plus a ready-made VoxaBeautyPanel widget"
  - "Ships in Butterfly Live, DearLive and Zimo Live"
---

## The problem

Beauty filters are expected in any live-streaming app. The licensed SDKs that provide them are expensive, and integrating one usually means Gradle edits, activity changes and ProGuard rules in every app that uses it.

## What I built

Voxa Beauty is our own implementation, published on pub.dev as `voxa_beauty`. It sits on the camera path of [Voxa RTC](/work/voxa-rtc/), and apps still on Agora can run it as a standalone camera that feeds Agora a custom video track. Face tracking runs on the device with MediaPipe, and the effects run in a GPU shader pipeline.

Access is set by a key. Without one, the camera is untouched. A free key unlocks smoothing, whitening, warmth and saturation. A paid key adds colour filters, face shaping, eye and teeth retouch, makeup looks and a cloud catalog of roughly a hundred filters, eleven makeup looks and more than 800 stickers. A `VoxaBeautyPanel` widget gives an app the whole control UI in one call.

## Result

It ships in three production apps, Butterfly Live, DearLive and Zimo Live, and is at version 0.6 on pub.dev. I release it in step with Google Play's requirements, including the 16 KB page-size change. It supports Android today.
