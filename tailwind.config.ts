/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E91E63",
        secondary: "#FFC107",
        success: "#4CAF50",
        warning: "#FF9800",
        danger: "#F44336",
        info: "#00BCD4",
      },
    },
  },
  plugins: [],
};
