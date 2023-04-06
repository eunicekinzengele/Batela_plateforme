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
        '110': '30rem',
        '100': '25rem',
      },
      width:{
        '115': '30rem',
        '110': '28rem',
        '130': '60rem',
      }
    },
  },
   variants:{
    extend:{
     
    },
   },
  plugins: [],
}
