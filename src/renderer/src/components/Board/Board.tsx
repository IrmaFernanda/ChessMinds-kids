import { PieceType } from '@shared/models'
import { BoardSquare } from './BoardSquare'
import { useEffect, useState } from 'react'
import { getCharacter } from '@renderer/helper'

type BoardProps = { board: PieceType[]; turn: string }

export const Board = ({ board, turn }: BoardProps) => {
  const [currBoard, setCurrBoard] = useState<PieceType[]>([])

  useEffect(() => {
    setCurrBoard(board.flat())
  }, [board, turn])

  const getXYPosition = (i: number) => {
    const x = i % 8
    const y = Math.abs(Math.floor(i / 8) - 7)
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

  const ranks = Array(8)
    .fill(0)
    .map((_, i) => 8 - i)
  const files = Array(8)
    .fill(0)
    .map((_, i) => getCharacter(i))

  return (
    <section className="flex flex-wrap h-full w-full">
      {currBoard.map((piece, i) => (
        <div key={i} className="w-[12.5%] h-[12.5%]">
          <BoardSquare piece={piece} black={isBack(i)} position={getPosition(i)} />
        </div>
      ))}
    </section>
  )
}
