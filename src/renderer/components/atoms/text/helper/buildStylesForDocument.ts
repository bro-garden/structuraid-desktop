import type { TextUsage } from '../types';

const buildStylesForDocument = (as: TextUsage): string => {
  let styles = ['font-serif'];

  switch (as) {
    case 'title': {
      styles = styles.concat(
        ['text-print-xl'],
        ['font-bold'],
        ['text-documentDarkRed']
      );
      break;
    }
    case 'chapter': {
      styles = styles.concat(
        ['text-print-l'],
        ['font-bold'],
        ['text-documentDarkRed']
      );
      break;
    }
    case 'chapter-section': {
      styles = styles.concat(
        ['text-print-l'],
        ['font-normal'],
        ['text-documentLightRed']
      );
      break;
    }
    case 'content-title': {
      styles = styles.concat(
        ['text-print-sm'],
        ['font-bold'],
        ['text-grayDark']
      );
      break;
    }
    case 'content': {
      styles = styles.concat(
        ['text-print-sm'],
        ['font-normal'],
        ['text-grayDarkSoft']
      );
      break;
    }
    case 'content-small': {
      styles = styles.concat(
        ['text-print-xs'],
        ['font-normal'],
        ['text-grayDarkSoft']
      );
      break;
    }
    case 'error': {
      styles = styles.concat(
        ['text-print-sm'],
        ['font-normal'],
        ['text-documentLightRed']
      );
      break;
    }
    case 'quote': {
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
