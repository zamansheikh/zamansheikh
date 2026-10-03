---
title: "Watchdog"
summary: "An agentless panel that checks every project on every server over SSH, restarts what fails, and emails when something goes down."
category: product
year: 2026
role: "Lead engineer"
stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "SSH", "Docker Compose"]
status: live
order: 13
metric: "Agentless, over SSH"
color: "#14B8A6"
cover: ../../assets/work/watchdog/cover.jpg
highlights:
  - "PM2, Docker, systemd, tmux and HTTP checks, plus custom commands"
  - "One-click restart, or auto-restart the moment a check fails"
  - "SSH credentials encrypted at rest with AES-256-GCM"
  - "Email alerts only on transitions: down, and recovered"
  - "A one-line script allow-lists the monitor so fail2ban does not lock it out"
---

## The problem

At Silifton we run software on many servers we do not own, across several hosting providers, with PM2, Docker and systemd side by side. I wanted one place to see all of it without installing an agent on every machine.

## What I built

Watchdog is a self-hosted panel that connects to each server over SSH on a schedule and runs the check that fits each project: a PM2 process list, a Docker container's health, a systemd unit's state, a tmux session, or an HTTP request with an expected status. A process that is up while its endpoint fails is flagged as degraded. Projects are grouped under their servers, and checks run with a concurrency cap.

When something is down, a one-click restart, or an optional auto-restart, runs the right command over the same connection. Alerts fire only when the state changes. It is built with Next.js, Prisma and SQLite, and deploys with Docker Compose in minutes.
