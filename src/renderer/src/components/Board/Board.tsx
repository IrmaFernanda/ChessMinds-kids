import { getCharacter } from '@renderer/helper'
import { PieceType } from '@shared/models'
import { useEffect, useState } from 'react'
import { BoardSquare } from './BoardSquare'
import { Files } from './Files'
import { Ranks } from './Ranks'

type BoardProps = { board: PieceType[][]; color: string }

export const Board = ({ board, color }: BoardProps) => {
  const [currBoard, setCurrBoard] = useState<PieceType[]>([])

  useEffect(() => {
    setCurrBoard(color === 'w' ? board.flat() : board.flat().reverse())
  }, [board])

  const getXYPosition = (i: number) => {
    const x = color === 'w' ? i % 8 : Math.abs((i % 8) - 7)
    const y = color === 'w' ? Math.abs(Math.floor(i / 8) - 7) : Math.floor(i / 8)
    return { x, y }
  }

  const isBack = (i: number) => {
    const { x, y } = getXYPosition(i)
    return (x + y) % 2 === 1
  }

  const getPosition = (i: number) => {
    const { x, y } = getXYPosition(i)
    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x]
    return `${letter}${y + 1}`
  }

  const ranks =
    color === 'w'
      ? Array(8)
          .fill(0)
          .map((_, i) => 8 - i)
      : Array(8)
          .fill(0)
          .map((_, i) => i + 1)
  const files =
    color === 'w'
      ? Array(8)
          .fill(0)
          .map((_, i) => getCharacter(i))
      : Array(8)
          .fill(0)
          .map((_, i) => getCharacter(7 - i))

  return (
    <div
      className="h-[600px] w-full grid"
      style={{ gridTemplateColumns: 'calc(.25*100px) calc(8*100px)' }}
    >
      <Ranks className="text-white" ranks={ranks} />
      <section className="flex flex-wrap h-[600px] w-[600px]">
        {currBoard.map((piece, i) => (
          <div key={i} className="w-[12.5%] h-[12.5%]">
            <BoardSquare piece={piece} black={isBack(i)} position={getPosition(i)} />
          </div>
        ))}
        <Files className="text-white" files={files} />
      </section>
    </div>
  )
}
