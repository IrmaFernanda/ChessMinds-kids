import { FaArrowLeft } from 'react-icons/fa'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { Link } from 'react-router-dom'

export const BackButton = ({ className, ...props }: ActionButtonProps) => {
  return (
    <Link to={-1}>
      <ActionButton className={className} {...props}>
        <FaArrowLeft className="w-4 h-4 text-gray-600" />
      </ActionButton>
    </Link>
  )
}
