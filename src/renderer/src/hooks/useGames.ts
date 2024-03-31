import { gameSubject, initGame, loadExercise } from '@renderer/services/gameService'
import { exercises } from '@renderer/store/exercises'
import { Exercise, GameType, PieceType } from '@shared/models'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Subscription } from 'rxjs'

export const useGames = () => {
  const { exerciseId } = useParams()
  const [board, setBoard] = useState<PieceType[][]>([])
  const [isGameOver, setIsGameOver] = useState<boolean>()
  const [result, setResult] = useState<string | null>()
  const [turn, setTurn] = useState<string>('')
  const [exercise, setExercise] = useState<Exercise>()
  const [color, setColor] = useState<string>('w')

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
    const current: Exercise = exercises.find((e) => e.id === exerciseId) as Exercise
    setExercise(current)
    setColor(current.color)
    loadExercise(current)
    return () => subscribe.unsubscribe()
  }, [exerciseId])

  return { board, isGameOver, result, turn, exercise, color }
}
