import type { ReactNode, InputHTMLAttributes } from 'react';

export interface RadioProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  disabled?: boolean;
  name?: string;
  value?: string;
}
