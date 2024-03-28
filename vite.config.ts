import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  css:{
    postcss:{
      plugins:[
        tailwind(),
        autoprefixer()
      ]
    }
  }
});
