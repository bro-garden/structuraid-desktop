import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

export type TagOptions = 'button' | 'link' | 'anchor';
export type ButtonType = 'primary' | 'secondary' | 'warning';
export type ButtonVariants = 'big' | 'big-full-w' | 'small' | 'small-full-w';

export interface ButtonProps {
  useTag: TagOptions;
  children: ReactNode | string;
  props: SimpleButtonProps | AnchorProps;
}

export interface SimpleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode | string;
  as?: ButtonType;
  variant?: ButtonVariants;
  disabled?: boolean;
}

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode | string;
  as?: ButtonType;
  variant?: ButtonVariants;
  disabled?: boolean;
}
