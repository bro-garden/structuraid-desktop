import type { ButtonVariants, ButtonType } from '../types';
import buildBaseStyles from './buildBaseStyles';

const buildStylesForButton = (
  as: ButtonType,
  variant: ButtonVariants,
  disabled: boolean
): string => {
  const baseStyle = buildBaseStyles(as, variant, disabled);

  if (disabled) return `${baseStyle} disabled:opacity-40`;

  return baseStyle;
};

export default buildStylesForButton;
