/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: "#0a0e27",
        "accent-cyan": "#00f0ff",
        "accent-purple": "#a855f7",
        "accent-orange": "#ff6b35",
        glass: "rgba(13, 18, 45, 0.7)",
      },
      fontFamily: {
        display: ['"Chakra Petch"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
        'accent-radial': 'radial-gradient(circle at 20% 20%, rgba(0, 240, 255, 0.25), transparent 50%)',
        'grid-pattern':
          'linear-gradient(rgba(0, 240, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '80px 80px',
      },
      borderRadius: {
        hex: '32% 68% 70% 30% / 30% 30% 70% 70%',
      },
      boxShadow: {
        glow: '0 25px 60px rgba(0, 240, 255, 0.18)',
        'glow-orange': '0 25px 60px rgba(255, 107, 53, 0.35)',
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 1s infinite',
        shimmer: 'shimmer 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'cursor-ring': 'cursor-ring 0.6s ease-out',
        'draw-line': 'draw-line 1.2s ease forwards',
        'fade-up': 'fade-up 0.7s ease forwards',
        orbit: 'orbit 12s linear infinite',
        twinkle: 'twinkle 5s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, -10px, 0)' },
          '50%': { transform: 'translate3d(0, 10px, 0)' },
        },
        shimmer: {
          '0%': { opacity: 0.65 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.65 },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 240, 255, 0.35)' },
          '50%': { boxShadow: '0 0 0 18px rgba(0, 240, 255, 0)' },
        },
        'cursor-ring': {
          from: { transform: 'scale(0.4)', opacity: 0.9 },
          to: { transform: 'scale(1.4)', opacity: 0 },
        },
        'draw-line': {
          from: { height: '0%' },
          to: { height: '100%' },
        },
        'fade-up': {
          from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
          to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(12px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(12px) rotate(-360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      transitionTimingFunction: {
        buttery: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

