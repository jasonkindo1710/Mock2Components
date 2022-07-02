module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans-serif"],
      Almarai: ["Almarai"],
      roboto: ["Roboto"],
      work: ["Work Sans"],
    },
    boxShadow: {
      md: "6px 5px 4px 0px rgba(0, 0, 0, 0.25)",
      image: "0.5px 0.5px 12px 0px rgba(0, 0, 0, 0.25)",
      empty: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },

    extend: {},
  },
  variants: {
    extend: {
      display: ['group-focus']
    },
  },
  plugins: [],
};
