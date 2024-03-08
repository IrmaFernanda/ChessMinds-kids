import { MenuItemType } from '@shared/models'

export const menuItems: MenuItemType[] = [
  {
    id: `torre`,
    title: `La Torre`,
    description: `Se mueve en línea recta`,
    image: `wr`,
    lesson: `torre`
  },
  {
    id: `alfil`,
    title: `El Alfil`,
    description: `Se mueve en diagonal`,
    image: `wb`,
    lesson: `alfil`
  },
  {
    id: `dama`,
    title: `La Dama`,
    description: `Dama = Torre + Alfil`,
    image: `wq`,
    lesson: `dama`
  },
  {
    id: `rey`,
    title: `El Rey`,
    description: `La pieza más importante`,
    image: `wk`,
    lesson: `rey`
  },
  {
    id: `caballo`,
    title: `El Caballo`,
    description: `Se mueve en forma de L`,
    image: `wn`,
    lesson: `caballo`
  },
  {
    id: `peon`,
    title: `El Peón`,
    description: `Se mueve hacia adelante`,
    image: `wp`,
    lesson: `peon`
  },
  {
    id: `mates`,
    title: `Mates`,
    description: `El objetivo del juego`,
    image: `wk`,
    lesson: `mates`
  },
  {
    id: `especiales`,
    title: `Movimientos especiales`,
    description: `Enroque, peón al paso, coronación`,
    image: `wp`,
    lesson: `especiales`
  }
]
