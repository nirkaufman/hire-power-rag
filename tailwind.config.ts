import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{html,ts,md,analog,ag}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
