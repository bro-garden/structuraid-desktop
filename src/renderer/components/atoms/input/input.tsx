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
    'text-primary placeholder:text-gray-soft border-gray-soft hover:border-light-blue focus:border-light-blue';
  const darkStyles =
    'text-light-blue caret-light-blue placeholder:text-gray-soft border-gray-soft hover:border-blue-white focus:border-blue-white';
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
