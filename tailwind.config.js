/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '4': '4px',
      },
      backgroundImage: theme => ({
        'background-image': "url('images/goblin.jpg')",
      }),
      colors: {
        primary: '#1A1A1D',
        secondary: '#4E4E50',
        accent: '#6F2232',
        highlight: '#950740',
        link: '#C3073F',
      },
    },
  },
  plugins: [],
  variants: {}
}

