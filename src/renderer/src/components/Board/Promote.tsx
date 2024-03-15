import { MoveType } from '@shared/models'
import { useEffect, useState } from 'react'
import { Square } from './Square'
import { move } from '@renderer/services/gameService'

type PromoteProps = { promotion: MoveType }

const promotionPieces = ['q', 'r', 'n', 'b']

export const Promote = ({ promotion: { from, to, color } }: PromoteProps) => {
  const [imageSources, setImageSources] = useState<string[]>([])

  useEffect(() => {
    const loadImages = async () => {
      const sources = await Promise.all(
        promotionPieces.map(async (p) => {
          const imageModule = await import(`@/assets/pieces/${color}${p}.png`)
          return imageModule.default
        })
      )
      setImageSources(sources)
    }

    loadImages()
  }, [color])

  return (
    <div className="w-full h-full flex flex-wrap">
      {promotionPieces.map((p, i) => (
        <div key={i} className="w-1/2 h-1/2">
          <Square black={i % 3 === 0}>
            <div className="w-full h-full" onClick={() => move(from, to, p)}>
              <img src={imageSources[i]} alt="" className="max-w-full max-h-full cursor-pointer" />
            </div>
          </Square>
        </div>
      ))}
    </div>
  )
}
