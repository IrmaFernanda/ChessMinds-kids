import { Square } from './Square'
import { move } from '@shared/Game'

const promotionPieces = ['R', 'N', 'B', 'Q']

export const Promote = ({ promotion: { from, to, color } }) => {
  return (
    <div className="board">
      {promotionPieces.map((p, i) => (
        <div key={i} className="promote-square">
          <Square black={i % 3 === 0}>
            <div className="piece-container" onClick={() => move(from, to, p)}>
              <img src={`assets/${p}${color}.png`} alt={p} className="piece cursor-pointer" />
            </div>
          </Square>
        </div>
      ))}
    </div>
  )
}
