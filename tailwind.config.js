/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-400": "#6333FF",
        "purple-500": "#430AFF",
        "purple-600": "#3400E0",
        "cyan-400": "#81F4E1",
        "cyan-500": "#56F0D7",
        "cyan-600": "#1EEBC9",
        "red-400": "#FF8585",
        "red-500": "#FF5C5C",
        "red-600": "#FF3333",
        "dark-1": "#141414",
        "dark-2": "#292929",
        "dark-3": "#3D3D3D",
        "dark-4": "#474747",
        "gray-1": "#5C5C5C",
        "gray-2": "#999999",
        "light-1": "#FFFFFF",
        "light-2": "#F5F5F5",
        "light-3": "#EBEBEB",
        "light-4": "#D9D9D9",
      },
      screens: {
        xs: "480px",
      },
      width: {
        420: "420px",
        465: "465px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
