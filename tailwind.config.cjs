/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs: "200px",
      xs: "480px",
      // sm: {'min': '640px', 'max': '767px'},
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      'xs1' : {'min': '200px' , 'max' : '639px'},
      'sm1': {'min': '640px', 'max': '767px'},
      'md1': {'min': '768px', 'max': '1023px'},
      'lg1': {'min': '1024px', 'max': '1279px'},
      'xl1': {'min': '1280px', 'max': '1535px'},
      '2xl1': {'min': '1536px'},
    },
  },
  plugins: [],
};
