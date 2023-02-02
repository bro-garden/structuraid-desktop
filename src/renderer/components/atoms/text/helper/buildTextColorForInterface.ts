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

export default buildTextColorForInterface;
