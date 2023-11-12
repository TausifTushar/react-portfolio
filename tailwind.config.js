/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 92px 35px rgba(166, 55, 214, 0.9)',
        'ccustom':  '0px 0px 29px 0px rgba(166, 55, 214, 0.9)',
      },
      

    },
  },
  plugins: [],
}

