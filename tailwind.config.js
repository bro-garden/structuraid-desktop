module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
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
    },
    textColor: {
      primary: '#0F253E',
      secondary: '#64666A',
      blueWhite: '#F6F6F6',
      redWhite: '#F3DEE0',
      warning: '#EED202',
      error: '#E3342F',
      success: '#2FB390',
    },
  },
  variants: {},
  plugins: [],
};
