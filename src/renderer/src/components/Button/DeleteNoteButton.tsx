import { FaRegTrashCan } from 'react-icons/fa6'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="w-4 h-4 text-yellow-600" />
    </ActionButton>
  )
}
