import { SquareInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type SquareProps = SquareInfo & ComponentProps<'div'>

export const Square = ({ id, className, ...props }: SquareProps) => {
  return (
    <div className={className} {...props}>
      Square
    </div>
  )
}
