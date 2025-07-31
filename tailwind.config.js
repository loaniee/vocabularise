/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'calgary': ['Calgary', 'serif'],
        'neue-montreal': ['Neue Montreal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

