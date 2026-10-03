---
title: "Bangla PDF"
summary: "Two libraries, bangla_pdf for Dart and bangla-pdf for TypeScript, that draw correctly shaped Bangla in PDFs and keep it copyable."
category: open-source
year: 2025
role: "Author & maintainer"
stack: ["Dart", "Flutter", "TypeScript", "OpenType", "HarfBuzz", "pdf-lib"]
status: live
featured: true
order: 2
metric: "On pub.dev and npm"
color: "#E23D28"
cover: ../../assets/work/bangla-pdf/cover.jpg
gallery:
  - src: ../../assets/work/bangla-pdf/before-after.png
    caption: "The same Bangla text from package:pdf (before) and bangla_pdf (after)"
  - src: ../../assets/work/bangla-pdf/sample-dashboard.png
    caption: "A half-yearly report with Bangla chart labels and legend"
  - src: ../../assets/work/bangla-pdf/sample-invoice.png
    caption: "An invoice with Bengali digits and the taka sign"
  - src: ../../assets/work/bangla-pdf/sample-notice.png
    caption: "A government-style notice"
  - src: ../../assets/work/bangla-pdf/sample-report.png
    caption: "Bangla and English mixed in one pass"
links:
  package: "https://pub.dev/packages/bangla_pdf"
  repo: "https://github.com/zamansheikh/bangla_pdf"
highlights:
  - "Pure-Dart shaper matches HarfBuzz glyph for glyph: 234 of 234 cases in each of five fonts"
  - "Copied text comes back as the original Unicode, through /ActualText spans"
  - "Reads Unicode, legacy Bijoy and scrambled Word-exported PDFs back out"
  - "For package:pdf users, the migration is one import"
  - "The npm port shapes with HarfBuzz in WebAssembly, and both extract byte-identical text"
---

## The problem

Bengali is hard to typeset. Vowel signs such as ি and ে are drawn before the consonant they follow, conjuncts fuse into glyphs that no single codepoint maps to, and the reph sits over the next letter. Most PDF libraries get this wrong: conjuncts fall apart, and the text that does render copies back out scrambled because the glyphs were reordered. That affects every invoice, notice and report card generated in Bangladesh.

## What I built

[bangla_pdf](https://pub.dev/packages/bangla_pdf) is a Dart package for Flutter and server-side Dart. For anyone already using `package:pdf`, the migration is one import: `package:bangla_pdf/widgets.dart` swaps in Bangla-aware versions of every widget that draws text, from `Text` and `TableHelper` to chart legends and form fields, with the same names and all 156 parameters matching. It shapes with the font's own GSUB and GPOS tables in pure Dart, with no FFI, so it also works on Flutter web. Only the glyphs drawn are embedded, so a one-page notice is about 13 KB.

[bangla-pdf](https://www.npmjs.com/package/bangla-pdf) brings the same output to Node and the browser on top of pdf-lib, shipped as ESM and CommonJS. Without Dart's constraints, it shapes with HarfBuzz compiled to WebAssembly instead of porting my shaper. Its source is at [zamansheikh/bangla-pdf](https://github.com/zamansheikh/bangla-pdf).

## Reading it back

Both libraries also extract Bangla from PDFs: Unicode documents, the legacy Bijoy encoding behind most government and newspaper PDFs, protected files with an empty user password, and even files with no text mapping at all, where the embedded font's GSUB table is read backwards. The hardest real test was the NCTB primary assessment guideline, a 56-page Word export whose text layer is scrambled. Poppler reads 24.8% of its Bangla words malformed. bangla_pdf 1.9.2 reads none of its 13,992 words wrong, and the Dart and npm extractors produce byte-identical text from it.

## How I test it

Shaping is compared glyph by glyph against HarfBuzz over a 253-case corpus, and all 234 comparable cases match in each of the five fonts tested. Rendered pages are overlaid on HarfBuzz's output at the pixel level, and 249 of 251 cases survive a round trip through `pdftotext` unchanged. More than a hundred tests run on every commit. ClassKhata uses the library for its report cards and certificates.
