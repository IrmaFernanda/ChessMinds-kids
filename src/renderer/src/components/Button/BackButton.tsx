import { FaArrowLeft } from 'react-icons/fa';
import { ActionButton, ActionButtonProps } from './ActionButton';

export const BackButton = ({ ...props }: ActionButtonProps) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <ActionButton onClick={handleGoBack} {...props}>
      <FaArrowLeft className="w-4 h-4 text-gray-600" />
    </ActionButton>
  );
};
