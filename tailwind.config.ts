import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          white: '#ffffff',
          near_black: '#222222',
          rausch_red: '#ff385c',
          deep_rausch: '#e00b41',
          secondary_gray: '#6a6a6a',
          border_gray: '#c1c1c1',
          light_surface: '#f2f2f2',
          focused_gray: '#3f3f3f',
        },
      },
      fontFamily: {
        cereal: [
          'Airbnb Cereal VF',
          'Circular',
          '-apple-system',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        airbnb_card: '0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.1)',
        airbnb_hover: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        button: '8px',
        badge: '14px',
        card: '20px',
        large: '32px',
      },
    },
  },
  plugins: [],
} satisfies Config;
