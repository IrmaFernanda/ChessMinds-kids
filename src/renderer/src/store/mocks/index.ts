import { MainMenuItemType, MenuItemType } from '@shared/models'

export const menuPieces: MenuItemType[] = [
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
  },
  {
    id: 'tablero',
    title: 'El Tablero',
    description: 'Es sonde se juega',
    image: 'wp',
    lesson: 'tablero'
  }
]

export const menuTutorial: MenuItemType[] = [
  {
    id: `mates`,
    title: `MATES`,
    description: `Una serie de movimientos que pone al rey adversario en jaque o jaque mate.`,
    image: ``,
    lesson: `mates`
  },
  {
    id: 'clavadas',
    title: 'CLAVADAS',
    description:
      'Un ataque que fuerza al oponente a mover una pieza, exponiendo una más valiosa detras de ella.',
    image: '',
    lesson: 'clavadas'
  },
  {
    id: 'descubierto',
    title: 'ATAQUE A LA DESCUBIERTA',
    description:
      'Mover una pieza para descubrir el ataque detras de ella, aprovechando la vulnerabilidad del oponente.',
    image: '',
    lesson: 'descubierto'
  },
  {
    id: 'atrapada',
    title: 'PIEZA ATRAPADA',
    description:
      'Dejar una pieza del oponente sin movimientos seguros, lo que la hace vulnerable a ser capturada,',
    image: '',
    lesson: 'atrapada'
  },
  {
    id: 'doble',
    title: 'ATAQUE DOBLE',
    description:
      'Un movimiento que amenaza dos piezas simultaneamente, forzando al oponente a elegir cual defender.',
    image: '',
    lesson: 'doble'
  }
]

export const mainMenuItems: MainMenuItemType[] = [
  {
    id: `jugar`,
    title: `Jugar`,
    path: `play`
  },
  {
    id: `aprender`,
    title: `TUTORIAL`,
    menuItems: menuPieces,
    path: `learn`
  },
  {
    id: `ejercicios`,
    title: `TUTORIAL DE EJERCICIOS`,
    menuItems: menuTutorial,
    path: `exercises`
  },
  {
    id: `practicar`,
    title: `PRACTICA LO APRENDIDO`,
    menuItems: menuTutorial,
    path: `practice`
  }
]
