import { DropType, GameType, MoveType, PieceType } from '@shared/models'
import { Piece } from './Piece'
import { Square } from './Square'
import { useDrop } from 'react-dnd'
import { gameSubject, handleMove } from '@renderer/services/gameService'
import { useEffect, useState } from 'react'
import { Promote } from './Promote'
import { Subscription } from 'rxjs'

type BoardSquareProps = { piece: PieceType; black: boolean; position: string }

export const BoardSquare = ({ piece, black, position }: BoardSquareProps) => {
  const [promotion, setPromotion] = useState<MoveType | null>(null)
  const [, drop] = useDrop({
    accept: 'piece',
    drop: (item: DropType) => {
      const [fromPosition] = item.id.split('.')
      handleMove(fromPosition, position)
    }
  })

  useEffect(() => {
    const subscribe: Subscription = gameSubject.subscribe({
      next: (game: GameType | string) => {
        if (typeof game === 'string') {
          console.log('Error:', game)
          return
        }
        const pendingPromotion = game.pendingPromotion
        pendingPromotion && pendingPromotion.to === position
          ? setPromotion(pendingPromotion)
          : setPromotion(null)
      },
      error: (error) => console.error('Error:', error)
    })
    return () => subscribe.unsubscribe()
  }, [position])

  return (
    <div className="w-full h-full" ref={drop}>
      <Square black={black}>
        {promotion ? (
          <Promote promotion={promotion} />
        ) : piece ? (
          <Piece piece={piece} position={position} />
        ) : null}
      </Square>
    </div>
  )
}
