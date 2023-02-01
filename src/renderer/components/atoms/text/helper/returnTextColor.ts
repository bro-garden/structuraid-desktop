import type { TextUsage, TextColor } from '../types';
import { DOCUMENT_VARIANTS } from './constants';

const returnTextColor = (as: TextUsage, useColor: TextColor): string => {
  if (DOCUMENT_VARIANTS.includes(as)) {
    return '';
  }

  switch (useColor) {
    case 'primary': {
      return 'text-primary';
    }
    case 'secondary': {
      return 'text-secondary';
    }
    case 'blueWhite': {
      return 'text-blueWhite';
    }
    case 'redWhite': {
      return 'text-redWhite';
    }
    case 'error': {
      return 'text-error';
    }
    case 'warning': {
      return 'text-warning';
    }
    case 'success': {
      return 'text-success';
    }
    default: {
      return 'text-primary';
    }
  }
};

export default returnTextColor;
