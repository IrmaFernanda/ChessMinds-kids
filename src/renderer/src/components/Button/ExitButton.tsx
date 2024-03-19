// ExitButton.tsx

import { FaSignOutAlt } from 'react-icons/fa';
import { ActionButton, ActionButtonProps } from './ActionButton';

export const ExitButton = ({ size = 20, ...props }: ActionButtonProps & { size?: number }) => {
  const handleExit = () => {
    const electron = window.require('electron');
    const { remote } = electron;
    const currentWindow = remote.getCurrentWindow();
    currentWindow.close();
  };

  return (
    <ActionButton onClick={handleExit} {...props}>
      <FaSignOutAlt size={size} className="text-gray-600" />
    </ActionButton>
  );
};

