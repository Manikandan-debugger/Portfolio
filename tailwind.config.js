/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        herobg1: "#04016C",
        herobg2: "#4A16BD",
        gradient5: "#739FE8",
        gradient6: "#4F18CA",
        gradient7: "#D9ECFF",
        gradient8: "#D9ECFF",
      },
      backgroundImage: {
        "custom-image": "url('./public/systemengineerpic.avif')",
      },
    },
  },
  plugins: [],
};
