import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0b0d10',
        neon: {
          cyan: '#00f6ff',
          blue: '#2f6bff',
        },
        glass: 'rgba(255,255,255,0.06)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 246, 255, 0.25)',
      },
      backgroundImage: {
        'grid-radial': 'radial-gradient(circle at 20% 20%, rgba(0,246,255,0.08), transparent 40%), radial-gradient(circle at 80% 0%, rgba(47,107,255,0.08), transparent 45%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
}
export default config
