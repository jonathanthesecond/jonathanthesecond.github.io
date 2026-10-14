/* Tailwind-Konfiguration für den CDN-Build – wird von allen Seiten direkt nach
   https://cdn.tailwindcss.com eingebunden. Inhaltlich identisch mit tailwind.config.js
   (die Datei ist für einen späteren CLI-Build gedacht) – Änderungen bitte in beiden pflegen. */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['FF Sizmo Pro', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      /* Farbwelt der bisherigen agile-elevation.de: Schwarz, Weiß und Grautöne */
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
      maxWidth: { '8xl': '88rem' }
    }
  }
};
