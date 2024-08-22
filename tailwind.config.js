/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        active: '#AD1AAF',  // Example primary color
        active2: '#312A3B',  // Example secondary color
      },
    },
  },
  plugins: [],
}
