import type {
  TextProps,
  TextTag,
  TextUsage,
  DefaultTags,
  TextVariant,
} from './types';

const DEFAULT_TAGS: DefaultTags = {
  'big-title': 'h1',
  'typical-title': 'h2',
  'section-title': 'h3',
  'sub-title': 'h4',
  'content-body': 'p',
  'body-small': 'p',
};

const buildStylesFor = (variantName: TextVariant, as: TextUsage): string => {
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

const resolveElement = (as: TextUsage): TextTag => {
  return 'p' || DEFAULT_TAGS[as];
};

const Text = ({ as, variant, className, children }: TextProps) => {
  const Element = resolveElement(as);
  const styles = buildStylesFor(variant, as);

  return (
    <Element className={`${styles} ${className || ''}`}>{children}</Element>
  );
};

export default Text;
