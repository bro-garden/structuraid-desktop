/* eslint-disable  react/jsx-props-no-spreading */
/* eslint-disable  react/button-has-type */
import type { ButtonProps } from './types';
import { buildStylesForButton } from './helper';

const Button = ({
  className,
  as = 'primary',
  variant = 'big',
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  const styles = buildStylesForButton(as, variant, disabled);

  return (
    <button
      className={`${styles} ${className || ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
