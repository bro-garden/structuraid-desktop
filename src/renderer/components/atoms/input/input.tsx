/* eslint-disable react/jsx-props-no-spreading */

import type { InputProps } from './types';

const Input = ({
  as = 'one-liner',
  color = 'light',
  className,
  disabled,
  icon,
  ...props
}: InputProps) => {
  const styles = [
    'transition-all block text-xs px-2 h-8 bg-transparent tracking-wide placeholder:tracking-wide font-sans focus:transition-none focus:outline-none w-full',
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
    <div className="relative">
      <input
        className={`${styles.join(' ')} ${className}`}
        disabled={disabled}
        {...props}
      />

      {icon && <div className="absolute pl-2 right-2 top-0">{icon}</div>}
    </div>
  );
};

export default Input;
