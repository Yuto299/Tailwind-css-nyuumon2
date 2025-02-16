/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#050505',
        'selected-text': '#A3A3FF',
        theme: '#5c318c',
        secondary: '#9191A4',
        badge: '#3F3F51',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
