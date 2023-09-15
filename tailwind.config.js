/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'first':"#010851",
        "sec" : "#9A7AF1",
        "third":" #707070",
        "pink":"#EE9AE5",
      }
    },
  },
  plugins: [],
}

