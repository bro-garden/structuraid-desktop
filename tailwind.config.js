import {
  interfaceTextThemeConfig,
  printingTextThemeConfig,
} from './tailwind-config-help';

module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      serif: ['Libre Baskerville ', 'serif'],
    },
    fontSize: {
      ...interfaceTextThemeConfig.fontSize,
      ...printingTextThemeConfig.fontSize,
    },
    textColor: {
      ...interfaceTextThemeConfig.textColor,
      ...printingTextThemeConfig.textColor,
    },
  },
  variants: {},
  plugins: [],
};
