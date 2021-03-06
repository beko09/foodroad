/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'open-sans': ['open-sans', 'sans-serif'],
      'work_Sans': ['work_Sans', 'sans-serif'],
      'Tajawal-B': ['Tajawal-Bold', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('../assets/images/hero.webp')",
        'single-restaurant': "url('../assets/images/single-res.webp')",
      },
      colors: {
        'primary': '#519259',
        'secondary': '#f8fcf8'
      },
    },
  },
  plugins: [],
  //  you can create presets config files
  // presets: [
  //   require('./presets/tailwindcss.preset.js')
  // ]
}
