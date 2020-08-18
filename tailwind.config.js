const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        hard: ".5rem .5rem #31302c",
      },
      borderRadius:{
        xl: "1rem",
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
