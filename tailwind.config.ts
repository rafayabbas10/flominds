import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'neon-blue': '#00E0FF',
        'deep-purple': '#5E2B97',
        'jet-black': '#121212',
        // Secondary Colors
        'cyber-pink': '#FF3B81',
        'electric-teal': '#00D084',
        'graphite': '#333333',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(0,224,255,0.2)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0,224,255,0.4)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#00E0FF",
          "secondary": "#5E2B97",
          "accent": "#FF3B81",
          "neutral": "#333333",
          "base-100": "#ffffff",
          "info": "#00D084",
          "success": "#00D084",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        dark: {
          "primary": "#00E0FF",
          "secondary": "#5E2B97",
          "accent": "#FF3B81",
          "neutral": "#333333",
          "base-100": "#121212",
          "info": "#00D084",
          "success": "#00D084",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
} satisfies Config;
