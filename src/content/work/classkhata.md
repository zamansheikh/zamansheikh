---
title: "ClassKhata"
summary: "A Bangla-first web app for Bangladesh's government primary schools: attendance, assessment, report cards and QR-verified certificates."
category: app
year: 2026
role: "Founder & lead engineer"
stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Docker", "nginx"]
status: live
featured: true
order: 3
metric: "Live at classkhata.com"
color: "#1B7A4A"
cover: ../../assets/work/classkhata/cover.jpg
links:
  live: "https://classkhata.com"
highlights:
  - "Implements the national Primary Level Assessment Guideline 2026"
  - "Report cards print to the guideline's layout, for one student or a whole section"
  - "Certificates carry the school seal, a memo number and a QR code anyone can verify"
  - "Assessment rules engine with no framework dependencies, covered by unit tests"
  - "Runs in any browser on a low-end phone, entirely in Bangla"
---

## The problem

Head teachers and teachers in Bangladesh's government primary schools keep attendance, assessment marks and report cards on paper. The 2026 national assessment guideline adds continuous and summative marks, quality marks and a fixed report-card layout, which is a lot of arithmetic and copying to do by hand for every student, every term.

## What I built

ClassKhata (ক্লাসখাতা) is Silifton's own product. It replaces the paper attendance register, the assessment register and the hand-written report card with one web app that runs on the phone a teacher already has. Everything is in Bangla, including the numerals, and nothing needs to be installed.

The assessment module follows the Primary Level Assessment Guideline 2026 exactly: continuous and summative marks per subject and term, automatic totals, averages and grades, and the A, B and C quality marks for participation, discipline and behaviour. A readiness check tells the class teacher what is still missing before a report card can be produced. Report cards print to the guideline's layout, for one student or a whole section at once.

Schools also issue transfer certificates, testimonials, appreciation letters and certificates with the school seal, a memo number and a QR code. Anyone can scan the code to confirm the school, the student and the issue date. Home-visit forms and the 0 to 14+ child survey sheet are built in too.

## How it works

It is a monorepo: an assessment rules engine with no framework dependencies, covered by unit tests, a NestJS and PostgreSQL API, and a Next.js 16 web app, deployed with Docker behind nginx. Bangla on report cards and certificates comes out correctly shaped through my own [bangla-pdf](/work/bangla-pdf/) work. The design targets national scale: 150,000 schools, 20 million students and billions of attendance records.

## Result

ClassKhata is live at [classkhata.com](https://classkhata.com). Schools apply online, get a 30-day trial with every feature, and pay by bKash.
