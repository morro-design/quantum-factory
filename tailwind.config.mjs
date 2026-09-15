import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lima: '#CCFF00',
          'lima-hover': '#b8e600',
          navy: '#0E0F17',
          midnight: '#08090D',
          coral: '#FF6B7A',
          crimson: '#9E3B42',
          slate: '#1E202B',
          muted: '#8A8F9E',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [forms, containerQueries],
};
