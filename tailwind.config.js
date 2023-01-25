/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      primary: {
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
      },
      neutral: {
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    familys: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    sizes: {
      paragraphs: "16px",
    },
    weights: {
      light: 400,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
};
