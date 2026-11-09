/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#FAF9FD",
        "surface-dim": "#ECEEF4",
        "surface-container": "#FFFFFF",
        "surface-container-low": "#F4F6FB",
        "surface-container-high": "#E8EDF5",
        "surface-container-highest": "#DFE4EE",
        "surface-container-lowest": "#FFFFFF",
        primary: "#0B57D0",
        "primary-container": "#D3E3FD",
        "on-primary-container": "#041E49",
        "google-blue": "#1A73E8",
        "google-green": "#188038",
        "google-yellow": "#B06000",
        "google-red": "#D93025",
        secondary: "#188038",
        tertiary: "#B06000",
        "on-surface": "#1F1F1F",
        "on-surface-variant": "#444746",
        outline: "#74777F",
        "outline-variant": "#C4C7D0"
      },
      fontFamily: {
        sans: ["Google Sans", "Google Sans Text", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Google Sans", "Google Sans Text", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["Google Sans", "Google Sans Text", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["Google Sans", "Google Sans Text", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      }
    }
  },
  plugins: [],
};
