import type { TextUsage, DefaultTags } from '../types';

export const DEFAULT_TAGS: DefaultTags = {
  'big-title': 'h1',
  'typical-title': 'h2',
  'section-title': 'h3',
  'sub-title': 'h4',
  'content-body': 'p',
  'body-small': 'p',
  title: 'p',
  chapter: 'p',
  'chapter-section': 'p',
  'content-title': 'p',
  content: 'p',
  'content-small': 'p',
  error: 'p',
  quote: 'p',
};

export const DOCUMENT_VARIANTS: TextUsage[] = [
  'title',
  'chapter',
  'chapter-section',
  'content-title',
  'content',
  'content-small',
  'error',
  'quote',
];
