/* eslint-disable react/button-has-type */
import type { ButtonProps } from './types';
import { buildStylesFor } from './helper';

const Button = ({
  className,
  label,
  type = 'primary',
  variant = 'big',
  children,
}: ButtonProps) => {
  const styles = buildStylesFor(type, variant);

  return (
    <button className={`${styles} ${className || ''}`}>
      {label || children}
    </button>
  );
};

export default Button;
