import { useOptionsList } from '@renderer/hooks/useOptionsList'
import { ComponentProps } from 'react'
import { isEmpty } from 'lodash'
import { twMerge } from 'tailwind-merge'
import { OptionPreview } from './OptionPreview'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const OptionPreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { options, selectedOptionIndex, handleOptionSelect } = useOptionsList({ onSelect })

  if (!options) return null

  if (isEmpty(options)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No existen ejercicios para este nivel </span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {options.map((option, index) => (
        <OptionPreview key={option.title} />
      ))}
    </ul>
  )
}
