import { FaArrowLeft } from 'react-icons/fa'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const BackButton = ({ className, ...props }: ActionButtonProps) => {
  const handleClick = () => {
    window.history.back()
  }

  return (
    <ActionButton className={className} onClick={handleClick} {...props}>
      <FaArrowLeft className="w-4 h-4 text-gray-600" />
    </ActionButton>
  )
}
