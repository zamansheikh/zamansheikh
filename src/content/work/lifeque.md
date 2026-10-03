---
title: "LifeQue"
summary: "A Flutter companion app that puts prayer times, Qibla, prayer alarms, a Pomodoro timer, tasks and reminders in one place."
category: app
year: 2025
role: "Lead developer"
stack: ["Flutter", "BLoC", "GoRouter", "get_it", "SQLite", "adhan", "GitHub Actions"]
status: live
featured: true
order: 6
metric: "v2.2 · 340+ commits"
color: "#1F8A70"
cover: ../../assets/work/lifeque/cover.jpg
gallery:
  - src: ../../assets/work/lifeque/screen-1.jpg
  - src: ../../assets/work/lifeque/screen-2.jpg
  - src: ../../assets/work/lifeque/screen-3.jpg
  - src: ../../assets/work/lifeque/screen-4.jpg
  - src: ../../assets/work/lifeque/screen-5.jpg
links:
  store: "https://play.google.com/store/apps/details?id=com.programmernexus.lifeque"
  repo: "https://github.com/zamansheikh/lifeque"
highlights:
  - "Prayer times from GPS, with a choice of calculation methods"
  - "Prayer alarms at a fixed time or 5 to 20 minutes before a prayer window closes"
  - "Pomodoro study timer with cycle tracking and audio cues"
  - "Clean Architecture with BLoC, GoRouter and injectable dependency injection"
  - "In-app update prompts with release notes"
---

## The problem

Prayer times, a Qibla compass, a focus timer, a task list and personal reminders usually live in three or four separate apps, each with its own settings and its own notifications.

## What I built

LifeQue brings the daily Islamic routine and everyday productivity tools into one Flutter app.

- **Prayer.** Prayer times are computed from GPS with the `adhan` library and a choice of calculation methods, with manual location as a fallback. The Qibla compass rotates live. Prayer alarms fire either at a fixed time or a set number of minutes, 5 to 20, before a prayer window closes, and the app explains the Makruh times when prayer is discouraged.
- **Focus.** A Pomodoro timer with customisable focus and break lengths, cycle tracking, pause and resume, and audio cues at each phase change.
- **Life admin.** A timeline-based task manager with progress tracking, expense tracking, and reminders for birthdays and medication.

Notifications are system-level and persistent where it matters, and the app walks the user through each permission it needs.

## How it is built

The codebase follows Clean Architecture with BLoC for state, GoRouter for navigation and get_it with injectable for dependency injection. Tasks live in SQLite and settings in shared preferences. A test suite and a GitHub Actions build run on the project, and releases ship with in-app update prompts and release notes.

## Result

LifeQue is on Google Play and is the most actively developed app in my portfolio: version 2.2 and more than 340 commits.
