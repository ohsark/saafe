import { type Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        saafe: {
          DEFAULT: '#003920',
          light: '#5fa58b'
        }
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
