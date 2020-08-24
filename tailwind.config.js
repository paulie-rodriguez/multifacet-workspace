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
      borderRadius: {
        xl: "1rem",
      },
      strokeWidth: {
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
