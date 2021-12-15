module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      brand: ["Segoe UI", "Candara", "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", "Verdana", "Verdana Ref"," sans-serif"],
      arial: ['Frutiger', "Frutiger Linotype", 'Univers', 'Calibri', "Gill Sans", "Gill Sans MT", "Myriad Pro", 'Myriad', "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", 'Tahoma', 'Geneva', "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}