export type SquareInfo = {
  id: string
  background: string
}

export type OptionInfo = {
  title: string
  description: string
}

export type OptionContent = string

export type TypeGame = {
  board: TypePiece[]
  isGameOver: boolean
  pendingPromotion: TypeMove
  turn: string
  result: string
}

export type TypePiece = {
  type: string
  color: string
}

export type TypeDrop = {
  type: string
  id: string
}

export type TypeMove = {
  color: string
  from: string
  to: string
  flags: string
  piece: string
  promotion: string
  san: string
  captured: string
}
