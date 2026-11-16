/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#FFFFFF',
          text: '#000000',
        },
        dark: {
          bg: '#000000',
          text: '#FFFFFF',
        },
        secondary: {
          bg: '#F4F4F4',
        },
        border: '#D9D9D9',
        muted: '#777777',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
