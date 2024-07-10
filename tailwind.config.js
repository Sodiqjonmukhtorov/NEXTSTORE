/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodycolor: "#ECF3FF",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1230px",
          xl: "1230px",
        },
      },
    },
  },
  plugins: [],
};
