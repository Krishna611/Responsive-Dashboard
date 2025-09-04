/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark palette (Horizon-like)
        bg: '#0B1437',
        surface: '#0F1F3A',
        surface2: '#0C1A38',
        border: '#1C2B4F',
        textMain: '#E6ECFF',
        textSoft: '#98A6C4',

        // Accent colors
        primary: '#6F5BFF',
        primary2: '#8B5CFF',
        aqua: '#58D7FF',
        green: '#2CE59B',
      },
      boxShadow: {
        card: '0 10px 24px rgba(2,6,23,0.35)',
        soft: '0 6px 20px rgba(2,6,23,0.18)',
      },
      borderRadius: {
        '2xl': '18px', // corrected from `xl2`
      },
    },
  },
  plugins: [],
};
