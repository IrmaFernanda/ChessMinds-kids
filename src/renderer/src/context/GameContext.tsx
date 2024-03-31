import { Exercise, PieceType } from '@shared/models'
import { createContext } from 'react'

export interface GameContextType {
  board: PieceType[]
  isGameOver?: boolean
  result?: string | null
  turn: string
  exercise?: Exercise
  color: string
}

const GameContext = createContext<GameContextType>({
  board: [],
  isGameOver: false,
  result: undefined,
  turn: '',
  color: ''
})

export default GameContext
