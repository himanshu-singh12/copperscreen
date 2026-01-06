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
        copper: {
          50: '#fdf8f3',
          100: '#faeee1',
          200: '#f4dac2',
          300: '#ecc198',
          400: '#e6c9a8', // Rose gold
          500: '#d4a574',
          600: '#c8935a',
          700: '#b87333', // Deep copper
          800: '#965d2a',
          900: '#7a4d24',
        },
        charcoal: '#2C2C2C',
        slate: '#4A5568',
        electric: '#3B82F6',
        emerald: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'magnetic': 'magnetic 0.3s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          'from': { 'box-shadow': '0 0 20px rgba(184, 115, 51, 0.5)' },
          'to': { 'box-shadow': '0 0 30px rgba(184, 115, 51, 0.8)' },
        },
        'magnetic': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'copper-gradient': 'linear-gradient(135deg, #B87333 0%, #E6C9A8 100%)',
        'copper-mesh': 'radial-gradient(circle at 25% 25%, rgba(184, 115, 51, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}