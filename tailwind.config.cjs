module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#3EE0FF',
          purple: '#8A5BFF'
        }
      },
      boxShadow: {
        'neon-sm': '0 2px 10px rgba(58,134,255,0.12)',
        'neon-md': '0 8px 30px rgba(138,91,255,0.12)'
      }
    }
  },
  plugins: []
}
