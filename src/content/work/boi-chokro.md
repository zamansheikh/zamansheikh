---
title: "Boichokro"
summary: "A Flutter app for swapping and donating books with readers nearby, with map search, in-app chat and safer meet-ups."
category: app
year: 2026
role: "Solo developer"
stack: ["Flutter", "BLoC", "Firebase", "Cloud Firestore", "flutter_map", "ML Kit"]
status: live
order: 43
metric: "On Google Play"
color: "#2E7D32"
gallery:
  - src: ../../assets/work/boi-chokro/screen-1.jpg
  - src: ../../assets/work/boi-chokro/screen-2.jpg
  - src: ../../assets/work/boi-chokro/screen-3.jpg
  - src: ../../assets/work/boi-chokro/screen-4.jpg
  - src: ../../assets/work/boi-chokro/screen-5.jpg
  - src: ../../assets/work/boi-chokro/screen-6.jpg
links:
  store: "https://play.google.com/store/apps/details?id=com.programmernexus.boichokro"
  live: "https://zamansheikh.github.io/boichokro/"
  repo: "https://github.com/zamansheikh/boichokro"
highlights:
  - "Snap a book's cover and on-device text recognition fills in the title and author"
  - "Map and list search within a chosen radius, using geohashes"
  - "Donate a book, or swap it for one of yours"
  - "In-app chat, ratings and a verified badge for safer hand-offs"
---

Boichokro is a free book exchange for readers in the same area. Instead of letting finished books gather dust, you list them, and someone nearby can ask for one as a donation or offer one of their own books in exchange.

Adding a book takes three steps: snap the cover and Google ML Kit text recognition fills in the title and author, pick the condition, and choose donate or exchange. Seekers browse on a map or a list filtered by distance, request a book, and agree the hand-off in the in-app chat. Ratings and a verified badge build trust between strangers.

It is a Flutter app with BLoC, get_it and GoRouter, using Firebase Auth and Cloud Firestore, geohashes for location queries and Cloudinary for cover photos. It is published on Google Play.
