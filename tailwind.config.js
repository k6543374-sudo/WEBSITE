/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        surface: {
          DEFAULT: '#0B0F19',
          light: '#131927',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        viron: {
          blue: '#00F0FF',
          indigo: '#4F46E5',
          purple: '#8B5CF6',
          pink: '#EC4899',
          dark: '#05070D',
        },
        accent: {
          cyan: '#06B6D4',
          violet: '#7C3AED',
          emerald: '#10B981',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(79, 70, 229, 0.15), rgba(6, 182, 212, 0.1) 40%, rgba(3, 7, 18, 0) 70%)',
        'zee-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2), rgba(0, 240, 255, 0.1) 50%, rgba(3, 7, 18, 0) 80%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 35px rgba(139, 92, 246, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}
