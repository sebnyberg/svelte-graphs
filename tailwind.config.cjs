/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: '#254451',
        }
      }
    },
    fontFamily: {
      'sans': ['"Roboto Condensed"'],
      // 'serif': ['"Comic Sans"'],
      // 'display': ['"Comic Sans"'],
      // 'body': ['"Open Sans"'],
    }
  },
  plugins: [],
}
