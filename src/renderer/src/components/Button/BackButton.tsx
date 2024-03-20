import { FaArrowLeft } from 'react-icons/fa'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { useNavigate } from 'react-router-dom'

export const BackButton = ({ className, ...props }: ActionButtonProps) => {
  const navigate = useNavigate()

  return (
    <ActionButton className={className} onClick={() => navigate(-1)} {...props}>
      <FaArrowLeft className="w-4 h-4 text-gray-600" />
    </ActionButton>
  )
}
