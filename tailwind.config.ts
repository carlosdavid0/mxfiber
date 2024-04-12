const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mx-blue': {
          '50': '#edf9ff',
          '100': '#d7efff',
          '200': '#b8e5ff',
          '300': '#88d7ff',
          '400': '#50bfff',
          '500': '#279fff',
          '600': '#1081ff',
          '700': '#0969ec',
          '800': '#105bcf',
          '900': '#134a95',
          '950': '#112e5a',
        },
        'mx-green': {
          '50': '#f9ffe4',
          '100': '#f1ffc5',
          '200': '#e1ff92',
          '300': '#caff54',
          '400': '#aafa07',
          '500': '#93e101',
          '600': '#71b400',
          '700': '#568902',
          '800': '#456b09',
          '900': '#3b5a0d',
          '950': '#1d3300',
        },

      },

    },
  },
  plugins: [],
}