/* Tailwind-Konfiguration für den CDN-Build – wird von allen Seiten direkt nach
   https://cdn.tailwindcss.com eingebunden. Inhaltlich identisch mit tailwind.config.js
   (die Datei ist für einen späteren CLI-Build gedacht) – Änderungen bitte in beiden pflegen. */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['FF Sizmo Pro', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      colors: {
        ink: {
          950: '#060F19',
          900: '#0B1B2B',
          800: '#122B41',
          700: '#1B3A55',
          600: '#2A4E6E',
          500: '#456B8C',
          400: '#7C97B0',
          300: '#B3C4D3',
          200: '#DCE4EC',
          100: '#EEF2F6',
          50:  '#F7F9FB'
        },
        accent: {
          DEFAULT: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
          300: '#5eead4',
          100: '#ccfbf1'
        }
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
        }
      },
      animation: {
        fadeUp: 'fadeUp .7s cubic-bezier(.16,1,.3,1) forwards',
        marquee: 'marquee 40s linear infinite'
      }
    }
  }
};
