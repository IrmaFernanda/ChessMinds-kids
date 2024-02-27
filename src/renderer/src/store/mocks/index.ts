import { MenuItemType } from '@shared/models'

export const menuItems: MenuItemType[] = [
  {
    id: `torre`,
    title: `La Torre`,
    description: `Se mueve en línea recta`,
    image: `wr`
  },
  {
    id: `alfil`,
    title: `El Alfil`,
    description: `Se mueve en diagonal`,
    image: `wb`
  },
  {
    id: `dama`,
    title: `La Dama`,
    description: `Dama = Torre + Alfil`,
    image: `wq`
  },
  {
    id: `rey`,
    title: `El Rey`,
    description: `La pieza más importante`,
    image: `wk`
  },
  {
    id: `caballo`,
    title: `El Caballo`,
    description: `Se mueve en forma de L`,
    image: `wn`
  },
  {
    id: `peon`,
    title: `El Peón`,
    description: `Se mueve hacia adelante`,
    image: `wp`
  }
]
