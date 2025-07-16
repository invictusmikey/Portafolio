/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: 'class',
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        clearIn: {
          "0%": { filter: "blur(1px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1.5s infinite ease-in-out",
        clearIn: "clearIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
