export type GameType = {
  board: PieceType[][]
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
  lesson: string
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
  menuItems?: MenuItemType[]
  path: string
}

export type ExerciseType = {
  id: string
  code: string
  name: string
}

export type Exercise = {
  id: string
  code: string
  level: Level
  type: ExerciseType
  name: string
  color: 'w' | 'b'
  initPosition: string
  moves: Move[]
}

export type Move = {
  from: string
  to: string
  response?: {
    from: string
    to: string
  }
}

export type Level = {
  id: string
  title: string
  description: string
  image: string
}
