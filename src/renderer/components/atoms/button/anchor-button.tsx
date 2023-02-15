/* eslint-disable react/jsx-props-no-spreading */
import type { AnchorProps } from './types';
import { buildStylesForAnchor } from './helper';

const AnchorButton = ({
  className,
  as = 'primary',
  variant = 'big',
  disabled = false,
  children,
  ...props
}: AnchorProps) => {
  const styles = buildStylesForAnchor(as, variant, disabled);

  return (
    <a className={`${styles} ${className || ''}`} {...props}>
      {children}
    </a>
  );
};

export default AnchorButton;
