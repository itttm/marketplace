/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1AB6F9",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to bottom, #5CC9F8, #1AB6F9)",
      },
    },
  },
  plugins: [],
};
