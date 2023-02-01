import type { TextUsage, TextVariant } from '../types';
import { DOCUMENT_VARIANTS } from './constants';
import buildStylesForDocument from './buildStylesForDocument';
import buildStylesForInterface from './buildStylesForInterface';

const buildStylesFor = (variantName: TextVariant, as: TextUsage): string => {
  if (DOCUMENT_VARIANTS.includes(as)) {
    return buildStylesForDocument(as);
  }

  return buildStylesForInterface(variantName, as);
};

export default buildStylesFor;
