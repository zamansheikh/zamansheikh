import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One markdown file per project in src/content/work/<slug>.md.
// The markdown body is the case study shown on /work/<slug>/.
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one sentence, shown on cards
      category: z.enum(["product", "client", "open-source", "app", "experiment"]),
      year: z.number(),
      role: z.string(),
      stack: z.array(z.string()),
      status: z.enum(["live", "shipped", "in-progress", "archived"]),
      featured: z.boolean().default(false),
      order: z.number().default(100), // lower = earlier in the grid
      metric: z.string().optional(), // e.g. "1K+ installs", "On pub.dev"
      color: z.string().default("#0b7a55"), // used for cards without a cover
      cover: image().optional(),
      gallery: z.array(z.object({ src: image(), caption: z.string().optional() })).default([]),
      links: z
        .object({
          live: z.string().url().optional(),
          store: z.string().url().optional(),
          repo: z.string().url().optional(),
          package: z.string().url().optional(),
          docs: z.string().url().optional(),
        })
        .default({}),
      highlights: z.array(z.string()).default([]), // short bullet list on the case study
    }),
});

export const collections = { work };
