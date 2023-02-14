/* eslint-disable react/button-has-type */
import type { ButtonProps } from './types';
import { buildStylesFor } from './helper';

const Button = ({
  className,
  as = 'primary',
  variant = 'big',
  disabled = false,
  children,
}: ButtonProps) => {
  const styles = buildStylesFor(as, variant, disabled);

  return (
    <button className={`${styles} ${className || ''}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
