/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-blue': 'hsl(198.6, 88.6%, 10.4%)',
        'veloxi-blue': '#0ea5e9',
        'veloxi-blue-darker': 'hsl(198.6, 88.6%, 40.4%)'
      }
    }
  },
  plugins: []
}
