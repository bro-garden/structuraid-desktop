import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

export type TagOptions = 'button' | 'link' | 'anchor';
export type ButtonType = 'primary' | 'secondary' | 'warning';
export type ButtonVariants = 'big' | 'small';

export interface ButtonProps {
  useTag: TagOptions;
  children: ReactNode | string;
  props: SimpleButtonProps | AnchorProps;
}

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
