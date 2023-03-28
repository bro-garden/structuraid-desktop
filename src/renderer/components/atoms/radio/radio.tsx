import { useState, useEffect } from 'react';
import getRandomHex from '../../../utils/get-random-hex';
import type { RadioProps } from './types';

const Radio = ({
  checked,
  id,
  onChange,
  children,
  disabled,
  name,
  value,
}: RadioProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);
  const inputId = id || `checkbox-${getRandomHex(16)}`;

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  const handleChange = () => {
    setIsChecked(true);
    if (onChange) onChange(true);
  };

  return (
    <label
      htmlFor={inputId}
      className={`
        flex items-center gap-2
        ${disabled ? 'text-gray-soft' : 'text-primary'}
      `}
    >
      <input
        type="radio"
        id={inputId}
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
      />

      <span
        className={`
          w-4 h-4 rounded-full border flex items-center justify-center transition-all
          ${disabled ? 'bg-gray-soft border-gray-dark-soft' : 'bg-blue-white'}
          ${!disabled && isChecked ? 'border-soft-blue' : 'border-secondary'}
        `}
      >
        <span
          className={`
            block w-2 h-2 rounded-full
            ${isChecked ? 'visible' : 'invisible'}
            ${disabled ? 'bg-gray-dark-soft' : 'bg-soft-blue'}
          `}
        />
      </span>

      {children}
    </label>
  );
};

export default Radio;
