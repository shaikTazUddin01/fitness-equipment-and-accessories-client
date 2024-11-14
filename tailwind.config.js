/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#081621',
        secondaryColor: "#282727",
        bgColor:"#F4F4F4",
        textSecondary:"#ef4a23",
        hoverSecondart:"#f97618"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
