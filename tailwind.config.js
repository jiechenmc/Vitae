module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  lightMode: "class",
  daisyui: { themes: ["light", "dark"] },
  theme: {
    extend: {
      screens: { xs: "320px", sm: "768px", md: "1024px" },
    },
  },
  plugins: [require("daisyui")],
};
