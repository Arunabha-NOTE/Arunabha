/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "night"],
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
     require("daisyui")
  ],
}
