/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 105px 45px rgba(45, 255, 195, 0.9)',
      },
    },
  },
  plugins: [],
}

