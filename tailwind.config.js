/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        // This white is mainly used to background colors, and for some text colors(headers), where the background and white
        main_white: "#ffffff",
        //   This color is used for bread text(<P>) and hover background colors
        neutral_white: "#efefef",
        //   This color is used when there is need for a different white. we dont use this color that much.
        alternativ_white: "#dcdcdc",
        // This color is used for headers and backgrounds
        main_black: "#292929",
        // This color is used for bread text (<P>) and hover background colors
        neutral_black: "#3d3d3d",
        // This color is used when there is need for a different black. we dont use this color that much.
        alternativ_black: "#454545",
      },
    },
  },
  plugins: [],
};
t;
