/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["cva", "cx","cn"],

};

export default config;