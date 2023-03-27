import type { ReactNode } from 'react';

export interface RadioProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  disabled?: boolean;
}
