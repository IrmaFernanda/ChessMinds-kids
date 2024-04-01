import { Board } from '@/components/Board'
import { resetGame } from '@renderer/services/gameService'
import { useContext } from 'react'
import GameContext from '@renderer/context/GameContext'

const Game = () => {
  const { board, isGameOver, result, turn, color } = useContext(GameContext)
  return (
    <div className="min-h-lvh flex items-center justify-center bg-[#222222]">
      <div className="h-fit w-fit flex items-center justify-center">
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
