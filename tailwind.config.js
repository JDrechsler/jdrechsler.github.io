export default {
  content: ['./src/**/*.{js,html,astro}'],
  theme: {
    screens: {
      sm: '480px',
      md: '800px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        // Warm, sophisticated palette
        primary: '#E07A5F',      // Terracotta - distinctive warm tone
        secondary: '#3D405B',    // Charcoal blue - sophisticated dark
        accent: '#F4A261',       // Sandy gold - warm accent
        sage: '#81B29A',         // Sage green - fresh secondary
        cream: '#F4F1DE',        // Warm cream - soft background
        dark: '#1a1a2e',         // Deep navy - text color
        muted: '#6B7280',        // Muted gray - secondary text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'warm': '0 8px 30px -4px rgba(224, 122, 95, 0.15)',
        'lift': '0 20px 40px -8px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
