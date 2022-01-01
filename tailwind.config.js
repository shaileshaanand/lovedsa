module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39C4FF",
        secondary: "#1F0318",
        secondarydark: "#13020E",
        paper: "#F9F9F9",
        tertiary: "#14213d",
        tertiarylight: "#BA1290",
      },
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        damp: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
