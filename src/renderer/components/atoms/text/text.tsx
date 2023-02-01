import type { TextProps } from './types';
import { resolveElement, buildStylesFor, returnTextColor } from './helper';

const Text = ({ as, variant, color, className, children }: TextProps) => {
  const Element = resolveElement(as);
  const styles = buildStylesFor(variant || 'normal', as);
  const TextColor = returnTextColor(as, color || 'primary');

  return (
    <Element className={`${styles} ${TextColor} ${className || ''}`}>
      {children}
    </Element>
  );
};

export default Text;
