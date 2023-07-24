/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: ['class', 'data-theme="dark"'],
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
        coffee: '#180e02',
        black: '#000',
        muted: 'hsl(35, 87%, 28%)',
      },
    },
  },
  plugins: [],
};
