import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SquareProps = { black: boolean } & ComponentProps<'div'>

export const Square = ({ black, children }: SquareProps) => {
  const bgClass = black ? 'bg-[#dcfce7]' : 'bg-[#14532d]'
  //blanco: green-100 negras: esmeral-900
  return <div className={twMerge('w-full h-full', bgClass)}>{children}</div>
}
