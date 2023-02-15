import type { TextTag, TextUsage } from '../types';
import { DEFAULT_TAGS } from './constants';

const resolveElement = (as: TextUsage): TextTag => {
  return DEFAULT_TAGS[as];
};

export default resolveElement;
