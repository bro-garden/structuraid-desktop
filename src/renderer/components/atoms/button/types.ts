import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

import type { LinkProps } from 'react-router-dom';

export type ButtonType = 'primary' | 'secondary' | 'warning';
export type ButtonVariants = 'big' | 'small';

export interface SimpleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  as?: ButtonType;
  variant?: ButtonVariants;
}

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  as?: ButtonType;
  variant?: ButtonVariants;
  disabled?: boolean;
}

export interface LinkButtonProps extends LinkProps {
  className?: string;
  children: ReactNode;
  as?: ButtonType;
  variant?: ButtonVariants;
  disabled?: boolean;
}
