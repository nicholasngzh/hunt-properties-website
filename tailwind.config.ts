import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3a2a',
          dark: '#112819',
          light: '#2a5a3c',
          50: '#f0f7f3',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e0c27a',
          dark: '#a8892e',
        },
        'off-white': '#f8f7f4',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': `
          linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-60': '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config
