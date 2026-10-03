---
title: "Postora"
summary: "Silifton's social media scheduler: write a post once, then publish or schedule it to Facebook Pages, Instagram, LinkedIn and Bluesky."
category: product
year: 2026
role: "Founder & lead engineer"
stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"]
status: live
order: 11
metric: "Live at postora.silifton.com"
color: "#7B3FF2"
cover: ../../assets/work/postora/cover.png
links:
  live: "https://postora.silifton.com"
highlights:
  - "Publishes to Facebook Pages, Instagram, LinkedIn and Bluesky"
  - "One composer, with per-network edits and live character counts"
  - "Length, image and format rules checked per network before anything posts"
  - "Scheduled posts run on a BullMQ worker backed by Redis"
  - "Unit, worker integration and Playwright end-to-end tests"
---

## What it is

Postora is Silifton's own social scheduler, live at [postora.silifton.com](https://postora.silifton.com). You write a post once, adjust it per network with live character counts, and publish it now or schedule it in your own time zone. Before anything goes out, Postora checks each network's length, image and format rules. It connects Facebook Pages through Facebook Login, Instagram through Instagram Login, LinkedIn and Bluesky.

## How it works

It is a pnpm and Turborepo monorepo: a Next.js 16 web app, a NestJS API, and a BullMQ worker that runs scheduled publishes from a Redis queue, with PostgreSQL for data. Access tokens are encrypted at rest, and Instagram tokens renew automatically.

Unit tests cover the shared and API packages, worker integration tests run against a test database, and a Playwright run covers sign-up, compose and publish end to end. It runs on our own server with Docker Compose behind nginx and Cloudflare.
