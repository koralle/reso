import { cloudflare } from "@cloudflare/vite-plugin";
import { COLOR_MODE_STORAGE_KEY, getStorageScript } from "@reso/ui";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, type Plugin } from "vite";

function injectColorModeScript(): Plugin {
  return {
    name: "inject-color-mode-script",
    transformIndexHtml(html: string) {
      const content = getStorageScript(
        "colorMode",
        COLOR_MODE_STORAGE_KEY,
      )({ defaultValue: "light" });

      return html.replace("<body>", `<body><script>${content}</script>`);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    injectColorModeScript(),
    cloudflare(),
  ],
});
