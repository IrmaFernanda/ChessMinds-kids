import { Board } from '@/components/Board'
import { resetGame } from '@renderer/services/gameService'
import { useContext } from 'react'
import GameContext from '@renderer/context/GameContext'
import { Ranks } from '@renderer/components/Board/Ranks'

const Game = () => {
  const { board, isGameOver, result, turn, color } = useContext(GameContext)
  const ranks =
    color === 'w'
      ? Array(8)
          .fill(0)
          .map((_, i) => 8 - i)
      : Array(8)
          .fill(0)
          .map((_, i) => i + 1)
  return (
    <div className="min-h-lvh flex items-center justify-center bg-[#222222]">
      <div className="h-[600px] w-[600px] flex items-center justify-center">
        <Board board={board} color={color} />
      </div>
      {!isGameOver && (
        <h2
          className="font-sans p-[30px] text-white"
          style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
        >
          JUEGAN {turn}
        </h2>
      )}
      {result && (
        <p className="" style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}>
          {result}
        </p>
      )}
    </div>
  )
}
export default Game
