/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './impressum.html', './datenschutz.html', './404.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['FF Sizmo Pro', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      colors: {
        ink: {
          950: '#000000',
          900: '#212529',
          800: '#2B2F33',
          700: '#43474D',
          600: '#5C6066',
          500: '#808080',
          400: '#8C8E91',
          300: '#B5B7BA',
          200: '#DEE2E6',
          100: '#F1F1F1',
          50:  '#F7F7F7'
        },
        accent: {
          DEFAULT: '#212529',
          600: '#000000',
          700: '#000000',
          300: '#B5B7BA',
          100: '#F1F1F1'
        },
        graphite: '#43474D'
      },
      maxWidth: { '8xl': '88rem' },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        graphite: '#43474D'
      },
      animation: {
        fadeUp: 'fadeUp .7s cubic-bezier(.16,1,.3,1) forwards',
        marquee: 'marquee 40s linear infinite'
      }
    }
  },
  plugins: []
};
