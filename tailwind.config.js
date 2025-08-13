module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // look inside all your React files
  ],
  theme: {
    extend: {
      keyframes:{
        loop: {
          "0%": { transform: "translateX(0%)" },  // Start off-screen right
          "100%": { transform: "translateX(-50%)" } // Exit off-screen left
        },
      },
      animation: {
        loop: "loop 8s linear infinite",
      },
    },
  },
  plugins: [],
};
