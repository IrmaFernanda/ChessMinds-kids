import { Exercise, ExerciseType, Level, MainMenuItemType, MenuItemType } from '@shared/models'

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

export const levels: Level[] = [
  {
    id: `1`,
    title: `Nivel 1`,
    description: `Aprende a mover las piezas`,
    image: `nivel_1`
  },
  {
    id: `2`,
    title: `Nivel 2`,
    description: `Aprende a realizar mates`,
    image: `nivel_2`
  },
  {
    id: `3`,
    title: `Nivel 3`,
    description: `Aprende a realizar clavadas`,
    image: `nivel_3`
  }
]

export const types: ExerciseType[] = [
  {
    id: '1',
    code: 'mates',
    name: 'Mate'
  },
  {
    id: '2',
    code: 'clavadas',
    name: 'Clavada'
  },
  {
    id: '3',
    code: 'descubierto',
    name: 'Descubierta'
  },
  {
    id: '4',
    code: 'atrapada',
    name: 'Pieza Atrapada'
  },
  {
    id: '5',
    code: 'doble',
    name: 'Ataque doble'
  }
]

export const exercises: Exercise[] = [
  {
    id: '1',
    code: '1',
    level: levels[0],
    type: types[0],
    name: '',
    color: 'b',
    initPosition: '8/2kP4/2P4r/RK6/8/p7/8/8 b - - 0 1',
    moves: [
      {
        from: 'h6',
        to: 'h5',
        response: {
          from: 'b5',
          to: 'b4'
        }
      },
      {
        from: 'h5',
        to: 'a5',
        response: {
          from: 'b4',
          to: 'a5'
        }
      },
      {
        from: 'a3',
        to: 'a2'
      }
    ]
  },
  {
    id: '2',
    code: '2',
    level: levels[1],
    type: types[0],
    name: '',
    color: 'w',
    initPosition: '1rb1rbk1/5ppp/pp1p4/2p5/P1P1NP1q/1P1Q4/1B4PP/R3R1K1 w - - 0 1',
    moves: [
      {
        from: 'e4',
        to: 'f6',
        response: {
          from: 'g7',
          to: 'f6'
        }
      },
      {
        from: 'e1',
        to: 'e8'
      }
    ]
  },
  {
    id: '3',
    code: '1',
    level: levels[2],
    type: types[1],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KR/r4P2/4Pk2/8 b - - 0 1',
    moves: []
  },
  {
    id: '4',
    code: '2',
    level: levels[0],
    type: types[1],
    name: '',
    color: 'w',
    initPosition: '8/8/7p/8/6KR/r4P2/4Pk2/8 b - - 0 1',
    moves: []
  },
  {
    id: '5',
    code: '1',
    level: levels[1],
    type: types[2],
    name: '',
    color: 'w',
    initPosition: '8/8/7p/8/6KR/r4P2/4Pk2/8 b - - 0 1',
    moves: []
  },
  {
    id: '6',
    code: '2',
    level: levels[2],
    type: types[2],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KR/r4P2/4Pk2/8 b - - 0 1',
    moves: []
  }
]

exercises.forEach((exercise) => {
  exercise.name = `Ejercicio ${exercise.code}`
})
