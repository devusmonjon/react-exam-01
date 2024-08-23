/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3BB77E",
        "light-primary": "#DEF9EC",
        dark: "#253D4E",
        light: "#FFFFFF",
        orange: "#F59758",
        blue: "#67BCEE",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
