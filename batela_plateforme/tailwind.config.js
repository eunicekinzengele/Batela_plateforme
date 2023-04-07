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
      dropShadow: {
        '3xl': '35px 35px 35px 35px rgba(0, 0, 0, 0.25)',
      },
      height: {
        '100': '25rem',
        '110': '30rem',
        '120': '35rem',
        '128': '40rem',
      },
      width:{
        '110': '28rem',
        '115': '30rem',
        '116': '40rem',
        '120': '50rem',
        '125': '55rem',
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
