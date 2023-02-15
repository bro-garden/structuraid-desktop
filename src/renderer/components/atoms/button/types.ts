import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import type { LinkProps } from 'react-router-dom';

export type ButtonType = 'primary' | 'secondary' | 'warning';
export type ButtonVariants = 'big' | 'small';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ButtonType;
  variant?: ButtonVariants;
}

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ButtonType;
  variant?: ButtonVariants;
  disabled?: boolean;
}

export interface LinkButtonProps extends LinkProps {
  as?: ButtonType;
  variant?: ButtonVariants;
  disabled?: boolean;
}
