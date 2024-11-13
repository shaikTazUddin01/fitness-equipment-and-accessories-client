/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#081621',
        secondaryColor: "#282727",
        bgColor:"#F4F4F4",
        textSecondary:"#e57f2c",
        hoverSecondart:"#f97618"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
