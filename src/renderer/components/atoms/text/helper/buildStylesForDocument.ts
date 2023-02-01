import type { TextUsage } from '../types';

const buildStylesForDocument = (as: TextUsage): string => {
  let styles = ['font-serif'];

  switch (as) {
    case 'heading-1-document': {
      styles = styles.concat(
        ['text-print-xl'],
        ['font-bold'],
        ['text-documentDarkRed']
      );
      break;
    }
    case 'heading-2-document': {
      styles = styles.concat(
        ['text-print-l'],
        ['font-bold'],
        ['text-documentDarkRed']
      );
      break;
    }
    case 'heading-3-document': {
      styles = styles.concat(
        ['text-print-l'],
        ['font-normal'],
        ['text-documentLightRed']
      );
      break;
    }
    case 'heading-4-document': {
      styles = styles.concat(
        ['text-print-sm'],
        ['font-bold'],
        ['text-grayDark']
      );
      break;
    }
    case 'body-document': {
      styles = styles.concat(
        ['text-print-sm'],
        ['font-normal'],
        ['text-grayDarkSoft']
      );
      break;
    }
    case 'body-small-document': {
      styles = styles.concat(
        ['text-print-xs'],
        ['font-normal'],
        ['text-grayDarkSoft']
      );
      break;
    }
    case 'error-document': {
      styles = styles.concat(
        ['text-print-sm'],
        ['font-normal'],
        ['text-documentLightRed']
      );
      break;
    }
    case 'quote-document': {
      styles = styles.concat(
        ['text-print-sm'],
        ['font-normal'],
        ['italic'],
        ['text-graySoft']
      );
      break;
    }
    default: {
      styles = styles.concat(
        ['text-print-sm'],
        ['font-normal'],
        ['text-grayDarkSoft']
      );
      break;
    }
  }

  return styles.join(' ');
};

export default buildStylesForDocument;
