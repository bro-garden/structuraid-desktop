import type { ReactNode, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: 'rounded' | 'one-liner';
  color?: 'light' | 'dark';
  icon?: ReactNode;
}
