/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
    plugins: [
      function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Hide scrollbar for Webkit-based browsers (Chrome, Safari, etc.) */
          '-webkit-overflow-scrolling': 'touch',
          '-webkit-scrollbar': 'none',
          /* Hide scrollbar for other browsers */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      })
    }
  ],
}
