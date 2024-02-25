import { TypePiece } from '@shared/models'
import { BoardSquare } from './BoardSquare'
import { useEffect, useState } from 'react'

type BoardProps = { board: TypePiece[][]; turn: string }

export const Board = ({ board, turn }: BoardProps) => {
  const [currBoard, setCurrBoard] = useState<TypePiece[]>([])

  useEffect(() => {
    setCurrBoard(turn === 'w' ? board.flat() : board.flat().reverse())
  }, [board, turn])

  const getXYPosition = (i: number) => {
    const x = turn === 'w' ? i % 8 : Math.abs((i % 8) - 7)
    const y = turn === 'w' ? Math.abs(Math.floor(i / 8) - 7) : Math.floor(i / 8)
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

  return (
    <section className="w-full h-full flex flex-wrap">
      {currBoard.map((piece, i) => (
        <div key={i} className="w-[12.5%] h-[12.5%]">
          <BoardSquare piece={piece} black={isBack(i)} position={getPosition(i)} />
        </div>
      ))}
    </section>
  )
}
