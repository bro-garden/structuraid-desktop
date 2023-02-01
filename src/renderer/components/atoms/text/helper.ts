import type {
  TextTag,
  TextUsage,
  DefaultTags,
  TextVariant,
  DefaultDocumentTag,
  TextColor,
} from './types';

const DEFAULT_TAGS: DefaultTags = {
  'big-title': 'h1',
  'typical-title': 'h2',
  'section-title': 'h3',
  'sub-title': 'h4',
  'content-body': 'p',
  'body-small': 'p',
};

const DOCUMENT_VARIANTS: DefaultDocumentTag[] = [
  'title',
  'chapter-title',
  'chapter-sub-title',
  'content',
  'content-small',
  'error',
  'warning',
];

const buildStylesForInterface = (
  variantName: TextVariant,
  as: TextUsage
): string => {
  let styles = ['font-sans'];

  if (variantName === 'bold') {
    styles = styles.concat(['font-bold']);
  } else if (variantName === 'regular') {
    styles = styles.concat(['font-regular']);
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

const buildStylesForDocument = (variantName: TextVariant): string => {
  let styles = ['font-serif'];

  switch (variantName) {
    case 'title': {
      styles = styles.concat(['text-4xl']);
      break;
    }
    case 'chapter-title': {
      styles = styles.concat(['text-3xl']);
      break;
    }
    case 'chapter-sub-title': {
      styles = styles.concat(['text-2xl']);
      break;
    }
    case 'content': {
      styles = styles.concat(['text-l']);
      break;
    }
    case 'content-small': {
      styles = styles.concat(['text-s']);
      break;
    }
    case 'error': {
      styles = styles.concat(['text-xs']);
      break;
    }
    case 'warning': {
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

export const buildStylesFor = (
  variantName: TextVariant,
  as: TextUsage
): string => {
  if (DOCUMENT_VARIANTS.includes(variantName as DefaultDocumentTag)) {
    return buildStylesForDocument(variantName);
  }

  return buildStylesForInterface(variantName, as);
};

export const resolveElement = (
  variantName: TextVariant,
  as: TextUsage
): TextTag => {
  if (DOCUMENT_VARIANTS.includes(variantName as DefaultDocumentTag)) {
    return 'p';
  }

  return 'p' || DEFAULT_TAGS[as];
};

export const returnTextColor = (
  variantName: TextVariant,
  useColor: TextColor
): string => {
  if (DOCUMENT_VARIANTS.includes(variantName as DefaultDocumentTag)) {
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
