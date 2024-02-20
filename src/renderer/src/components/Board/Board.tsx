import { getCharacter } from '@renderer/helper'
import { twMerge } from 'tailwind-merge'
import { Ranks } from './bits/Ranks'
import { Files } from './bits/Files'

export const Board = () => {
  const getClassName = (i, j) => {
    return (i + j) % 2 === 0 ? 'bg-[#b48764]' : 'bg-[#f0d8b7]'
  }

  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i)
  const files = Array(8)
    .fill()
    .map((x, i) => getCharacter(i))

  return (
    <div
      className="grid h-screen"
      style={{ gridTemplateColumns: 'calc(0.25 * 100px) calc(8 * 100px)' }}
    >
      <Ranks className="flex flex-col items-center justify-around" ranks={ranks} />
      <div className="grid grid-cols-8 grid-rows-8 ">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div
              key={file + '-' + rank}
              className={twMerge('size-[100px] text-black', getClassName(i, j))}
            ></div>
          ))
        )}
      </div>
      <Files className="flex h-.25-100px col-[2] items-center justify-around" files={files} />
    </div>
  )
}
