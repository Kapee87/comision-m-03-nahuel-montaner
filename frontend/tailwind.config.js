/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'hueRotate': 'hueRotation 40s infinite'
      },
      keyframes: {
        hueRotation: {
          from: { 'filter': 'hue-rotate(90deg)' },
          to: { 'filter': 'hue-rotate(1800deg)' },
          from: { 'filter': 'hue-rotate(360deg)' },
          to: { 'filter': 'hue-rotate(180deg)' },
          from: { 'filter': 'hue-rotate(90deg)' },
          to: { 'filter': 'hue-rotate(0deg)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
}