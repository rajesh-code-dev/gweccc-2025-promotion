/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      open: "'DM Sans', sans-serif",
      dm: "'DM Sans', sans-serif",
    },
    extend: {
      colors: {
        "green-clr": "#FFDEC0",
      },
    },
  },
  plugins: [],
};
