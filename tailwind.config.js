/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "330px",
        sms: "386px",
        smm: "410px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        lgx: "1134px",
        xl: "1300px",
        xll: "1380px",
        xlx: "1400px",
        xxl: "1600px",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        greenC: "#448A5E",
        Dgreen: "#1b703a",
        dOverlay: "rgba(0, 0, 0, 0.2);",
      },
    },
  },
  plugins: [],
};
