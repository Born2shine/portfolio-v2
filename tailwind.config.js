/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'isPrimary': '#ed2c49',
        'isPrimary5': '#F1416C0D',
        'isSecondary': '#3F4254',
        'isSecondary5': '#fff1f5',
        'isGray': '#837f7f',
      },
    },
  },
  plugins: [],
}