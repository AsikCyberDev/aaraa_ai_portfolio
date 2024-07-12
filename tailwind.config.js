module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#4F46E5',
          'secondary': '#7C3AED',
          'accent': '#10B981',
          'background': '#F3F4F6',
        },
        fontFamily: {
          'sans': ['Poppins', 'sans-serif'],
          'display': ['Playfair Display', 'serif'],
        },
        boxShadow: {
          'neon': '0 0 5px theme("colors.accent"), 0 0 20px theme("colors.accent")',
        },
      },
    },
    plugins: [],
  }