import type { TextProps } from './types';
import { resolveElement, buildStylesFor, returnTextColor } from './helper';

const Text = ({ as, variant, useColor, className, children }: TextProps) => {
  const Element = resolveElement(as);
  const styles = buildStylesFor(variant || '', as);
  const TextColor = returnTextColor(as, useColor || '');

  return (
    <Element className={`${styles} ${TextColor} ${className || ''}`}>
      {children}
    </Element>
  );
};

export default Text;
