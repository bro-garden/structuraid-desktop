import type { TextUsage, TextVariant } from '../types';

const buildStylesForInterface = (
  variantName: TextVariant,
  as: TextUsage
): string => {
  let styles = ['font-sans'];

  if (variantName === 'bold') {
    styles = styles.concat(['font-bold']);
  } else if (variantName === 'normal') {
    styles = styles.concat(['font-normal']);
  } else if (variantName === 'italic') {
    styles = styles.concat(['font-normal'], ['italic']);
  }

  switch (as) {
    case 'heading-1-interface': {
      styles = styles.concat(['text-4xl']);
      break;
    }
    case 'heading-2-interface': {
      styles = styles.concat(['text-3xl']);
      break;
    }
    case 'heading-3-interface': {
      styles = styles.concat(['text-2xl']);
      break;
    }
    case 'heading-4-interface': {
      styles = styles.concat(['text-xl']);
      break;
    }
    case 'body-interface': {
      styles = styles.concat(['text-base']);
      break;
    }
    case 'body-small-interface': {
      styles = styles.concat(['text-xs']);
      break;
    }
    default: {
      styles = styles.concat(['text-base']);
      break;
    }
  }

  return styles.join(' ');
};

export default buildStylesForInterface;
