module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: () => ({
         'footer-texture': "url('/src/assets/images/about.png')",
        })
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover', 'focus'],
    gridTemplateColumns: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
