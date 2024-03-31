import { Board } from '@/components/Board'
import { resetGame } from '@renderer/services/gameService'
import { useContext } from 'react'
import GameContext from '@renderer/context/GameContext'

const Game = () => {
  const { board, isGameOver, result, turn, color } = useContext(GameContext)
  return (
    <div className="min-h-lvh flex items-center justify-center bg-[#222222]">
      {isGameOver && (
        <h2
          className="font-sans p-[10px] text-white"
          style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
        >
          GAME OVER
          <button onClick={resetGame}>
            <span
              className="mt-[20px] cursor-pointer bg-[#3F3F3F] rounded-[10px]"
              style={{ border: '2px solid white' }}
            >
              New Game
            </span>
          </button>
        </h2>
      )}
      <div className="h-[800px] w-[800px] flex items-center justify-center">
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
