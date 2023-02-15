import type { TextUsage } from '../types';

const buildStylesForDocument = (as: TextUsage): string => {
  let styles = ['font-serif'];

  switch (as) {
    case 'heading-1-document': {
      styles = styles.concat(['text-print-xl'], ['font-bold']);
      break;
    }
    case 'heading-2-document': {
      styles = styles.concat(['text-print-l'], ['font-bold']);
      break;
    }
    case 'heading-3-document': {
      styles = styles.concat(['text-print-l'], ['font-normal']);
      break;
    }
    case 'heading-4-document': {
      styles = styles.concat(['text-print-sm'], ['font-bold']);
      break;
    }
    case 'body-document': {
      styles = styles.concat(['text-print-sm'], ['font-normal']);
      break;
    }
    case 'body-small-document': {
      styles = styles.concat(['text-print-xs'], ['font-normal']);
      break;
    }
    case 'error-document': {
      styles = styles.concat(['text-print-sm'], ['font-normal']);
      break;
    }
    case 'quote-document': {
      styles = styles.concat(['text-print-sm'], ['font-normal'], ['italic']);
      break;
    }
    default: {
      break;
    }
  }

  return styles.join(' ');
};

export default buildStylesForDocument;
