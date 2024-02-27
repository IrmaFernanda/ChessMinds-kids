import { DropType, MoveType, PieceType } from '@shared/models'
import { Piece } from './Piece'
import { Square } from './Square'
import { useDrop } from 'react-dnd'
import { gameSubject, handleMove } from '@renderer/services/gameService'
import { useEffect, useState } from 'react'
import { Promote } from './Promote'

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
    const subscribe = gameSubject.subscribe(
      ({ pendingPromotion }: { pendingPromotion?: MoveType }) =>
        pendingPromotion && pendingPromotion.to === position
          ? setPromotion(pendingPromotion)
          : setPromotion(null)
    )
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
