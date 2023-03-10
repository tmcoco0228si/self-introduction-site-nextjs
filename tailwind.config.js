/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", //ダークモードを有効化(ON/OFFの切り替え)
  theme: {
    extend: {
      colors: {
        darkgrey: "#222831", //darkModeで使用したい色を拡張定義
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
