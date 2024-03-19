import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SquareProps = { black: boolean } & ComponentProps<'div'>

export const Square = ({ black, children }: SquareProps) => {
  const bgClass = black ? 'bg-[#d9f99d]' : 'bg-[#047857]'
  return <div className={twMerge('w-full h-full', bgClass)}>{children}</div>
}
