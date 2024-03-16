import { useEffect, useState } from 'react'
import { GameType, PieceType } from '@shared/models'
import { gameSubject, initGame, resetGame } from '@renderer/services/gameService'
import { Board } from '@/components/Board'
import { Subscription } from 'rxjs'

const Game = () => {
  const [board, setBoard] = useState<PieceType[]>([])
  const [isGameOver, setIsGameOver] = useState<boolean>()
  const [result, setResult] = useState<string | null>()
  const [turn, setTurn] = useState<string>('')

  useEffect(() => {
    initGame()
    const subscribe: Subscription = gameSubject.subscribe({
      next: (game: GameType | string) => {
        if (typeof game === 'string') {
          console.log('Error:', game)
          return
        }
        const { board, isGameOver, result, turn }: GameType = game
        setBoard(board)
        setIsGameOver(isGameOver)
        setResult(result)
        setTurn(turn)
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
      <div className="flex items-center justify-center">
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
export default Game
