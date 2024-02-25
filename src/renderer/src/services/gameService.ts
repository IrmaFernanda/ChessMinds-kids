import { TypeGame, TypeMove } from '@shared/models'
import { Chess } from 'chess.js'
import { BehaviorSubject } from 'rxjs'

const promotion: string = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
const staleMate: string = '4k3/4P3/4K3/8/8/8/8/8 b - - 0 78'
const checkMate: string = 'rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 4'
const insufficientMaterial: string = '8/8/2k5/2q5/8/2n5/8/2K5 w - - 0 1'

const chess = new Chess()

export const gameSubject = new BehaviorSubject({})

export const initGame = () => {
  const savedGame = localStorage.getItem('savedGame')
  if (savedGame) {
    chess.load(savedGame)
  }
  updateGame()
}

export const resetGame = () => {
  chess.reset()
  updateGame()
}

export const handleMove = (from, to) => {
  const promotions = chess.moves({ verbose: true }).filter((m) => m.promotion)
  console.table(promotions)
  if (promotions.some((p: TypeMove) => `${p.from}:${p.to}` === `${from}:${to}`)) {
    console.log('El usuario va a reclamar una promoción')
    const pendingPromotion = { from, to, color: promotions[0].color }
    updateGame(pendingPromotion as TypeMove)
  }
  const { pendingPromotion }: { pendingPromotion?: TypeMove } = gameSubject.getValue()
  if (!pendingPromotion) {
    move(from, to)
  }
}

export const move = (from, to, promotion?) => {
  console.log(from, to, promotion)
  const tempMove: { from; to; promotion? } = { from, to }
  if (promotion) {
    tempMove.promotion = promotion
  }
  const legalMove = chess.move(tempMove)

  if (legalMove) {
    updateGame()
  }
}

const updateGame = (pendingPromotion?: TypeMove) => {
  const isGameOver = chess.game_over()
  const newGame: TypeGame = {
    board: chess.board(),
    pendingPromotion,
    isGameOver,
    turn: chess.turn(),
    result: isGameOver ? getGameResult() : null
  }
  localStorage.setItem('savedGame', chess.fen())
  gameSubject.next(newGame)
}

const getGameResult = () => {
  if (chess.in_checkmate()) {
    const winner = chess.turn() === 'w' ? 'BLACK' : 'WHITE'
    return `CHECKMATE - WINNER - ${winner}`
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
