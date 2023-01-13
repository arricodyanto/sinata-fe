module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        light: "#f3f4f6"
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false,
  }
}
