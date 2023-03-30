import type { ReactNode } from 'react';

export interface RadioItem {
  id: string;
  label: ReactNode;
  value: string;
}

export interface RadioGroupProps {
  items: RadioItem[];
  selection?: string;
  onChange?: (item: RadioItem) => void;
  direction?: 'row' | 'column';
  name?: string;
}
