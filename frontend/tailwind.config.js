/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kiko: {
          brand: '#1E3A8A',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
          dark: '#0F172A',
          light: '#F9FAFB',
          'dark-bg': '#0B0F19',
          'dark-card': '#1E293B',
          'dark-text': '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'kiko': '8px',
      },
      boxShadow: {
        'kiko': '0 4px 6px -1px rgb(0 0 0 / 0.05)',
      }
    },
  },
  plugins: [],
}
