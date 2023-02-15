import type { ButtonVariants, ButtonType } from '../types';
import buildBaseStyles from './build_base_styles';

const buildStylesForLink = (
  as: ButtonType,
  variant: ButtonVariants,
  disabled: boolean
): string => {
  let baseStyle = buildBaseStyles(as, variant, disabled);
  baseStyle = `${baseStyle} w-auto inline-block text-center no-underline visited:no-underline`;

  if (disabled)
    return `${baseStyle} pointer-events-none cursor-default opacity-40`;

  return baseStyle;
};

export default buildStylesForLink;
