import { PieceType } from '@shared/models'
import { useEffect, useState } from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'

type PieceProps = { piece: PieceType; position: string }

export const Piece = ({ piece: { type, color }, position }: PieceProps) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: 'piece', id: `${position}.${color}.${type}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() }
    }
  })
  const [pieceImg, setPieceImg] = useState<string>('')

  useEffect(() => {
    const loadImage = async () => {
      try {
        const module: string = await Promise.all([
          import(`../../assets/pieces/${color}${type}.png`)
            .then((module) => module.default)
            .catch((error) => console.error('Error loading image:', error))
        ]).then((module) => module[0])
        setPieceImg(module)
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
  }, [type, color])

  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImg} />
      <div
        className="cursor-grab w-full h-full flex items-center justify-center"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        {pieceImg && <img src={pieceImg} alt="" className="max-w-full max-h-full" />}
      </div>
    </>
  )
}
