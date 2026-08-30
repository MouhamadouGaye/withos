import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://avecsonko.org",
      // Ajoutez ici manuellement vos routes React dynamiques si vous en avez
      dynamicRoutes: ["/biographie", "/actualites", "/programme", "/soutenir"],
    }),
  ],
});
