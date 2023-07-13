/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    mytheme: {

      "primary": "#641ae6",

      "secondary": "#FFFFFF",

      "accent": "#1fb2a6",

      "neutral": "#484848",

      "base-100": "#1d232a",

      "info": "#3abff8",

      "success": "#36d399",

      "warning": "#FFE500",

      "error": "#D00909",
    },
  },
  plugins: [require("daisyui")],
}
