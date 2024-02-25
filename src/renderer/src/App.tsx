import { useEffect, useState } from 'react'
import { Board } from './components/Board'
import { gameSubject, initGame, resetGame } from './services/gameService'
import { TypeGame } from '@shared/models'

const App = () => {
  const [board, setBoard] = useState([])
  const [isGameOver, setIsGameOver] = useState<boolean>()
  const [result, setResult] = useState<string>()
  const [turn, setTurn] = useState<string>()

  useEffect(() => {
    initGame()
    const subscribe = gameSubject.subscribe({
      next: (game: TypeGame) => {
        setBoard(game.board)
        setIsGameOver(game.isGameOver)
        setResult(game.result)
        setTurn(game.turn)
      }
    })
    return () => subscribe.unsubscribe()
  }, [])

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
      <div className="w-[600px] h-[600px]">
        <Board board={board} turn={turn} />
      </div>
      {result && (
        <p className="" style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}>
          {result}
        </p>
      )}
    </div>
  )
}
export default App
