module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/bg.svg')",
      },
      backgroundSize: {
        "home-xl": "50%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ 
    require('@tailwindcss/forms')
  ],
}
