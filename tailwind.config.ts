import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      boxShadow: {
        'todo-shadow': '0px 8px 16px 0px rgba(171, 190, 209, 0.40)',
        'todo-card-shadow': '0px 4px 8px 0px rgba(171, 190, 209, 0.40)',
      },
      colors: {
        success: '#41ad49',
        info: '#069af1',
        warning: '#ff9500',
        danger: '#ff3b2d',
        primary: '#ffffff',
        secondary: '#ad03fc',
      },
    },
  },
  plugins: [],
};
export default config;
