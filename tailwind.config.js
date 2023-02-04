/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {
      colors: {
        bcc: {
          50: "#e5f3ff",
          100: "#c5d7ee",
          200: "#a3bcdd",
          300: "#80a1cc",
          400: "#5c86bc",
          500: "#436ca3",
          600: "#33547f",
          700: "#223c5c",
          800: "#11243a",
          900: "#000d1a",
        },
        ycc: {
          50: "#f2f2f2",
          100: "#d9d9d9",
          200: "#bfbfbf",
          300: "#a6a6a6",
          400: "#8c8c8c",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#262626",
          900: "#0d0d0d",
        },
        gcc: {
          50: "#c9ebd2",
          100: "#ffb3bb",
          150: "#fde1b2",
          200: "#fcf6b3",
          300: "#bbf0f1",
        },
      },
    },
  },
  plugins: [],
};
