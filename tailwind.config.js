/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        winGlow: {
          '0%': { textShadow: '0 0 0px #2ecc71' },
          '100%': { textShadow: '0 0 15px #2ecc71' },
        },
        loseShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '50%': { transform: 'translateX(6px)' },
          '75%': { transform: 'translateX(-6px)' },
        },
        blink: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        winGlow: 'winGlow 0.6s ease',
        loseShake: 'loseShake 0.4s ease',
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [],
}

