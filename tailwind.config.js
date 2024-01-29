// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
  
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Space_Grotesk: "'Space Grotesk', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
});