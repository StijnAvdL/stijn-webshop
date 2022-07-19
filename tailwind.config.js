module.exports = {
    content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue'],
    theme: {
      colors: {
        'blue': {
          200: "#e8f7ff",
          600: "#0090e3",
          700: "#285dab"
        },
        'orange': {
          400: "#ffe4d1",
          500: "#F58220",
          600: '#ff6600',
        },
        'white': '#fff',
        "grey": {
          300: "#D9D9D9",
          400: "#d3d3d3",
          600: "#848484",
        },
        'dark-blue': {
          400: "#525BC3",
          600: "#1F2890"
        },
        'black': '#000'
      },
      extend: {
        fontFamily: {
          'sans': ['SF Pro Text', 'Helvetica', 'Arial', 'sans-serif']
        }
      },
    }
}