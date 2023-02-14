import type { TextColor } from '../types';

const buildTextColorForInterface = (color: TextColor): string => {
  switch (color) {
    case 'primary': {
      return 'text-primary';
    }
    case 'secondary': {
      return 'text-secondary';
    }
    case 'blue-white': {
      return 'text-blue-white';
    }
    case 'red-white': {
      return 'text-red-white';
    }
    case 'error': {
      return 'text-notice-red';
    }
    case 'warning': {
      return 'text-notice-yellow';
    }
    case 'success': {
      return 'text-notice-green';
    }
    default: {
      return 'text-primary';
    }
  }
};

export default buildTextColorForInterface;
