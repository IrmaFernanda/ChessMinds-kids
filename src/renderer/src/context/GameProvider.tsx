import { useGames } from '@renderer/hooks/useGames'
import GameContext from './GameContext'

type GameProviderProps = { children: React.ReactNode }

export const GameProvider = ({ children }: GameProviderProps) => {
  const { board, isGameOver, result, turn, exercise, color } = useGames()
  return (
    <GameContext.Provider value={{ board, isGameOver, result, turn, exercise, color }}>
      {children}
    </GameContext.Provider>
  )
}
