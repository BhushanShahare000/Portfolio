/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)",},
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontFamily: {
        poppinss: ["Poppins_434934", "Poppins_Fallback_434934", "sans-serif"],
      },
      fontFamily: {
        "fira-code": [
          "Fira_Code_8f16e2",
          "Fira_Code_Fallback_8f16e2",
          "monospace",
        ],
      },
      colors: {
        "custom-white": "rgb(255, 255, 255)",
      },

      colors: {
        "custom-blue": "rgb(127, 151, 178)",
      },
    },
  },
  plugins: [],
};
