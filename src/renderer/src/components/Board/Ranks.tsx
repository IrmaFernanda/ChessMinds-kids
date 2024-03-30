import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type RanksProps = { ranks: number[] } & ComponentProps<'div'>

export const Ranks = ({ ranks, className, ...props }: RanksProps) => {
  return (
    <div className={twMerge(className, 'flex flex-col items-center justify-around')} {...props}>
      {ranks.map((rank) => (
        <span key={`rank${rank}`}>{rank}</span>
      ))}
    </div>
  )
}
