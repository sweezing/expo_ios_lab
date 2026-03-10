/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        qs: ['Quicksand-Regular', 'sans-serif'],
        'qs-bold': ['Quicksand-Bold', 'sans-serif'],
        'qs-light': ['Quicksand-Light', 'sans-serif'],
        'qs-medium': ['Quicksand-Medium', 'sans-serif'],
        'qs-semibold': ['Quicksand-SemiBold', 'sans-serif'],
      },
      colors: {
        primary: '#FF6347',
        secondary: '#FFA07A',
        tertiary: '#20B2AA',
        gray: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        dark: {
          100: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
}

