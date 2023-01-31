import type { TextProps } from './types';

const Text = ({ x }: TextProps) => {
  const style = x === 'sm' ? 'text-sm' : 'text-xl';

  return <h1 className={`text-black ${style}`}>HOLI TEA {x}</h1>;
};

export default Text;
