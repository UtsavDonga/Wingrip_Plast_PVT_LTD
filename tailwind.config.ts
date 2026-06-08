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
          DEFAULT: '#1B4F8A',
          50: '#EBF2FB',
          100: '#C2D8F3',
          200: '#99BEEB',
          300: '#70A4E3',
          400: '#478ADB',
          500: '#1B4F8A',
          600: '#174478',
          700: '#133966',
          800: '#0F2E54',
          900: '#0B2342',
        },
        accent: {
          DEFAULT: '#F97316',
          50: '#FFF3E8',
          100: '#FFDCBA',
          200: '#FFC48C',
          300: '#FFAD5E',
          400: '#FF9530',
          500: '#F97316',
          600: '#D96213',
          700: '#B9510F',
          800: '#99400C',
          900: '#793008',
        },
        neutral: {
          light: '#F8F9FA',
          dark: '#1A1A2E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        counter: 'counter 2s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        marquee: 'marquee 32s linear infinite',
        shimmer: 'shimmer 2.2s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(27,79,138,0.08)',
        'card-hover': '0 8px 32px 0 rgba(27,79,138,0.16)',
      },
    },
  },
  plugins: [],
}

export default config
