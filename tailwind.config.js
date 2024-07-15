/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgb(110,220,255)',
      },
      colors: {
        primary: "black",
        primary2: "#050505",
        primary3: "#0b0b0b",
        primary4: "#101010",
        grayContainer: "rgb(34, 40, 49)",
        cyberYellow: "rgba(252,238,10,255)",
        cyberYellowSecondary: "rgba(0,0,0,0.2)",
        cyberPurpleShine: "rgb(183,0,255)",
        cyberPurple: "rgb(154,0,214)",
        cyberPurpleSecondary: "rgb(121,0,168)",
        cyberPurpleStrong: "rgb(50, 1, 47)",
        cyberBlue: "#02d7f2",
        cyberBlueShine: "rgb(110,220,255)",
        cyberGreen: "#1afe49",
        secondary: "white",
        tertiary: "rgb(67,126,168)",
        container: "rgba(255,255,255,0.1)",
        buttonnav: "rgba(0,0,0,0.1)",
      },
      fontFamily: {
        Orbitron: ["Orbitron",'sans-serif'],
      },
    },
  },
  plugins: [],
}

