/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "night", "sunset", "dracula", "forest", "dim" ],
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
