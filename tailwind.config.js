/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('./src/assets/more/15.jpg')",
        'banner_image': "url('./src/assets/more/bannerimage.jpg')",
        'card_background': "url('./src/assets/more/1.png')",
        'addcard': "url('./src/assets/more/11.png' )"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

