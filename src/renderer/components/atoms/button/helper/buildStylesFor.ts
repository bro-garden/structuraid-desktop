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
        ['rounded-sm'],
        ['text-primary'],
        ['bg-soft-blue'],
        ['border'],
        ['border-soft-blue']
      );
      if (!disabled) {
        styles = styles.concat(
          ['hover:bg-primary'],
          ['hover:text-soft-blue'],
          ['hover:border-primary'],
          ['active:bg-primary'],
          ['active:text-soft-blue'],
          ['active:border-soft-blue']
        );
        styles.join(' ');
        break;
      }
      styles = styles.concat(['disabled:bg-gray-soft']);
      styles.join(' ');
      break;
    case 'secondary':
      styles = styles.concat(
        ['rounded-sm'],
        ['text-primary'],
        ['bg-blue-white'],
        ['border'],
        ['border-primary']
      );
      if (!disabled) {
        styles = styles.concat(
          ['hover:bg-soft-blue'],
          ['hover:border-soft-blue'],
          ['active:bg-primary'],
          ['active:text-soft-blue'],
          ['active:border-soft-blue']
        );
        styles.join(' ');
        break;
      }
      styles = styles.concat(['disabled:bg-gray-soft']);
      styles.join(' ');
      break;
    case 'warning':
      styles = styles.concat(
        ['rounded-sm'],
        ['text-red-white'],
        ['bg-notice-red'],
        ['border'],
        ['border-notice-red']
      );
      if (!disabled) {
        styles = styles.concat(
          ['hover:bg-notice-dark-red'],
          ['active:bg-red-white'],
          ['active:text-notice-red'],
          ['active:border-notice-red']
        );
        styles.join(' ');
        break;
      }
      styles = styles.concat(['disabled:bg-gray-soft']);
      styles.join(' ');
      break;
    default:
      throw new Error("'type' prop does not have a valid value");
  }

  switch (variant) {
    case 'big':
      styles = styles.concat(['text-xs'], ['py-4'], ['px-8']);
      return styles.join(' ');
    case 'small':
      styles = styles.concat(['text-xs'], ['py-3'], ['px-6']);
      return styles.join(' ');
    default:
      throw new Error("'variant' prop does not have a valid value");
  }
};

export default buildStylesFor;
