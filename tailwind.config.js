/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0505',
        surface: {
          DEFAULT: '#0d0808',
          container: 'rgba(20,8,8,0.6)',
          variant: '#1a0808'
        },
        primary: {
          DEFAULT: '#f0e6d2',
          container: '#c81e1e', // Strong Red
          on: '#0a0505'
        },
        secondary: {
          DEFAULT: '#2b0e0e',
          container: '#e0201f', // Crimson
        },
        tertiary: {
          DEFAULT: '#1a0808',
          container: '#9a1518', // Dark Blood
        },
        on: {
          surface: '#f0e6d2'
        }
      },
      fontFamily: {
        headline: ['"Archivo Narrow"', 'sans-serif'],
        eyebrow: ['"JetBrains Mono"', 'monospace'],
        body: ['Geist', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        'base': '4px',
        'gutter': '24px',
      }
    },
  },
  plugins: [],
}
