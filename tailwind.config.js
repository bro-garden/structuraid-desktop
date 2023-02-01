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
      l: [
        '1.25rem',
        {
          lineHeight: '1.2',
        },
      ],
      s: '1rem',
      xs: '0.75rem',
      'print-xl': [
        '24px',
        {
          lineHeight: '1.5',
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
      blueWhite: '#EAF2FA',
      redWhite: '#F3DEE0',
      warning: '#EED202',
      error: '#E3342F',
      success: '#2FB390',
      documentDarkRed: '#48070D',
      documentLightRed: '#AE6D73',
      grayDark: '#0A0B0D',
      grayDarkSoft: '#535868',
      graySoft: '#B3B7C3',
      graySoftLight: '#E5E7EB',
    },
  },
  variants: {},
  plugins: [],
};
