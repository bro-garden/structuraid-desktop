import type { ReactNode } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'warning';
export type ButtonVariants = 'big' | 'big-full-w' | 'small' | 'small-full-w';

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  as?: ButtonType;
  variant?: ButtonVariants;
  disabled?: boolean;
}
