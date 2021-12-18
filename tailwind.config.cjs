module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    shadows: {
      brand: "#0f172a80"
    },
    fontFamily: {
      brand: ["Segoe UI", "Candara", "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", "Verdana", "Verdana Ref"," sans-serif"],
      arial: ['Frutiger', "Frutiger Linotype", 'Univers', 'Calibri', "Gill Sans", "Gill Sans MT", "Myriad Pro", 'Myriad', "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", 'Tahoma', 'Geneva', "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      animation: {
        'logoFadeIn':'fadeIn 8s linear',
        'logoLineIn':'lineIn 20s linear infinite',
        'logoLineInSlow':'lineIn 40s linear infinite',
        'tagFadeIn':'fadeIn 4s linear',
        'tagFadeSlideIn':'slideIn 2s ease, fadeIn 2s ease',
      },
      keyframes: {
        fadeIn: {
          '0%' : { opacity:0 },
          '100%': { opacity:1 },
        },
        lineIn: {
          '0%' : { 'stroke-dashoffset': 0 },
          '100%': { 'stroke-dashoffset':-708.246 },
        },
        slideIn: {
          '0%' : { 'transform': 'translatex(5rem)' },
          '100%': { 'transform': 'translatex(0)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}