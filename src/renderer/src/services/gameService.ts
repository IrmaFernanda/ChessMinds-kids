import { Exercise, GameType, MoveType } from '@shared/models'
import { Configurator } from '@shared/types'
import { Chess } from 'chess.js'
import { BehaviorSubject } from 'rxjs'
import Swal from 'sweetalert2'

/** @ignore Casos de pruebas */
// const initialGame: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
// const testGame: string = '8/2kP4/2P4r/RK6/6KR/r4P2/4Pk2/8 b - - 0 1'
// const promotion: string = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
// const staleMate: string = '4k3/4P3/4K3/8/8/8/8/8 b - - 0 78'
// const checkMate: string = 'rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 4'
// const insufficientMaterial: string = '8/8/2k5/2q5/8/2n5/8/2K5 w - - 0 1'

const chess = new Chess()

export const gameSubject = new BehaviorSubject<GameType>({} as GameType)
export const configurator: Configurator = new Configurator()

export const initGame = () => {
  // const savedGame = localStorage.getItem('savedGame')
  // if (savedGame) {
  //   chess.load(savedGame)
  // }
  updateGame()
}

export const resetGame = () => {
  chess.reset()
  updateGame()
}

export const handleMove = (from: string, to: string) => {
  const promotions = chess.moves({ verbose: true }).filter((m: MoveType) => m.promotion)
  if (promotions.some((p: MoveType) => `${p.from}:${p.to}` === `${from}:${to}`)) {
    const pendingPromotion = { from, to, color: promotions[0].color }
    updateGame(pendingPromotion as MoveType)
  }
  const game: GameType | string = gameSubject.getValue()
  if (typeof game !== 'string') {
    const { pendingPromotion } = game
    if (!pendingPromotion) {
      move(from, to)
    }
  }
}

export const move = (from: string, to: string, promotion?: string) => {
  const tempMove: { from: string; to: string; promotion?: string } = { from, to }
  if (promotion) {
    tempMove.promotion = promotion
  }
  const legalMove = chess.move(tempMove)
  if (legalMove) {
    updateGame()
  }
}

export const loadExercise = (exerciseToLoad: Exercise) => {
  configurator.movesCount = 0
  configurator.exercise = exerciseToLoad
  const exercise = configurator.exercise
  chess.load(exercise.initPosition)
  updateGame()
}

export const validMove = (fromPosition: string, position: string): boolean => {
  const count = configurator.movesCount
  const moves = configurator.exercise.moves
  if (count !== moves.length) {
    const { from, to, response } = moves[count]
    if (from !== fromPosition || to !== position) {
      console.log('¡Ese no es el movimiento!')
      return true
    }
    handleMove(fromPosition, position)
    if (!response) {
      // Modal de felicitaciones
      Swal.fire({
        title: '¡Felicidades!',
        text: '¡Has completado el ejercicio!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
      configurator.movesCount++
      return false
    }
    computerMove(response)
    configurator.movesCount++
  }
  return false
}

const computerMove = ({ from, to }) => {
  move(from, to)
}

const updateGame = (pendingPromotion?: MoveType) => {
  const turn = chess.turn() === 'w' ? 'BLANCAS' : 'NEGRAS'
  const isGameOver = chess.game_over()
  const newGame: GameType = {
    board: chess.board(),
    pendingPromotion,
    isGameOver,
    turn: turn,
    result: isGameOver ? getGameResult() : null
  }
  localStorage.setItem('savedGame', chess.fen())
  gameSubject.next(newGame)
}

const getGameResult = () => {
  if (chess.in_checkmate()) {
    const winner = chess.turn() === 'w' ? 'NEGRAS' : 'BLANCAS'
    return `CHECKMATE - GANADOR - ${winner}`
  } else if (chess.in_draw()) {
    let reason = '50 - MOVES - RULE'
    if (chess.in_stalemate()) {
      reason = 'STALEMATE'
    } else if (chess.insufficient_material()) {
      reason = 'INSUFFICIENT MATERIAL'
    } else if (chess.in_threefold_repetition()) {
      reason = 'REPETITION'
    }
    return `DRAW - ${reason}`
  } else {
    return 'UNKNOWN REASON'
  }
}
