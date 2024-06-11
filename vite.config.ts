import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 8080,
  strictPort: true,
 },
 server: {
    watch: {
      usePolling: true,
    },
  port: 8080,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:8080",
 },
});