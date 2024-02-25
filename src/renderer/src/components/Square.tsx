import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SquareProps = { black: boolean } & ComponentProps<'div'>

export const Square = ({ black, children }: SquareProps) => {
  const bgClass = black ? 'bg-[#B59963]' : 'bg-[#F0D9B5]'

  return <div className={twMerge('w-full h-full', bgClass)}>{children}</div>
}
