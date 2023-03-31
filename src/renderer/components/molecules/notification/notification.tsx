import { useState, useEffect } from 'react';
import {
  SkipIcon,
  AlertIcon,
  CheckIcon,
  BookmarkIcon,
  XIcon,
} from '@primer/octicons-react';
import { Text } from '../../atoms';

import type { NotificationProps } from './types';

const ICON_MAPPER = {
  error: SkipIcon,
  warning: AlertIcon,
  success: CheckIcon,
  info: BookmarkIcon,
};

const BG_COLORS_MAPPER = {
  error: {
    dark: 'bg-notice-dark-red',
    base: 'bg-notice-red',
    soft: 'bg-notice-soft-red',
  },
  warning: {
    dark: 'bg-notice-yellow',
    base: 'bg-notice-yellow',
    soft: 'bg-notice-soft-yellow',
  },
  success: {
    dark: 'bg-notice-green',
    base: 'bg-notice-green',
    soft: 'bg-notice-soft-green',
  },
  info: {
    dark: 'bg-primary',
    base: 'bg-secondary',
    soft: 'bg-soft-blue',
  },
};

const Notification = ({
  message,
  type,
  children,
  open: defaultOpen = true,
  onVisibilityChange,
}: NotificationProps) => {
  const Icon = ICON_MAPPER[type];
  const bgColorScheme = BG_COLORS_MAPPER[type];
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  const handleClose = () => {
    setOpen(false);
    if (onVisibilityChange) onVisibilityChange(false);
  };

  return (
    <div
      className={`
        flex items-center gap-4
        transition-all
        ${bgColorScheme.soft}
        ${
          open ? 'w-full h-12 opacity-100' : 'w-0 h-0 overflow-hidden opacity-0'
        }
      `}
    >
      <div
        className={`${bgColorScheme.dark} w-12 h-12 flex flex-grow-0 flex-shrink-0 justify-center items-center`}
      >
        <Icon size={24} className="text-blue-white" />
      </div>

      <Text
        as="body-small-interface"
        className="w-full flex-grow-1 flex-shrink-1"
        color="primary"
      >
        {message}
      </Text>

      {children && (
        <div className="flex items-center gap-3 flex-grow-0 flex-shrink-0">
          {children}
        </div>
      )}

      <button
        type="button"
        className="block w-10 h-10 hover:opacity-50 transition-all flex-grow-0 flex-shrink-0"
        onClick={handleClose}
      >
        <XIcon size={16} className="text-primary" />
      </button>
    </div>
  );
};

export default Notification;
