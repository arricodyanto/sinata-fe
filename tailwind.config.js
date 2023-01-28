module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js", 
    "node_modules/react-daisyui/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        light: "#f3f4f6"
      },
    },
    screens: {
      'xs': '320px',
      'sm': '760px',
      'lg': '1280px'
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false,
  }
}
