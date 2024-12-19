module.exports = {
  theme: {
    extend: {
      animation: {
        jump: 'jump 1s ease-in-out infinite',
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)', color: 'black' },
          '50%': { transform: 'translateY(-20px)', color: 'red' },
        },
      },
    },
  },
  plugins: [],
};
