import { useState, useEffect } from 'react';

import type { ToggleProps } from './types';

const Toggle = ({ checked, onChange, disabled = false }: ToggleProps) => {
  const [value, setValue] = useState<boolean>(checked || false);

  useEffect(() => {
    setValue(checked || false);
  }, [checked]);

  const handleClick = () => {
    const newValue = !value;

    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="relative w-11 z-0">
      <input
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={`
          block w-11 h-6 border-2 rounded-xl transition-all cursor-pointer
          ${value ? 'border-soft-blue' : 'border-gray-soft'}
          ${disabled ? 'bg-gray-soft-light' : 'hover:border-soft-blue'}
        `}
      />
      <span
        className={`
          block w-4 h-4 rounded-full absolute top-1 transition-all
          ${disabled ? 'z-0' : '-z-10'}
          ${value ? 'bg-soft-blue right-1' : 'bg-gray-soft left-1'}
        `}
      />
    </div>
  );
};

export default Toggle;
