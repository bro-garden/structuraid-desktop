/* eslint-disable react/jsx-props-no-spreading */
import type { AnchorProps } from './types';
import { buildStylesForAnchorOrLink } from './helper';

const AnchorButton = ({
  className,
  as = 'primary',
  variant = 'big',
  disabled = false,
  children,
  ...props
}: AnchorProps) => {
  const styles = buildStylesForAnchorOrLink(as, variant, disabled);

  return (
    <a className={`${styles} ${className || ''}`} {...props}>
      {children}
    </a>
  );
};

export default AnchorButton;
