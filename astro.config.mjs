import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ex17.org",
  integrations: [tailwind(), partytown(), sitemap()],
});
