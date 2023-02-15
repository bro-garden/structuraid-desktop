/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';

import type { LinkButtonProps } from './types';
import { buildStylesForAnchorOrLink } from './helper';

const LinkButton = ({
  className,
  as = 'primary',
  variant = 'big',
  disabled = false,
  children,
  ...props
}: LinkButtonProps) => {
  const styles = buildStylesForAnchorOrLink(as, variant, disabled);

  return (
    <Link className={`${styles} ${className || ''}`} {...props}>
      {children}
    </Link>
  );
};

export default LinkButton;
