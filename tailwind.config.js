module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0ea5e9",
      light: "#f3f4f6"
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
