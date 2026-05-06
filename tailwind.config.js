/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Or-Scent Design System
        'os-black':     '#080808',
        'os-dark':      '#111111',
        'os-surface':   '#1A1A1A',
        'os-border':    '#2A2A2A',
        'os-gold':      '#C9A96E',
        'os-gold-light':'#E8C992',
        'os-gold-dark': '#9A7A4A',
        'os-amethyst':  '#8B5CF6',
        'os-amethyst-light': '#A78BFA',
        'os-cream':     '#F5F0E8',
        'os-text':      '#E8E2D9',
        'os-muted':     '#7A7368',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
        'body':    ['DM Sans', 'sans-serif'],
        'accent':  ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'gold-gradient':      'linear-gradient(135deg, #C9A96E 0%, #E8C992 50%, #9A7A4A 100%)',
        'dark-gradient':      'linear-gradient(180deg, #080808 0%, #111111 100%)',
        'amethyst-gradient':  'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        'hero-gradient':      'radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.10) 0%, transparent 50%)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'fade-up':      'fadeUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'particle':     'particle 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        particle: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: 0.3 },
          '33%':      { transform: 'translateY(-30px) translateX(15px) scale(1.1)', opacity: 0.6 },
          '66%':      { transform: 'translateY(-10px) translateX(-10px) scale(0.9)', opacity: 0.4 },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'gold':       '0 0 30px rgba(201,169,110,0.25), 0 0 60px rgba(201,169,110,0.10)',
        'gold-sm':    '0 0 15px rgba(201,169,110,0.20)',
        'amethyst':   '0 0 30px rgba(139,92,246,0.25)',
        'glass':      '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card':       '0 4px 24px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
