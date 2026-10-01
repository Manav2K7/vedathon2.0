/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080606',
        surface: {
          DEFAULT: '#120808',
          container: 'rgba(18,8,8,0.6)',
          variant: '#1a0a0a'
        },
        primary: {
          DEFAULT: '#E31B16',
          container: '#9a100e',
          on: '#F2E9DC'
        },
        secondary: {
          DEFAULT: '#FF5A1F',
          container: '#b3390c',
        },
        tertiary: {
          DEFAULT: '#1a0808',
          container: '#4a0d0d',
        },
        on: {
          surface: '#F2E9DC',
          muted: '#9B8F89'
        }
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', '"Roboto Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      spacing: {
        'base': '4px',
        'gutter': '24px',
      }
    },
  },
  plugins: [],
}
