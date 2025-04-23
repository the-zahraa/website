module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'zahraa-black': '#000000',
        'zahraa-deep-purple': '#4B0082',    // For the button
        'zahraa-light-purple': '#8A2BE2',   // Lighter purple for hover/click
        'zahraa-white': '#FFFFFF',
        'zahraa-light-pink': '#F9A8D4',     // Kept for body gradient
        'zahraa-sky-blue': '#87CEEB',       // Kept for body gradient
      },
      fontSize: {
        '2.5xl': '1.75rem', // 28px
        '3.5xl': '2.125rem', // 34px
      },
    },
  },
  plugins: [],
};