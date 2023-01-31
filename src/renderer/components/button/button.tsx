import type { ButtonProps } from './types';

const Button = ({ x }: ButtonProps) => {
  const style = x === 'sm' ? 'text-sm' : 'text-xl';

  return <h1 className={`text-black ${style}`}>HOLI {x}</h1>;
};

export default Button;
