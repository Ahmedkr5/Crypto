/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#0A0E12",
      dark: "#0B1115", 
      primary: "#E6E7E7",
      secondary: "#ABAABA",
      active: "#43D0A4",
      hover: "#3CBB93",
      light: "#283B47",
      superlight: "#68757E",
    },
    backgroundImage: {  
      'the-crypto': "url('/crypto.png')",
  }
  },
  plugins: [],
};
