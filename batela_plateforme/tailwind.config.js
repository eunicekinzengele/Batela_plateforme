/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HeroImage': "url('../images/HeroImage.png')",
      },
      height: {
        '128': '40rem',
        '120': '35rem',
      },
      width:{
        '115': '30rem',
        '110': '28rem',
      }
    },
  },
   variants:{
    extend:{
     
    },
   },
  plugins: [],
}
