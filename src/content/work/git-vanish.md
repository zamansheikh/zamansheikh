---
title: "git-vanish"
summary: "An interactive terminal app that erases a file from every commit, redacts a leaked secret across history, or reassigns a contributor."
category: open-source
year: 2026
role: "Author & maintainer"
stack: ["Node.js", "JavaScript", "simple-git", "git-filter-repo", "Commander"]
status: live
order: 30
metric: "v1.6 on npm"
color: "#16A34A"
cover: ../../assets/work/git-vanish/cover.jpg
gallery:
  - src: ../../assets/work/git-vanish/screen.jpg
    caption: "Picking a .env file to purge from every commit"
links:
  package: "https://www.npmjs.com/package/git-vanish"
  repo: "https://github.com/zamansheikh/git-vanish"
highlights:
  - "Rewrites every commit across all branches and tags, and leaves the rest of history as it was"
  - "Redaction mode replaces a secret inside files you need to keep"
  - "Dry run for every operation; confirmation dialogs default to Cancel"
  - "Secrets are masked in output and re-checked after the rewrite"
---

Committing a `.env` file or an API key happens to every team eventually. Deleting the file in a new commit is not enough, because the secret is still in every earlier commit, and the standard fix is a long filter-branch command that is easy to get wrong.

git-vanish wraps that work in a terminal app. Browse the tree with the mouse, arrow keys or vi keys, pick the files, see how many commits are affected, and confirm. It can purge files from the whole history, redact a specific string across all commits with git-filter-repo while keeping the files, or move a contributor's commits to another identity. Every destructive step has a dry run and a confirmation that defaults to Cancel, and only history is touched, never your working files.

It is on npm at version 1.6 and runs with one `npx git-vanish`.
