/** @type {import('tailwindcss').Config} */
module.exports = {
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
          '50': '#e4f6ff',
          '100': '#cfecff',
          '200': '#a8dbff',
          '300': '#74c0ff',
          '400': '#3e92ff',
          '500': '#1364ff',
          '600': '#0051ff',
          '700': '#0051ff',
          '800': '#0049e4',
          '900': '#0032b0',
          '950': '#00207d',
      },
      'mx-green': {
        'under':'#aafa07',
        '50': '#edfff4',
        '100': '#d5ffe7',
        '200': '#aeffcf',
        '300': '#70ffab',
        '400': '#2bfd80',
        '500': '#00d958',
        '600': '#00c049',
        '700': '#00963d',
        '800': '#067534',
        '900': '#07602d',
        '950': '#003717',
    },
    
      },
      
    },
  },
  plugins: [],
}