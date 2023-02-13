import type { ButtonVariants, ButtonType } from '../types';

const buildStylesFor = (type: ButtonType, variant: ButtonVariants): string => {
  let styles = ['font-sans'];

  switch (type) {
    case 'primary':
      styles = styles.concat(
        ['rounded'],
        ['text-primary'],
        ['bg-blue-white'],
        ['border'],
        ['border-primary'],
        ['hover:bg-primary'],
        ['hover:text-blue-white']
      );
      styles.join(' ');
      break;
    case 'secondary':
      styles = styles.concat(
        ['rounded-full'],
        ['text-primary'],
        ['bg-white'],
        ['border-2'],
        ['border-primary'],
        ['hover:bg-secondary'],
        ['hover:text-blue-white']
      );
      styles.join(' ');
      break;
    default:
      throw new Error("'type' prop does not have a valid value");
  }

  switch (variant) {
    case 'big':
      styles = styles.concat(['text-2xl'], ['w-auto'], ['px-5'], ['py-5']);
      return styles.join(' ');
    case 'big-full-w':
      styles = styles.concat(['text-2xl'], ['w-full'], ['px-5'], ['py-5']);
      return styles.join(' ');
    case 'small':
      styles = styles.concat(['text-sm'], ['w-auto'], ['px-3'], ['py-2']);
      return styles.join(' ');
    case 'small-full-w':
      styles = styles.concat(['text-sm'], ['w-full'], ['px-3'], ['py-2']);
      return styles.join(' ');
    default:
      throw new Error("'variant' prop does not have a valid value");
  }
};

export default buildStylesFor;
