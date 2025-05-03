/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
      extend: {
        colors:{
          lightSidebar: "#ddd",  // Light mode color
          darkSidebar: "#333",   // Dark mode color
        },
      },
    },
    variants: {
      scrollbar: ['dark'],
      extend: {
        textColor: ['dark'],  // Allow dark mode variant for text color
        backgroundColor: ['dark'],  // Allow dark mode variant for background color
      },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  }
  