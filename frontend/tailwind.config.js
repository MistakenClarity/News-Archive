/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        "onyx": "#484F52",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',

}

