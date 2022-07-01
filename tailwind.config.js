/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: [
      "plugin:tailwindcss/recommended"
    ],
  },
  plugins: ["tailwindcss"],
}
