/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--inter)'],
      },
      backgroundImage: {
        'intro-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currenColor',
        white: '#ffffff',
        'light-blue': '#8ecae6',
        'mid-blue': '#219ebc',
        'dark-blue': '#023047',
        green: '#85cb33',
        coffee: '#4c2e05',
        black: '#000',
      },
    },
  },
  plugins: [],
};
