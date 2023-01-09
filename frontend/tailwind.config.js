/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    // colors: {
    //   bgcolor: "#f6f5f4",
    //   forecolor: "#2b788b",
    // },
  },
  plugins: [],
};
