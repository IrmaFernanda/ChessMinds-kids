export type GameType = {
  board: PieceType[]
  isGameOver: boolean
  pendingPromotion: MoveType | undefined
  turn: string
  result: string | null
}

export type PieceType = {
  type: string
  color: string
}

export type DropType = {
  type: string
  id: string
}

export type MoveType = {
  color: string
  from: string
  to: string
  flags: string
  piece: string
  promotion: string
  san: string
  captured: string
}

export type MenuItemType = {
  id: string
  title: string
  description: string
  image: string
}

export type MenuType = {
  difficulty: number
  items: MenuItemType[]
}

export type MainMenuType = {
  items: MainMenuItemType[]
}

export type MainMenuItemType = {
  id: string
  title: string
  path: string
}
