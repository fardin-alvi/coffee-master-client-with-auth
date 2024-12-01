/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('/public/images/more/15.jpg')",
        'banner_image': "url('/public/images/more/3.png')",
        'card_background': "url('/public/images/more/1.png')",
        'addcard': "url('/public/images/more/11.png')"
      },
    },
  }, 
  plugins: [
    require('daisyui'),
  ],
}

