import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        darkNavy: 'var(--dark-navy)',
        navy: 'var(--navy)',
        lightNavy: 'var(--light-navy)',
        lightestNavy: 'var(--lightest-navy)',
        darkSlate: 'var(--dark-slate)',
        slate: 'var(--slate)',
        lightSlate: 'var(--light-slate)',
        lightestSlate: 'var(--lightest-slate)',
        navbar: 'var(--navbar-navy)',
        white: 'var(--white)',
        green: 'var(--green)',
        greenTint: 'var(--green-tint)',
        pink: 'var(--pink)',
        blue: 'var(--blue)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      transitionProperty: {
        custom: 'var(--transition)',
        before: 'var(--transition-before)',
        beforeActive: 'var(--transition-before-active)',
        after: 'var(--transition-after)',
        afterActive: 'var(--transition-after-active)'
      },
      boxShadow: {
        custom: '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)'
      },
      fontSize: {
        heading: 'clamp(40px, 8vw, 70px)',
        'small-heading': 'clamp(14px, 5vw, 16px)'
      },
      rotate: {
        '225': '225deg',
        '-90': '-90deg',
        '-225': '-225deg'
      },
      transitionDuration: {
        custom: '0.22s',
        '15': '0.15s'
      },
      transitionDelay: {
        custom: '0.12s'
      },
      transitionTimingFunction: {
        open: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        close: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
