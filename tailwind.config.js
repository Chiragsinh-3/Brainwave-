/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector", // Enable dark mode with a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    backdropFilter: true,
  },
};
