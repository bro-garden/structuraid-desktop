import type { ReactNode } from 'react';

export type ButtonType = 'primary' | 'secondary';
export type ButtonVariants = 'big' | 'big-full-w' | 'small' | 'small-full-w';

export interface ButtonProps {
  className?: string;
  label: string;
  children?: ReactNode;
  type?: ButtonType;
  variant?: ButtonVariants;
  disabled?: boolean;
}
