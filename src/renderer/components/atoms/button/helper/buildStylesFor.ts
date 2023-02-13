import type { ButtonVariants, ButtonType } from '../types';

const buildStylesFor = (
  type: ButtonType,
  variant: ButtonVariants,
  disabled: boolean
): string => {
  let styles = ['font-sans'];

  switch (type) {
    case 'primary':
      styles = styles.concat(
        ['rounded'],
        ['text-blue-white'],
        ['bg-secondary'],
        ['border'],
        ['border-primary']
      );
      if (!disabled) {
        styles = styles.concat(
          ['hover:bg-primary'],
          ['active:bg-blue-white'],
          ['active:text-secondary']
        );
        styles.join(' ');
        break;
      }
      styles = styles.concat(['disabled:bg-gray-300']);
      styles.join(' ');
      break;
    case 'secondary':
      styles = styles.concat(
        ['rounded-full'],
        ['text-primary'],
        ['bg-blue-white'],
        ['border-2'],
        ['border-primary']
      );
      if (!disabled) {
        styles = styles.concat(
          ['hover:bg-secondary'],
          ['hover:text-blue-white'],
          ['active:bg-primary'],
          ['active:text-blue-white']
        );
        styles.join(' ');
        break;
      }
      styles = styles.concat(
        ['disabled:bg-gray-300'],
        ['border'],
        ['disabled:text-blue-white']
      );
      styles.join(' ');
      break;
    default:
      throw new Error("'type' prop does not have a valid value");
  }

  switch (variant) {
    case 'big':
      styles = styles.concat(['text-xl'], ['p-4']);
      return styles.join(' ');
    case 'small':
      styles = styles.concat(['text-base'], ['p-3']);
      return styles.join(' ');
    default:
      throw new Error("'variant' prop does not have a valid value");
  }
};

export default buildStylesFor;
