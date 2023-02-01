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
    case 'big-title': {
      styles = styles.concat(['text-4xl']);
      break;
    }
    case 'typical-title': {
      styles = styles.concat(['text-3xl']);
      break;
    }
    case 'section-title': {
      styles = styles.concat(['text-2xl']);
      break;
    }
    case 'sub-title': {
      styles = styles.concat(['text-l']);
      break;
    }
    case 'content-body': {
      styles = styles.concat(['text-s']);
      break;
    }
    case 'body-small': {
      styles = styles.concat(['text-xs']);
      break;
    }
    default: {
      styles = styles.concat(['text-s']);
      break;
    }
  }

  return styles.join(' ');
};

export default buildStylesForInterface;
