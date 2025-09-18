/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Cores da marca VEKTOR AERO
        brand: {
          primary: '#FF6B35',    // Laranja principal
          secondary: '#1E3A5F',  // Azul escuro
          dark: '#1A1A1A',       // Cinza escuro/preto
        },
        // Aliases para facilitar o uso
        orange: {
          brand: '#FF6B35',
        },
        blue: {
          brand: '#1E3A5F',
        },
        gray: {
          brand: '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
}