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

  if (disabled) {
    return (
      <button className={`${styles} ${className || ''}`} disabled>
        {label || children}
      </button>
    );
  }

  return (
    <button className={`${styles} ${className || ''}`}>
      {label || children}
    </button>
  );
};

export default Button;
