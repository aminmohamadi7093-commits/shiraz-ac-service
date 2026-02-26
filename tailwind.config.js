/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#06B6D4',
        accent: '#10B981',
        danger: '#EF4444',
        dark: '#1F2937',
      },
      direction: ['rtl', 'ltr'],
    },
  },
  plugins: [],
};