import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Ranks = ({ className, ranks }) => {
  return (
    <div className={twMerge('', className)}>
      {ranks.map((rank) => (
        <span key={rank}>{rank}</span>
      ))}
    </div>
  )
}
