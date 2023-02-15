import type { ButtonVariants, ButtonType } from '../types';

const buildBaseStyles = (
  as: ButtonType,
  variant: ButtonVariants,
  disabled: boolean
): string => {
  let styles = ['font-sans transition rounded-sm border'];

  switch (as) {
    case 'primary':
      styles = styles.concat(
        ['text-primary'],
        ['bg-soft-blue'],
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
      }
      break;
    case 'secondary':
      styles = styles.concat(
        ['text-primary'],
        ['bg-blue-white'],
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
      }
      break;
    case 'warning':
      styles = styles.concat(
        ['text-red-white'],
        ['bg-notice-red'],
        ['border-notice-red']
      );
      if (!disabled) {
        styles = styles.concat(
          ['hover:bg-notice-dark-red'],
          ['active:bg-red-white'],
          ['active:text-notice-red'],
          ['active:border-notice-red']
        );
      }
      break;
    default:
      throw new Error("'as' prop does not have a valid value");
  }

  switch (variant) {
    case 'big':
      styles = styles.concat(['text-xs'], ['py-3'], ['px-6']);
      return styles.join(' ');
    case 'small':
      styles = styles.concat(['text-xs'], ['py-2'], ['px-4']);
      return styles.join(' ');
    default:
      throw new Error("'variant' prop does not have a valid value");
  }
};

export default buildBaseStyles;
