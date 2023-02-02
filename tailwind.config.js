module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      serif: ['Libre Baskerville ', 'serif'],
    },
    fontSize: {
      '4xl': [
        '3rem',
        {
          lineHeight: '1.4',
        },
      ],
      '3xl': [
        '2.25rem',
        {
          lineHeight: '1.4',
        },
      ],
      '2xl': [
        '1.75rem',
        {
          lineHeight: '1.2',
        },
      ],
      'print-l': [
        '20px',
        {
          lineHeight: '1.5',
        },
      ],
      'print-sm': [
        '16px',
        {
          lineHeight: '1.2',
        },
      ],
      'print-xs': [
        '14px',
        {
          lineHeight: '1.2',
        },
      ],
    },
    textColor: {
      primary: '#0F253E',
      secondary: '#1D4A7C',
      'blue-white': '#EAF2FA',
      'red-white': '#F3DEE0',
      warning: '#EED202',
      error: '#E3342F',
      success: '#2FB390',
      'document-dark-red': '#48070D',
      'document-light-red': '#AE6D73',
      'gray-dark': '#0A0B0D',
      'gray-dark-soft': '#535868',
      'gray-soft': '#B3B7C3',
      'gray-soft-light': '#E5E7EB',
    },
  },
  variants: {},
  plugins: [],
};
