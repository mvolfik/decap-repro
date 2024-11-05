import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      name: "MyLibrary",
      fileName: "mylibrary",
      formats: ["iife"],
    },
    outDir: "dist",
  },
};

export default config;
