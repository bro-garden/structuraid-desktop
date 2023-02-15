import type { ButtonVariants, ButtonType } from '../types';
import buildBaseStyles from './buildBaseStyles';

const buildStylesForAnchor = (
  as: ButtonType,
  variant: ButtonVariants,
  disabled: boolean
): string => {
  let baseStyle = buildBaseStyles(as, variant, disabled);
  baseStyle = `${baseStyle} no-underline visited:no-underline`;

  if (disabled) return `${baseStyle} opacity-40`;

  return `${baseStyle} cursor-pointer`;
};

export default buildStylesForAnchor;
