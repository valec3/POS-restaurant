/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFCA40",
        "secondary": "#C8161D",
        "gray-dark": "#808080",
        "white-gray": "#F8F8F7",
      },
      fontFamily: {
        "GilroyBold": ["GilroyBold","sans-serif"],
      },
    },
  },
  plugins: [],
}