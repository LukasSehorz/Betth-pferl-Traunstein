import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "spa-html-fallback",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const accept = req.headers["accept"] || "";
          const url = req.url || "";
          // Redirect browser page loads (no file extension, not a Vite internal) to index.html
          if (
            req.method === "GET" &&
            accept.includes("text/html") &&
            !url.startsWith("/@") &&
            !url.startsWith("/node_modules") &&
            !url.match(/\.[a-zA-Z0-9]+(\?.*)?$/)
          ) {
            req.url = "/index.html";
          }
          next();
        });
      },
    },
  ],
});
