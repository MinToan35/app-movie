/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        overlay: "rgba(0,0,0,0.6)",
        linear: "linear-gradient(to top, #0f0f0f, rgba($black, 0))",
      },
      boxShadow: {
        xl: "0px 0px 7px 8px #ff00004d", //
        "2xl": "0px 0px 7px 15px #ff00004d",
        img: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(90px, 1fr))",
      },
    },
  },
  plugins: [],
};
