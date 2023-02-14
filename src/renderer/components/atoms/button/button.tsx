/* eslint-disable react/button-has-type */
import type { ButtonProps } from './types';
import { buildStylesFor } from './helper';

const Button = ({
  className,
  label,
  type = 'primary',
  variant = 'big',
  disabled = false,
  children,
}: ButtonProps) => {
  const styles = buildStylesFor(type, variant, disabled);

  return (
    <button className={`${styles} ${className || ''}`} disabled={disabled}>
      {label || children}
    </button>
  );
};

export default Button;
