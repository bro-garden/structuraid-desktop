import type { TextUsage, TextVariant } from '../types';
import { DOCUMENT_VARIANTS, INTERFACE_VARIANTS } from './constants';
import buildStylesForDocument from './buildStylesForDocument';
import buildStylesForInterface from './buildStylesForInterface';

const buildStylesFor = (variantName: TextVariant, as: TextUsage) => {
  if (DOCUMENT_VARIANTS.includes(as)) {
    return buildStylesForDocument(as);
  }
  if (INTERFACE_VARIANTS.includes(as)) {
    return buildStylesForInterface(variantName, as);
  }
  throw new Error("'as' prop does not have a valid value");
};

export default buildStylesFor;
