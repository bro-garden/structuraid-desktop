import type { ReactNode } from 'react';

export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
export type TextUsage =
  | 'big-title'
  | 'typical-title'
  | 'section-title'
  | 'sub-title'
  | 'content-body'
  | 'body-small';
export type TextVariant =
  | 'bold'
  | 'regular'
  | 'title'
  | 'section-title'
  | 'section-sub-title'
  | 'content-body'
  | 'body-small'
  | 'error'
  | 'warning';

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
  'big-title': TextTag;
  'typical-title': TextTag;
  'section-title': TextTag;
  'sub-title': TextTag;
  'content-body': TextTag;
  'body-small': TextTag;
}

export type DefaultDocumentTag =
  | 'title'
  | 'section-title'
  | 'section-sub-title'
  | 'content-body'
  | 'body-small'
  | 'error'
  | 'warning';
