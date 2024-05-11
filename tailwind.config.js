/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1840px",
      },
      padding: {
        DEFAULT: "30px",
      },
    },
    extend: {
      colors: {
        primary: {
          "orange-1": "#F85900",
          "orange-2": "#FFB74B",
          yellow: "#F8C100",
        },
        secondary: {
          grey: "#B9B9B9",
          "soft-grey": "#CACACA",
          "light-grey": "#EEEEEE",
          "light-grey-2": "#f4f5f8",
        },
      },
    },
  },
  plugins: [],
};
