---
title: "Number Trivia"
summary: "A small Flutter app built test-first to practise Clean Architecture, BLoC and a REST data layer with an offline cache."
category: experiment
year: 2024
role: "Solo developer"
stack: ["Flutter", "BLoC", "Clean Architecture", "TDD", "Dio", "Equatable"]
status: archived
order: 80
color: "#2E1A8C"
cover: ../../assets/work/number-trivia/cover.png
links:
  repo: "https://github.com/zamansheikh/number_trivia_clean_arch_tdd_bloc_restAPI"
highlights:
  - "Domain, data and presentation layers kept separate"
  - "Written test-first"
  - "Falls back to cached trivia when offline"
---

Number Trivia shows a fact about any number you enter, or about a random one, fetched from a REST API. The app itself is deliberately small. The point was the structure: domain, data and presentation layers in Clean Architecture, BLoC for state, Dio for the network, a local cache so the last result still shows offline, and tests written before the code.

I built it in August 2024 and published two releases on GitHub.
