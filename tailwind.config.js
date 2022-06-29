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
        'web-screen': "url('../assets/images/hero.webp')",
        'mobile-screen': "url('../img/screen-mobile.png')",
      },
      colors: {
        'primary': '#519259'
      },
    },
  },
  plugins: [],
  //  you can create presets config files
  // presets: [
  //   require('./presets/tailwindcss.preset.js')
  // ]
}
