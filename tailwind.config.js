/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      charcoal: "hsl(235, 18%, 26%)",
      "dark-slate": "hsl(234, 29%, 20%)",
      tomato: "hsl(4, 100%, 67%)"
    },
    extend: {
    }
  },
  plugins: []
};
