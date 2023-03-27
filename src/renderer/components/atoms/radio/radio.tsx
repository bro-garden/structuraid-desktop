import { useState } from 'react';
import getRandomHex from '../../../utils/get-random-hex';
import type { RadioProps } from './types';

const Radio = ({ checked, id, onChange, children, disabled }: RadioProps) => {
  const [value, setValue] = useState<boolean>(checked || false);
  const inputId = id || `checkbox-${getRandomHex(16)}`;

  const handleChange = () => {
    setValue(true);
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
        checked={value}
        onChange={handleChange}
        disabled={disabled}
      />

      <span
        className={`
          w-4 h-4 rounded-full border flex items-center justify-center transition-all
          ${disabled ? 'bg-gray-soft border-gray-dark-soft' : 'bg-blue-white'}
          ${!disabled && value ? 'border-soft-blue' : 'border-secondary'}
        `}
      >
        <span
          className={`
            block w-2 h-2 rounded-full
            ${value ? 'visible' : 'invisible'}
            ${disabled ? 'bg-gray-dark-soft' : 'bg-soft-blue'}
          `}
        />
      </span>

      {children}
    </label>
  );
};

export default Radio;
