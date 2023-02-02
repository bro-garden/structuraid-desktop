import type { TextUsage, DefaultTags } from '../types';

export const DEFAULT_TAGS: DefaultTags = {
  'heading-1-interface': 'h1',
  'heading-2-interface': 'h2',
  'heading-3-interface': 'h3',
  'heading-4-interface': 'h4',
  'body-interface': 'p',
  'body-small-interface': 'p',
  'heading-1-document': 'p',
  'heading-2-document': 'p',
  'heading-3-document': 'p',
  'heading-4-document': 'p',
  'body-document': 'p',
  'body-small-document': 'p',
  'error-document': 'p',
  'quote-document': 'p',
};

export const DOCUMENT_VARIANTS: TextUsage[] = [
  'heading-1-document',
  'heading-2-document',
  'heading-3-document',
  'heading-4-document',
  'body-document',
  'body-small-document',
  'error-document',
  'quote-document',
];

export const INTERFACE_VARIANTS: TextUsage[] = [
  'heading-1-interface',
  'heading-2-interface',
  'heading-3-interface',
  'heading-4-interface',
  'body-interface',
  'body-small-interface',
];
