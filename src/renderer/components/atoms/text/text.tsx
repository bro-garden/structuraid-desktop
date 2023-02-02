import type { TextProps } from './types';
import { resolveElement, buildStylesFor, returnTextColor } from './helper';

const Text = ({
  as,
  variant = 'normal',
  color = 'primary',
  className,
  children,
}: TextProps) => {
  const Element = resolveElement(as);
  const styles = buildStylesFor(variant, as);
  const TextColor = returnTextColor(as, color);

  return (
    <Element className={`${styles} ${TextColor} ${className || ''}`}>
      {children}
    </Element>
  );
};

export default Text;
