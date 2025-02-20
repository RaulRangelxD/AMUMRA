import type { Config } from 'tailwindcss'

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        default: {
          DEFAULT: '#1D4ED8',
          light: '#F5F5F5',
          dark: '#0A0A0A',
        },
        primary: {
          DEFAULT: '#ff00cc',
          light: '#ff00ff',
          dark: '#ff00aa',
        },
        secondary: {
          DEFAULT: '#333399',
          light: '#3333ff',
          dark: '#3333aa',
        },
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0%, 0%) rotate(25deg)' },
          '25%': { transform: 'translate(5%, 15%) rotate(25deg)' },
          '50%': { transform: 'translate(10%, 5%) rotate(25deg)' },
          '75%': { transform: 'translate(0%, 15%) rotate(25deg)' },
          '100%': { transform: 'translate(0%, 0%) rotate(25deg)' },
        },
        fadeInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floating: 'floating 4s infinite ease-in-out',
        fadeInFromTop: 'fadeInFromTop 0.5s forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
