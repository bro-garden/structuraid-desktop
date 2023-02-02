/* eslint-disable react/button-has-type */
import type { ButtonProps } from './types';

const Button = ({ label }: ButtonProps) => {
  // const Element = resolveElement(as);
  // const styles = buildStylesFor(variant, as);
  // const TextColor = returnTextColor(as, color);

  return (
    <button className="hover:bg-secondary hover:text-blue-white bg-blue-white text-9xl text-secondary py-4 px-4 rounded">
      {label}
    </button>
  );
};

export default Button;
