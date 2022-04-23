import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

require("dotenv").config();

export default defineConfig({
  plugins: [react()],
});
