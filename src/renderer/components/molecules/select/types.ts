import type { InputHTMLAttributes } from 'react';

export interface Item {
  id: string;
  label: string;
  value: unknown;
}

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  items: Item[];
  selection?: string;
  onSelection?: (item: Item) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  as?: 'rounded' | 'one-liner';
  color?: 'light' | 'dark';
}
