/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Looks for classes in all JavaScript, JSX, TypeScript, and TSX files in the `src` folder
    "./public/index.html", // Includes the root HTML file
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme here
  },
  plugins: [], // Add Tailwind plugins here if needed
};
