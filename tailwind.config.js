/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: 'magenta',
        navbar: '#799343',
        searchCard: '#D6CCBF',
        tags: '#A5A2F6',
        
        btnAsc: '#77AE6F',
        btnDesc: '#8D97A5',
        hits: '#D08F4E',
        userLoggedIn: '',
      },
    },
  },
  plugins: [],
};
