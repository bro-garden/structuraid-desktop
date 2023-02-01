import type { TextUsage } from '../types';

const buildTextColorForDocument = (as: TextUsage): string => {
  switch (as) {
    case 'heading-1-document' || 'heading-2-document': {
      return 'text-document-dark-red';
    }
    case 'heading-3-document': {
      return 'text-document-light-red';
    }
    case 'heading-4-document': {
      return 'text-gray-dark';
    }
    case 'body-document': {
      return 'text-gray-dark-soft';
    }
    case 'body-small-document': {
      return 'text-gray-dark-soft';
    }
    case 'error-document': {
      return 'text-document-light-red';
    }
    case 'quote-document': {
      return 'text-gray-soft';
    }
    default: {
      return 'text-gray-dark-soft';
    }
  }
};

export default buildTextColorForDocument;
