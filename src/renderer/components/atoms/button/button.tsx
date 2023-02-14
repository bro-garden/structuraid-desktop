/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import type { ButtonProps } from './types';
import SimpleButton from './simpleButton';
import AnchorButton from './anchorButton';

const Button = ({ useTag, children, ...props }: ButtonProps) => {
  switch (useTag) {
    case 'anchor':
      return <AnchorButton {...props}>{children}</AnchorButton>;
    case 'button':
      return <SimpleButton {...props}>{children}</SimpleButton>;
    default:
      return <></>;
  }
};

export default Button;
