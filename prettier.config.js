/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cva", "cx","cn"],

};

export default config;