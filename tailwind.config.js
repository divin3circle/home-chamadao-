/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titles: ["Montserrat Alternates", "serif"],
        body: ["Popins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
