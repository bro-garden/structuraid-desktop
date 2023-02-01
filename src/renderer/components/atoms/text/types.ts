import type { ReactNode } from 'react';

export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
export type TextUsage =
  | 'heading-1-interface'
  | 'heading-2-interface'
  | 'heading-3-interface'
  | 'heading-4-interface'
  | 'body-interface'
  | 'body-small-interface'
  | 'heading-1-document'
  | 'heading-2-document'
  | 'heading-3-document'
  | 'heading-4-document'
  | 'body-document'
  | 'body-small-document'
  | 'error-document'
  | 'quote-document';
export type TextVariant = 'bold' | 'normal' | 'italic' | '';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'blueWhite'
  | 'redWhite'
  | 'warning'
  | 'error'
  | 'success'
  | '';

export interface TextProps {
  as: TextUsage;
  variant?: TextVariant;
  className?: string;
  children: ReactNode;
  useColor?: TextColor;
}

export interface DefaultTags {
  'heading-1-interface': TextTag;
  'heading-2-interface': TextTag;
  'heading-3-interface': TextTag;
  'heading-4-interface': TextTag;
  'body-interface': TextTag;
  'body-small-interface': TextTag;
  'heading-1-document': TextTag;
  'heading-2-document': TextTag;
  'heading-3-document': TextTag;
  'heading-4-document': TextTag;
  'body-document': TextTag;
  'body-small-document': TextTag;
  'error-document': TextTag;
  'quote-document': TextTag;
}
