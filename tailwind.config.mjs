/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-background": "url(src/assets/images/bg-image.jpg)",
      },
    },
  },
  plugins: [],
};
