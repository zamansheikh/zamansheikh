import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages serves this repo's /docs folder at zamansheikh.com (CNAME in public/).
export default defineConfig({
  site: "https://zamansheikh.com",
  outDir: "./docs",
  integrations: [sitemap()],
  build: { format: "directory" },
});
