/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/imageA.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require('daisyui', 'tailwindcss/plugins/pseudo-classes')],
};
