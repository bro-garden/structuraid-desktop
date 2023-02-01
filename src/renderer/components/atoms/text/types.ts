import type { ReactNode } from 'react';

export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'span'
  | 'p'
  | 'title'
  | 'chapter'
  | 'chapter-section'
  | 'content-title'
  | 'content'
  | 'content-small'
  | 'error'
  | 'quote';
export type TextUsage =
  | 'big-title'
  | 'typical-title'
  | 'section-title'
  | 'sub-title'
  | 'content-body'
  | 'body-small';
export type TextVariant = 'bold' | 'regular' | 'italic';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'blueWhite'
  | 'redWhite'
  | 'warning'
  | 'error'
  | 'success';

export interface TextProps {
  as: TextUsage;
  variant: TextVariant;
  className?: string;
  children: ReactNode;
  useColor?: TextColor;
}

export interface DefaultTags {
  'big-title': TextType;
  'typical-title': TextType;
  'section-title': TextType;
  'sub-title': TextType;
  'content-body': TextType;
  'body-small': TextType;
}
