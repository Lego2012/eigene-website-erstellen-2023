// Astro-Config-Datei
import { defineConfig } from "astro/config";

// Tailwind CSS importieren
import tailwindcss from "@tailwindcss/vite";

// Astro-Plugins importieren
// MDX-Plugin für Markdown + JSX
import mdx from "@astrojs/mdx";

// Import Astro Icon
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [tailwindcss()],
   },
   // Markdown-Plugin konfigurieren
   markdown: {
      shikiConfig: {
         theme: "one-dark-pro",
         wrap: true,
      },
   },
   // Astro-Plugins registrieren
   integrations: [
      mdx(), icon(),
   ],
});
