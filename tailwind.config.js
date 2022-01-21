module.exports = {
  content: [],
  theme: {
    fontFamily: {
      primary: ['"Roboto Mono"', "monospace"],
    },
    extend: {
      colors: {
        light: "#f3ead3",
      },
    },
  },
  plugins: [],
  mode: "jit",
  purge: ["./app/**/*.{js,jsx}"],
};
