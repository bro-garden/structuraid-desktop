/* eslint-disable react/jsx-props-no-spreading */

import type { InputProps } from './types';

const Input = ({
  as = 'one-liner',
  color = 'light',
  className,
  disabled,
  ...props
}: InputProps) => {
  const styles = [
    'transition-all block text-xs px-2 h-8 bg-transparent tracking-wide placeholder:tracking-wide font-sans focus:transition-none focus:outline-none',
  ];

  const oneLinerStyles = 'border-b-2';
  const roundedStyles = 'rounded border-2';
  styles.push(as === 'one-liner' ? oneLinerStyles : roundedStyles);

  const lightStyles =
    'text-primary placeholder:text-gray-soft border-gray-soft hover:border-soft-blue focus:border-soft-blue';
  const darkStyles =
    'text-primary caret-soft-blue placeholder:text-gray-soft border-gray-soft hover:border-soft-blue focus:border-soft-blue';
  styles.push(color === 'light' ? lightStyles : darkStyles);

  if (disabled) {
    styles.push('rounded bg-gray-soft-light');
  }

  return (
    <input
      className={`${styles.join(' ')} ${className}`}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
