import { Exercise, ExerciseType, Level, MainMenuItemType, MenuItemType } from '@shared/models'

export const menuPieces: MenuItemType[] = [
  {
    id: `torre`,
    title: `La Torre`,
    description: `Dominante en líneas rectas, esencial para controlar columnas y filas.`,
    image: `wr`,
    lesson: `torre`
  },
  {
    id: `alfil`,
    title: `El Alfil`,
    description: `Habilidoso en diagonales, complementa la acción de otras piezas.`,
    image: `wb`,
    lesson: `alfil`
  },
  {
    id: `dama`,
    title: `La Dama`,
    description: `Poderosa y versátil, clave en ataques y defensas.`,
    image: `wq`,
    lesson: `dama`
  },
  {
    id: `rey`,
    title: `El Rey`,
    description: `El más importante, se protección es prioridad.`,
    image: `wk`,
    lesson: `rey`
  },
  {
    id: `caballo`,
    title: `El Caballo`,
    description: `Unidad única, capaz de movimientos impredecibles y saltos.`,
    image: `wn`,
    lesson: `caballo`
  },
  {
    id: `peon`,
    title: `El Peón`,
    description: `La base del ejército, puede convertirse en cualquier otra pieza.`,
    image: `wp`,
    lesson: `peon`
  },
  {
    id: `mates`,
    title: `Jaque y jaque mate`,
    description: `El jaque es la advertencia, el jaque mate, la conclusión inevitable.`,
    image: `wk`,
    lesson: `jaque`
  },
  {
    id: `especiales`,
    title: `Movimientos especiales`,
    description: `El enroque asegura al rey, la coronación transforma, y comer al paso sorprende.`,
    image: `wp`,
    lesson: `especiales`
  },
  {
    id: 'tablero',
    title: 'El Tablero',
    description: 'El campo de batalla donde se despliega la estrategia y la táctica.',
    image: 'wp',
    lesson: 'tablero'
  }
]

export const menuTutorial: MenuItemType[] = [
  {
    id: `mates`,
    title: `JAQUE MATES`,
    description: `Una serie de movimientos que pone al rey adversario en jaque mate.`,
    image: ``,
    lesson: `mates`
  },
  {
    id: 'clavadas',
    title: 'PIEZA CLAVADA',
    description:
      'Un ataque que fuerza al oponente a mover una pieza, exponiendo una más valiosa detras de ella.',
    image: '',
    lesson: 'clavadas'
  },
  {
    id: 'descubierto',
    title: 'ATAQUE A LA DESCUBIERTA',
    description: 'Mover una pieza para descubrir el ataque detras de ella, aprovechando la vulnerabilidad del oponente.',
    image: '',
    lesson: 'descubierto'
  },
  {
    id: 'atrapada',
    title: 'PIEZA ATRAPADA',
    description:
      'Dejar una pieza del oponente sin movimientos seguros, lo que la hace vulnerable a ser capturada.',
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
    id: `aprender`,
    title: `TUTORIAL DE PIEZAS`,
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
    title: `PRACTICO LO APRENDIDO`,
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
  //CLAVADAS -> 1
  {
    id: '3',
    code: '3',
    level: levels[0],
    type: types[1],
    name: '1',
    color: 'w',
    initPosition: '1r5r/4bpk1/p2p2q1/1ppQp3/4P3/3P1NpR/PPP2P2/3R1K2 w - - 0 1',
    moves: [
      {
        from: 'h3',
        to: 'g3',
      }
    ]
  },
  {
    id: '4',
    code: '4',
    level: levels[1],
    type: types[1],
    name: '1',
    color: 'w',
    initPosition: 'r5k1/4q2p/3R2p1/8/3Q4/p3P2P/6PK/8 w - - 0 1',
    moves: [
      {
        from: 'd4',
        to: 'd5',
        response: {
          from: 'g8',
          to: 'g7',
        },
      },
      {
        from: 'd6',
        to: 'd7',
      }
    ]
  },
  {
    id: '5',
    code: '5',
    level: levels[2],
    type: types[1],
    name: '1',
    color: 'w',
    initPosition: '7k/q4pp1/2r1p2p/8/8/2B5/3Q1PPP/6K1 w - - 0 1',
    moves: [
      {
        from: 'd2',
        to: 'h6',
        response: {
          from: 'h8',
          to: 'g8',
        },
      },
      {
        from: 'h6',
        to: 'g7',
      }
    ]
  },
  {
    id: '6',
    code: '6',
    level: levels[2],
    type: types[1],
    name: '2',
    color: 'b',
    initPosition: '2r4k/1p3Qp1/2b1p2p/4P3/p1P5/P2Bq2P/2P3P1/3R3K b - - 0 1',
    moves: [
      {
        from: 'e3',
        to: 'h3',
        response: {
          from: 'h1',
          to: 'g1',
        },
      },
      {
        from: 'h3',
        to: 'g2',
      }
    ]
  },
  {
    id: '7',
    code: '7',
    level: levels[0],
    type: types[1],
    name: '2',
    color: 'w',
    initPosition: '2krb1r1/pp2p3/1n2q1Pb/3pP1R1/2p2Bp1/2P1Q3/PP6/RB2K3 w - - 0 1',
    moves: [
      {
        from: 'b1',
        to: 'f5',
      },
    ]
  },
  {
    id: '8',
    code: '8',
    level: levels[0],
    type: types[1],
    name: '3',
    color: 'b',
    initPosition: 'r2qkb1r/1b2pp2/p2p1p2/1p2P2p/3NP3/2N5/PPPQB1PP/2KR3R b - - 0 1',
    moves: [
      {
        from: 'f8',
        to: 'h6',
      }
    ]
  },
  {
    id: '1',
    code: '1',
    level: levels[0],
    type: types[1],
    name: '4',
    color: 'w',
    initPosition: '2kr3r/pb2pp1p/6p1/1p6/4B3/PPb3P1/R2N1P1R/4K3 w - - 0 1',
    moves: [
      {
        from: 'a2',
        to: 'c2',
      }
    ]
  },
  {
    id: '9',
    code: '9',
    level: levels[2],
    type: types[1],
    name: '3',
    color: 'b',
    initPosition: 'r4r2/3b1pk1/5np1/q1pPp2p/1nN1P2P/P4P2/1P1QB1P1/R3K1NR b - - 0 1',
    moves: [
      {
        from: 'b4',
        to: 'c2',
        response: {
          from: 'e1',
          to: 'd1',
        },
      },
      {
        from: 'a5',
        to: 'd2',
        response: {
          from: 'd1',
          to:'d2',
        }
      },
      {
        from: 'c2',
        to: 'a1',
      }
    ]
  },
  {
    id: '10',
    code: '10',
    level: levels[2],
    type: types[1],
    name: '4',
    color: 'w',
    initPosition: '6k1/ppp3pp/5n2/3P1qQ1/6b1/P5P1/1B3PBP/6K1 w - - 0 1',
    moves: [
      {
        from: 'b2',
        to: 'f6',
        response: {
          from: 'f5',
          to: 'g5',
        },
      },
      {
        from: 'f6',
        to: 'g5',
      },
    ]
  },
  {
    id: '2',
    code: '2',
    level: levels[2],
    type: types[1],
    name: '5',
    color: 'b',
    initPosition: '5rk1/1p5p/2b1p1p1/p7/2P2Bq1/1P4P1/P3Q2P/4R1K1 b - - 0 1',
    moves: [
      {
        from: 'f8',
        to: 'f4',
        response: {
          from: 'e2',
          to: 'g4',
        },
      },
      {
        from: 'f4',
        to: 'g4',
      },
    ]
  },
  {
    id: '11',
    code: '11',
    level: levels[2],
    type: types[1],
    name: '6',
    color: 'b',
    initPosition: 'r2q2k1/p1p2p1p/b5p1/3Bb3/7P/5QP1/PPP2P1K/R1B1r2R b - - 0 1',
    moves: [
      {
        from: 'd8',
        to: 'h4',
        response: {
          from: 'h2',
          to: 'g2',
        },
      },
      {
        from: 'h4',
        to: 'h1',
      },
    ]
  },
  {
    id: '12',
    code: '12',
    level: levels[2],
    type: types[1],
    name: '7',
    color: 'b',
    initPosition: 'b4rk1/R5p1/6q1/4Qp2/3p1P1p/3P3P/PP4PK/6R1 b - - 0 1',
    moves: [
      {
        from: 'g6',
        to: 'g3',
        response: {
          from: 'h2',
          to: 'h1',
        },
      },
      {
        from: 'g3',
        to: 'h3',
      },
    ]
  },
  {
    id: '13',
    code: '13',
    level: levels[0],
    type: types[1],
    name: '5',
    color: 'w',
    initPosition: '4r1k1/pp2Pppp/8/5r2/4p3/7P/PK3P2/3R3R w - - 0 1',
    moves: [
      {
        from: 'd1',
        to: 'd8',
      },
    ]
  },
  {
    id: '14',
    code: '14',
    level: levels[1],
    type: types[1],
    name: '2',
    color: 'w',
    initPosition: '5rk1/pp3ppp/4P3/5r2/4p3/7P/PK3P2/3R3R w - - 0 1',
    moves: [
      {
        from: 'e6',
        to: 'e7',
        response: {
          from: 'f8',
          to: 'e8',
        },
      },
      {
        from: 'd1',
        to: 'd8',
      },
    ]
  },
  {
    id: '15',
    code: '15',
    level: levels[0],
    type: types[1],
    name: '6',
    color: 'b',
    initPosition: '8/pp2bp2/2p1pB2/5k2/8/6Q1/PPP2PPK/3r4 b - - 0 1',
    moves: [
      {
        from: 'e7',
        to: 'd6',
      },
    ]
  },
  {
    id: '16',
    code: '16',
    level: levels[1],
    type: types[1],
    name: '3',
    color: 'b',
    initPosition: '8/pp2bp2/2p1pB2/3r1k2/8/6Q1/PPP2PP1/6K1 b - - 0 1',
    moves: [
      {
        from: 'd5',
        to: 'd1',
        response: {
          from: 'g1',
          to: 'h2',
        },
      },
      {
        from: 'e7',
        to: 'd6',
      },
    ]
  },
  {
    id: '17',
    code: '17',
    level: levels[0],
    type: types[1],
    name: '7',
    color: 'b',
    initPosition: '8/1p1rkp2/p1p2b2/2P2P2/2PP1Rp1/P3K3/8/B7 b - - 0 1',
    moves: [
      {
        from: 'f6',
        to: 'g5',
      },
    ]
  },  
  {
    id: '18',
    code: '18',
    level: levels[0],
    type: types[1],
    name: '8',
    color: 'b',
    initPosition: '3r4/5k2/r7/8/1R6/8/P3pPPP/4R1K1 b - - 0 1',
    moves: [
      {
        from: 'd8',
        to: 'd1',
      },
    ]
  },
  {
    id: '19',
    code: '19',
    level: levels[1],
    type: types[1],
    name: '4',
    color: 'b',
    initPosition: '3r4/5k2/r7/8/1R6/4p3/P4PPP/R5K1 b - - 0 1',
    moves: [
      {
        from: 'e3',
        to: 'e2',
        response: {
          from: 'a1',
          to: 'e1',
        },
      },
      {
        from: 'd8',
        to: 'd1',
      },
    ]
  },
  {
    id: '20',
    code: '20',
    level: levels[0],
    type: types[1],
    name: '9',
    color: 'b',
    initPosition: 'Q7/1p3pbk/3p2p1/3P4/KPP5/P2r4/3B4/r7 b - - 0 1',
    moves: [
      {
        from: 'd3',
        to: 'a3',
      },
    ]
  },
  {
    id: '21',
    code: '21',
    level: levels[0],
    type: types[1],
    name: '10',
    color: 'w',
    initPosition: 'r1b1k2r/ppp3pp/8/4b3/8/8/PPP2PPP/RNB2RK1 w - - 0 1',
    moves: [
      {
        from: 'f1',
        to: 'e1',
      },
    ]
  },
  {
    id: '22',
    code: '22',
    level: levels[1],
    type: types[1],
    name: '5',
    color: 'w',
    initPosition: 'r1b1k2r/ppp3pp/3b4/3Qq3/8/8/PPP2PPP/RNB2RK1 w - - 0 1',
    moves: [
      {
        from: 'd5',
        to: 'e5',
        response: {
          from: 'd6',
          to: 'e5',
        },
      },
      {
        from: 'f1',
        to: 'e1',
      },
    ]
  },
  {
    id: '23',
    code: '23',
    level: levels[0],
    type: types[1],
    name: '11',
    color: 'w',
    initPosition: '1k1r4/pp5p/7p/3pq3/Q4r2/P7/P3R1PP/5R1K w - - 0 1',
    moves: [
      {
        from: 'a4',
        to: 'f4',
      },
    ]
  },
  {
    id: '24',
    code: '24',
    level: levels[1],
    type: types[1],
    name: '6',
    color: 'w',
    initPosition: 'r1b2rk1/1p3ppp/pqnp4/2bQ2B1/2B5/5N2/PP3PPP/R3R1K1 w - - 0 1',
    moves: [
      {
        from: 'd5',
        to: 'f7',
        response: {
          from: 'f8',
          to: 'f7',
        },
      },
      {
        from: 'e1',
        to: 'e8',
      },
    ]
  },
  {
    id: '25',
    code: '25',
    level: levels[0],
    type: types[1],
    name: '12',
    color: 'b',
    initPosition: '5k2/p5pp/1p3p2/2p4q/P5R1/3P3Q/4PR1K/5R2 b - - 0 1',
    moves: [
      {
        from: 'g4',
        to: 'h4',
      },
    ]
  },
  {
    id: '26',
    code: '26',
    level: levels[1],
    type: types[1],
    name: '7',
    color: 'b',
    initPosition: '5k2/P5pp/1p3p2/2q4/P5r1/3P1Q2/4PR1K/5R2 b - - 0 1',
    moves: [
      {
        from: 'd5',
        to: 'h5',
        response: {
          from: 'f3',
          to: 'd3',
        },
      },
      {
        from: 'g4',
        to: 'h4',
      },
    ]
  },
  {
    id: '27',
    code: '27',
    level: levels[1],
    type: types[1],
    name: '8',
    color: 'b',
    initPosition: '4r2k/p2b2p1/1p5p/2qP1p2/P7/Q7/BPr2PPP/3R1RK1 b - - 0 1',
    moves: [
      {
        from: 'c5',
        to: 'a3',
        response: {
          from: 'b2',
          to: 'a3',
        },
      },
      {
        from: 'c2',
        to: 'a2',
      },
    ]
  },
  {
    id: '28',
    code: '28',
    level: levels[2],
    type: types[1],
    name: '8',
    color: 'w',
    initPosition: '4k1r1/2p2p2/1pq1pBp1/1Q1b1pPp/5P2/8/1P4P1/R5K1 w - - 0 1',
    moves: [
      {
        from: 'a1',
        to: 'a8',
        response: {
          from: 'e8',
          to: 'd7',
        },
      },
      {
        from: 'b5',
        to: 'c6',
        response: {
          from: 'd7',
          to: 'c6'
        }
      },
      {
        from: 'a8',
        to: 'g8',
      }
    ]
  },

  //ATAQUE DOBLE -> 4
  {
    id: '29',
    code: '29',
    level: levels[0],
    type: types[4],
    name: '1',
    color: 'b',
    initPosition: '8/p2r1k2/n4ppb/3P3p/3RP3/PP3PPP/2R5/6K1 b - - 0 1',
    moves: [
      {
        from: 'h6',
        to: 'e3',
      },
    ]
  },
  {
    id: '30',
    code: '30',
    level: levels[1],
    type: types[4],
    name: '1',
    color: 'b',
    initPosition: '8/p2r1k2/n4ppb/3P1n1p/3BP3/PP3PPP/2R5/3R2K1 b - - 0 1',
    moves: [
      {
        from: 'f5',
        to: 'd4',
        response: {
          from: 'd1',
          to: 'd4',
        },
      },
      {
        from: 'h6',
        to: 'e3',
      },
    ]
  },
  {
    id: '31',
    code: '32',
    level: levels[0],
    type: types[4],
    name: '2',
    color: 'w',
    initPosition: '8/pp4p1/k1p4p/8/N7/1P1q2PP/P4PK1/8 w - - 0 1',
    moves: [
      {
        from: 'a4',
        to: 'c5',
      },
    ]
  },
  {
    id: '32',
    code: '32',
    level: levels[1],
    type: types[4],
    name: '2',
    color: 'w',
    initPosition: '8/pp4p1/k1pq3p/8/N7/1P1r1QPP/P4PK1/8 w - - 0 1',
    moves: [
      {
        from: 'f3',
        to: 'd3',
        response: {
          from: 'd6',
          to: 'd3',
        }
      },
      {
        from: 'a4',
        to: 'c5',
      },
    ]
  },
  {
    id: '33',
    code: '33',
    level: levels[0],
    type: types[4],
    name: '3',
    color: 'b',
    initPosition: '6k1/pp4p1/4p3/2Pp3Q/3Pn3/PP5P/6P1/5K2 b - - 0 1',
    moves: [
      {
        from: 'e4',
        to: 'g3',
      },
    ]
  },
  {
    id: '34',
    code: '34',
    level: levels[1],
    type: types[4],
    name: '3',
    color: 'b',
    initPosition: '6k1/pp4p1/4p3/2Pp3Q/3Pnr2/PP5P/6P1/6K1 b - - 0 1',
    moves: [
      {
        from: 'f4',
        to: 'f1',
        response: {
          from: 'g1',
          to: 'f1',
        },
      },
      {
        from: 'e4',
        to: 'g3',
      },
    ]
  },
  {
    id: '35',
    code: '35',
    level: levels[0],
    type: types[4],
    name: '4',
    color: 'w',
    initPosition: '8/R6p/1p1r1kp1/p1p2nN1/2P5/p7/1P4Kp/8 w - - 0 1',
    moves: [
      {
        from: 'g5',
        to: 'e4',
      },
    ]
  },
  {
    id: '36',
    code: '36',
    level: levels[0],
    type: types[4],
    name: '5',
    color: 'b',
    initPosition: '4n1k1/R4p1p/4q1pB/1p6/1Pp5/2P4P/P5P1/3R2K1 b - - 0 1',
    moves: [
      {
        from: 'e6',
        to: 'e3',
      },
    ]
  },
  {
    id: '37',
    code: '37',
    level: levels[0],
    type: types[4],
    name: '6',
    color: 'w',
    initPosition: '1Q6/6kp/4p1p1/P2q4/5P2/2b1P3/5P1P/5K2 w - - 0 1',
    moves: [
      {
        from: 'b8',
        to: 'c7',
      },
    ]
  },
  {
    id: '38',
    code: '38',
    level: levels[1],
    type: types[4],
    name: '4',
    color: 'w',
    initPosition: '6k2/Q6p/4p1p1/P2q4/5P2/2b1P3/5P1P1/5K2 w - - 0 1',
    moves: [
      {
        from: 'a7',
        to: 'b8',
        response: {
          from: 'g8',
          to: 'g7',
        },
      },
      {
        from: 'b8',
        to: 'c7',
      },
    ]
  },
  {
    id: '39',
    code: '39',
    level: levels[0],
    type: types[4],
    name: '7',
    color: 'w',
    initPosition: 'r7/ppqnprkp/2p2n2/5pN1/3P3Q/2N4P/PPP3P1/R5K1 w - - 0 1',
    moves: [
      {
        from: 'g5',
        to: 'e6',
      },
    ]
  },
  {
    id: '40',
    code: '40',
    level: levels[0],
    type: types[4],
    name: '8',
    color: 'w',
    initPosition: 'r2q2k1/1p5p/p2p4/2p1pr1P/5n2/1PPP3N/1P1K4/R2Q3R w - - 0 1',
    moves: [
      {
        from: 'd1',
        to: 'g4',
      },
    ]
  },
  {
  id: '41',
  code: '41',
  level: levels[1],
  type: types[4],
  name: '5',
  color: 'w',
  initPosition: '1nr2rk1/1Qp2pp1/p1Nbp2p/1p6/3PN2q/4P3/PP2KPPP/2R4R w - - 0 1',
  moves: [
    {
      from: 'e4',
      to: 'd6',
      response: {
        from: 'c7',
        to: 'd6',
      },
    },
    {
      from: 'c6',
      to: 'e7',
    },
  ]
},
{
  id: '42',
  code: '42',
  level: levels[1],
  type: types[4],
  name: '6',
  color: 'w',
  initPosition: 'r1b2rk1/ppp1qpp1/3p1n1p/4nQN1/1b5P/1PN5/PBP1PP2/2KR1B1R w - - 0 1',
  moves: [
    {
      from: 'c3',
      to: 'd5',
      response: {
        from: 'c8',
        to: 'f5',
      },
    },
    {
      from: 'd5',
      to: 'e7',
    },
  ]
},
{
  id: '43',
  code: '43',
  level: levels[1],
  type: types[4],
  name: '7',
  color: 'b',
  initPosition: '2kr1b1r/1p4pp/p4q2/2p2b2/N7/P2BP3/1PP1Q1PP/R3K2R b - - 0 1',
  moves: [
    {
      from: 'f5',
      to: 'd3',
      response: {
        from: 'c2',
        to: 'd3',
      },
    },
    {
      from: 'f6',
      to: 'h4',
    },
  ]
},
{
  id: '44',
  code: '44',
  level: levels[1],
  type: types[4],
  name: '8',
  color: 'b',
  initPosition: '5rk1/1R3ppp/3p1q2/3Pp3/2P1PnQ1/8/r4P1N/4RBK1 b - - 0 1',
  moves: [
    {
      from: 'f4',
      to: 'h3',
      response: {
        from: 'g4',
        to: 'h3',
      },
    },
    {
      from: 'f6',
      to: 'f2',
    },
  ]
},
{
  id: '45',
  code: '45',
  level: levels[2],
  type: types[4],
  name: '1',
  color: 'w',
  initPosition: '5rk1/1b3pp1/1q2pb2/2p1N3/r1P1p3/PP2R3/5PPP/R1Q3K1 w - - 0 1',
  moves: [
    {
      from: 'e5',
      to: 'd7',
      response: {
        from: 'b6',
        to: 'd8',
      },
    },
    {
      from: 'd7',
      to: 'f6',
      response: {
        from: 'd8',
        to: 'f6',
      }
    },
    {
      from: 'b3',
      to: 'a4',
    }
  ]
},
{
  id: '46',
  code: '46',
  level: levels[2],
  type: types[4],
  name: '2',
  color: 'b',
  initPosition: '4r1k1/p1p2pbp/3pq1p1/6N1/1P1Pr3/P3P3/5P1P/R2QK1R1 b - - 0 1',
  moves: [
    {
      from: 'e4',
      to: 'e3',
      response: {
        from: 'f2',
        to: 'e3',
      },
    },
    {
      from: 'e6',
      to: 'e3',
      response: {
        from: 'e1',
        to: 'f1',
      }
    },
    {
      from: 'g7',
      to: 'd4',
    }
  ]
},
{
  id: '47',
  code: '47',
  level: levels[2],
  type: types[4],
  name: '3',
  color: 'b',
  initPosition: '5k1r/p4ppp/3Pq3/4P2b/P1r4b/4BP1P/1Q2K3/R4BR1 b - - 0 1',
  moves: [
    {
      from: 'h5',
      to: 'f3',
      response: {
        from: 'e2',
        to: 'f3',
      },
    },
    {
      from: 'e6',
      to: 'd5',
      response: {
        from: 'f3',
        to: 'e2',
      }
    },
    {
      from: 'c4',
      to: 'c2',
    }
  ]
},
{
  id: '48',
  code: '48',
  level: levels[2],
  type: types[4],
  name: '4',
  color: 'w',
  initPosition: 'r3k1nr/pppn2pp/4pp2/3qN3/3P4/P1B5/1PP1QPPP/R3K2R w - - 0 1',
  moves: [
    {
      from: 'e2',
      to: 'h5',
      response: {
        from: 'e8',
        to: 'd8',
      },
    },
    {
      from: 'e5',
      to: 'f7',
      response: {
        from: 'd8',
        to: 'e7',
      }
    },
    {
      from: 'h5',
      to: 'd5',
      response:{
        from: 'e6',
        to: 'd5',
      }
    },
    {
      from: 'f7',
      to: 'h8',
    }
  ]
},
{
  id: '49',
  code: '49',
  level: levels[2],
  type: types[4],
  name: '5',
  color: 'b',
  initPosition: '5r2/p5kp/1pbbp1p1/2pnn3/3p4/3P2PP/PPPQ2BK/R1B5 b - - 0 1',
  moves: [
    {
      from: 'd5',
      to: 'e3',
      response: {
        from: 'g2',
        to: 'c6',
      },
    },
    {
      from: 'e3',
      to: 'f1',
      response: {
        from: 'h2',
        to: 'g2',
      }
    },
    {
      from: 'f1',
      to: 'd2',
      response: {
        from: 'c1',
        to: 'd2'
      }
    },
    {
      from: 'e5',
      to: 'c6',
    }  
  ]
},
{
  id: '50',
  code: '50',
  level: levels[2],
  type: types[4],
  name: '6',
  color: 'w',
  initPosition: '2r1r1k1/1p1nqpp1/p3p2p/3pN3/N2Pn3/P2QP3/1P3PPP/2R2RK1 w - - 0 1',
  moves: [
    {
      from: 'c1',
      to: 'c8',
      response: {
        from: 'e8',
        to: 'c8',
      },
    },
    {
      from: 'e5',
      to: 'd7',
      response: {
        from: 'e7',
        to: 'd7',
      }
    },
    {
      from: 'a4',
      to: 'b6',
      response: {
        from: 'd7',
        to: 'c6'
      }
    },
    {
      from: 'b6',
      to: 'c8',
    }
  ]
},
{
  id: '51',
  code: '51',
  level: levels[2],
  type: types[4],
  name: '7',
  color: 'b',
  initPosition: 'Q1nkr2r/R1p2pp1/p1p5/P3P3/2N2B1p/3BPq2/2P2P2/5RK1 b - - 0 1',
  moves: [
    {
      from: 'h4',
      to: 'h3',
      response: {
        from: 'd3',
        to: 'e4',
      },
    },
    {
      from: 'f3',
      to: 'e4',
      response: {
        from: 'f1',
        to: 'd1',
      }
    },
    {
      from: 'd8',
      to: 'e7',
      response: {
        from: 'a7',
        to: 'c7'
      }
    },
    {
      from: 'e7',
      to: 'f8',
      response: {
        from: 'a8',
        to: 'c6',
      }
    },
    {
      from: 'h3',
      to: 'h2',
      response: {
        from: 'f4',
        to: 'h2',
      }
    },
    {
      from: 'e4',
      to: 'g4',
      response: {
        from: 'g1',
        to: 'h1',      
      }
    },
    {
     from: 'g4',
     to: 'd1',
    }
  ]
},
{
  id: '52',
  code: '52',
  level: levels[2],
  type: types[4],
  name: '8',
  color: 'b',
  initPosition: '4r2k/pp5p/3bpr1p/q7/3P2QP/1B6/PPP1KP2/R5R1 b - - 0 1',
  moves: [
    {
      from: 'f6',
      to: 'f2',
      response: {
        from: 'e2',
        to: 'f2',
      },
    },
    {
      from: 'a5',
      to: 'd2',
      response: {
        from: 'f2',
        to: 'f3',
      }
    },
    {
      from: 'e8',
      to: 'f8',
      response: {
        from: 'f3',
        to: 'e4'
      }
    },
    {
      from: 'f8',
      to: 'f4',
      response: {
        from: 'g4',
        to: 'f4',
      }
    },
    {
      from: 'd2',
      to: 'f4',
    },
  ]
},
//MATES -> 0
{
  id: '53',
  code: '53',
  level: levels[2],
  type: types[0],
  name: '1',
  color: 'b',
  initPosition: '7k/1p4bp/pB4p1/1qNBp3/1Q1nPr2/P7/1P4PP/3R2K1 b - - 0 1',
  moves: [
    {
      from: 'b5',
      to: 'f1',
      response: {
        from: 'd1',
        to: 'f1',
      },
    },
    {
      from: 'd4',
      to: 'e2',
      response: {
        from: 'g1',
        to: 'h1',
      }
    },
    {
      from: 'f4',
      to: 'f1',
    }
  ]
},
{
  id: '54',
  code: '54',
  level: levels[1],
  type: types[0],
  name: '1',
  color: 'b',
  initPosition: '7k/1p4bp/pB4p1/2NBp3/1Q1nPr2/P7/1P4PP/5RK1 b - - 0 1',
  moves: [   
    {
      from: 'd4',
      to: 'e2',
      response: {
        from: 'g1',
        to: 'h1',
      }
    },
    {
      from: 'f4',
      to: 'f1',
    }
  ]
},
{
  id: '55',
  code: '55',
  level: levels[0],
  type: types[0],
  name: '1',
  color: 'b',
  initPosition: '7k/1p4bp/pB4p1/2NBp3/1Q2Pr2/P7/1P2n1PP/5R1K b - - 0 1',
  moves: [
    {
      from: 'f4',
      to: 'f1',
    }
  ]
},
{
  id: '56',
  code: '56',
  level: levels[2],
  type: types[0],
  name: '2',
  color: 'b',
  initPosition: '5k2/p2q2R1/b1r2P1p/4Q3/4p3/3P4/PP6/1K1R4 b - - 0 1',
  moves: [
    {
      from: 'd7',
      to: 'd3',
      response: {
        from: 'd1',
        to: 'd3',
      },
    },
    {
      from: 'a6',
      to: 'd3',
      response: {
        from: 'b1',
        to: 'a1',
      }
    },
    {
      from: 'c6',
      to: 'c1',
    }
  ]
},
{
  id: '57',
  code: '57',
  level: levels[1],
  type: types[0],
  name: '2',
  color: 'b',
  initPosition: '5k2/p5R1/b1r2P1p/4Q3/4p3/3R4/PP6/1K6 b - - 0 1',
  moves: [
    {
      from: 'a6',
      to: 'd3',
      response: {
        from: 'b1',
        to: 'a1',
      }
    },
    {
      from: 'c6',
      to: 'c1',
    }
  ]
},
{
  id: '58',
  code: '58',
  level: levels[0],
  type: types[0],
  name: '2',
  color: 'b',
  initPosition: '5k2/p2q2R1/2r2P1p/4Q3/4p3/3b4/PP6/K7 b - - 0 1',
  moves: [    
    {
      from: 'c6',
      to: 'c1',
    }
  ]
},
{
  id: '59',
  code: '59',
  level: levels[2],
  type: types[0],
  name: '3',
  color: 'w',
  initPosition: '6k1/pR3rpp/4p3/3pP3/2pP4/4q1PB/7P/7K w - - 0 1',
  moves: [
    {
      from: 'b7',
      to: 'b8',
      response: {
        from: 'f7',
        to: 'f8',
      },
    },
    {
      from: 'h3',
      to: 'e6',
      response: {
        from: 'g8',
        to: 'h8',
      }
    },
    {
      from: 'b8',
      to: 'f8',
    }
  ]
},
{
  id: '60',
  code: '60',
  level: levels[1],
  type: types[0],
  name: '3',
  color: 'w',
  initPosition: '1R3rk1/p5pp/4p3/3pP3/2pP4/4q1PB/7P/7K w - - 0 1',
  moves: [
    {
      from: 'h3',
      to: 'e6',
      response: {
        from: 'g8',
        to: 'h8',
      }
    },
    {
      from: 'b8',
      to: 'f8',
    }
  ]
},
{
  id: '61',
  code: '61',
  level: levels[0],
  type: types[0],
  name: '3',
  color: 'w',
  initPosition: '1R3r1k/p5pp/4b3/3pP3/2pP4/4q1P1/7P/7K w - - 0 1',
  moves: [
    {
      from: 'b8',
      to: 'f8',
    }
  ]
},
{
  id: '62',
  code: '62',
  level: levels[2],
  type: types[0],
  name: '4',
  color: 'w',
  initPosition: '6k1/pp4pp/4pr2/3pQ2P/5P2/8/PP3q2/2R4K w - - 0 1',
  moves: [
    {
      from: 'c1',
      to: 'c8',
      response: {
        from: 'f6',
        to: 'f8',
      },
    },
    {
      from: 'e5',
      to: 'e6',
      response: {
        from: 'g8',
        to: 'h8',
      }
    },
    {
      from: 'c8',
      to: 'f8',
    }
  ]
},
{
  id: '63',
  code: '63',
  level: levels[1],
  type: types[0],
  name: '4',
  color: 'w',
  initPosition: '2R2rk1/pp4pp/4p3/3pQ2P/5P2/8/PP3q2/2R4K w - - 0 1',
  moves: [
    {
      from: 'e5',
      to: 'e6',
      response: {
        from: 'g8',
        to: 'h8',
      }
    },
    {
      from: 'c8',
      to: 'f8',
    }
  ]
},
{
  id: '64',
  code: '64',
  level: levels[0],
  type: types[0],
  name: '4',
  color: 'w',
  initPosition: '2R2r1k/pp4pp/4Q3/3p3P/5P2/8/PP3q2/2R4K w - - 0 1',
  moves: [
    {
      from: 'c8',
      to: 'f8',
    }
  ]
},
{
  id: '65',
  code: '65',
  level: levels[2],
  type: types[0],
  name: '5',
  color: 'w',
  initPosition: '2k4r/ppp3R1/8/3Pp1Q1/2q1P3/P7/1P6/1K6 w - - 0 1',
  moves: [
    {
      from: 'g5',
      to: 'g4',
      response: {
        from: 'c8',
        to: 'b8',
      },
    },
    {
      from: 'g7',
      to: 'g8',
      response: {
        from: 'h8',
        to: 'g8',
      }
    },
    {
      from: 'g4',
      to: 'g8',
    }
  ]
},
{
  id: '66',
  code: '66',
  level: levels[1],
  type: types[0],
  name: '5',
  color: 'w',
  initPosition: '1k5r/ppp3R1/8/3Pp3/2q1P1Q1/P7/1P6/1K6 w - - 0 1',
  moves: [
    {
      from: 'g7',
      to: 'g8',
      response: {
        from: 'h8',
        to: 'g8',
      }
    },
    {
      from: 'g4',
      to: 'g8',
    }
  ]
},
{
  id: '67',
  code: '67',
  level: levels[0],
  type: types[0],
  name: '5',
  color: 'w',
  initPosition: '1k4r1/ppp5/8/3Pp3/2q1P1Q1/P7/1P6/1K6 w - - 0 1',
  moves: [
    {
      from: 'g4',
      to: 'g8',
    }
  ]
},
{
  id: '68',
  code: '68',
  level: levels[2],
  type: types[0],
  name: '6',
  color: 'w',
  initPosition: '3Q1bk1/5ppp/p7/P1p1B3/2P5/5rP1/2q2P1P/4R1K1 w - - 0 1',
  moves: [
    {
      from: 'd8',
      to: 'f8',
      response: {
        from: 'g8',
        to: 'f8',
      },
    },
    {
      from: 'e5',
      to: 'd6',
      response: {
        from: 'f8',
        to: 'g8',
      }
    },
    {
      from: 'e1',
      to: 'e8',
    }
  ]
},
{
  id: '69',
  code: '69',
  level: levels[1],
  type: types[0],
  name: '6',
  color: 'w',
  initPosition: '5k2/5ppp/p7/P1p1B3/2P5/5rP1/2q2P1P/4R1K1 w - - 0 1',
  moves: [
    {
      from: 'e5',
      to: 'd6',
      response: {
        from: 'f8',
        to: 'g8',
      }
    },
    {
      from: 'e1',
      to: 'e8',
    }
  ]
},
{
  id: '70',
  code: '70',
  level: levels[0],
  type: types[0],
  name: '6',
  color: 'w',
  initPosition: '6k1/5ppp/p2B4/P1p5/2P5/5rP1/2q2P1P/4R1K1 w - - 0 1',
  moves: [
    {
      from: 'e1',
      to: 'e8',
    }
  ]
},
{
  id: '71',
  code: '71',
  level: levels[2],
  type: types[0],
  name: '7',
  color: 'w',
  initPosition: 'r4n1k/1q3rpp/pp2QN1B/2p5/2Pp3p/P7/1P3P2/R3K1R1 w - - 0 1',
  moves: [
    {
      from: 'h6',
      to: 'g7',
      response: {
        from: 'f7',
        to: 'g7',
      },
    },
    {
      from: 'e6',
      to: 'g8',
      response: {
        from: 'g7',
        to: 'g8',
      }
    },
    {
      from: 'g1',
      to: 'g8',
    }
  ]
},
{
  id: '72',
  code: '72',
  level: levels[1],
  type: types[0],
  name: '7',
  color: 'w',
  initPosition: 'r4n1k/1q4rp/pp2QN2/2p5/2Pp3p/P7/1P3P2/R3K1R1 w - - 0 1',
  moves: [
    {
      from: 'e6',
      to: 'g8',
      response: {
        from: 'g7',
        to: 'g8',
      }
    },
    {
      from: 'g1',
      to: 'g8',
    }
  ]
},{
  id: '73',
  code: '73',
  level: levels[0],
  type: types[0],
  name: '7',
  color: 'w',
  initPosition: 'r4nrk/1q5p/pp2QN2/2p5/2Pp3p/P7/1P3P2/R3K1R1 w - - 0 1',
  moves: [
    {
      from: 'g1',
      to: 'g8',
    }
  ]
},
{
  id: '74',
  code: '74',
  level: levels[2],
  type: types[0],
  name: '8',
  color: 'b',
  initPosition: '6rk/4R3/pP2p3/P2p2n1/7P/1r6/6BK/6R1 b - - 0 1',
  moves: [
    {
      from: 'b3',
      to: 'h3',
      response: {
        from: 'g2',
        to: 'h3',
      },
    },
    {
      from: 'g5',
      to: 'f3',
      response: {
        from: 'h2',
        to: 'h1',
      }
    },
    {
      from: 'g8',
      to: 'g1',
    }
  ]
},
{
  id: '75',
  code: '75',
  level: levels[1],
  type: types[0],
  name: '8',
  color: 'b',
  initPosition: '6rk/4R3/pP2p3/P2p2n1/7P/7B/7K/6R1 b - - 0 1',
  moves: [
    {
      from: 'g5',
      to: 'f3',
      response: {
        from: 'h2',
        to: 'h1',
      }
    },
    {
      from: 'g8',
      to: 'g1',
    }
  ]
},
{
  id: '76',
  code: '76',
  level: levels[0],
  type: types[0],
  name: '8',
  color: 'b',
  initPosition: '6rk/4R3/pP2p3/P2p4/7P/5n1B/8/6RK b - - 0 1',
  moves: [
    {
      from: 'g8',
      to: 'g1',
    }
  ]
},
{
  id: '77',
  code: '77',
  level: levels[2],
  type: types[0],
  name: '9',
  color: 'w',
  initPosition: 'r7/7k/2p1p1Rb/8/2pPN3/4q3/1PK3R1/8 w - - 0 1',
  moves: [
    {
      from: 'e4',
      to: 'f6',
      response: {
        from: 'h7',
        to: 'h8',
      },
    },
    {
      from: 'g6',
      to: 'g8',
      response: {
        from: 'a8',
        to: 'g8',
      }
    },
    {
      from: 'g2',
      to: 'g8',
    }
  ]
},
{
  id: '78',
  code: '78',
  level: levels[1],
  type: types[0],
  name: '9',
  color: 'w',
  initPosition: 'r6k/8/2p1pNRb/8/2pP4/4q3/1PK3R1/8 w - - 0 1',
  moves: [
    {
      from: 'g6',
      to: 'g8',
      response: {
        from: 'a8',
        to: 'g8',
      }
    },
    {
      from: 'g2',
      to: 'g8',
    }
  ]
},
{
  id: '79',
  code: '79',
  level: levels[0],
  type: types[0],
  name: '9',
  color: 'w',
  initPosition: '6rk/8/2p1pN1b/8/2pP4/4q3/1PK3R1/8 w - - 0 1',
  moves: [
    {
      from: 'g2',
      to: 'g8',
    }
  ]
},
{
  id: '80',
  code: '80',
  level: levels[2],
  type: types[0],
  name: '10',
  color: 'b',
  initPosition: 'r1b1q2r/p1kp2Q1/2p5/2P1pPB1/2p5/2P5/PP2nPPP/R4R1K b - - 0 1',
  moves: [
    {
      from: 'h8',
      to: 'h2',
      response: {
        from: 'h1',
        to: 'h2',
      },
    },
    {
      from: 'e8',
      to: 'h5',
      response: {
        from: 'g5',
        to: 'h4',
      }
    },
    {
      from: 'h5',
      to: 'h4',
    }
  ]
},
{
  id: '81',
  code: '81',
  level: levels[1],
  type: types[0],
  name: '10',
  color: 'b',
  initPosition: 'r1b1q3/p1kp2Q1/2p5/2P1pPB1/2p5/2P5/PP2nPPK/R4R2 b - - 0 1',
  moves: [
    {
      from: 'e8',
      to: 'h5',
      response: {
        from: 'g5',
        to: 'h4',
      }
    },
    {
      from: 'h5',
      to: 'h4',
    }
  ]
},
{
  id: '82',
  code: '82',
  level: levels[0],
  type: types[0],
  name: '10',
  color: 'b',
  initPosition: 'r1b5/p1kp2Q1/2p5/2P1pP1q/2p4B/2P5/PP2nPPK/R4R2 b - - 0 1',
  moves: [
    {
      from: 'h5',
      to: 'h4',
    }
  ]
},
{
  id: '83',
  code: '83',
  level: levels[2],
  type: types[0],
  name: '11',
  color: 'w',
  initPosition: '2r2r1k/4Nppp/3pb3/ppq5/3b2Q1/2P4R/6PP/2R4K w - - 0 1',
  moves: [
    {
      from: 'h3',
      to: 'h7',
      response: {
        from: 'h8',
        to: 'h7',
      },
    },
    {
      from: 'g4',
      to: 'h4',
      response: {
        from: 'c5',
        to: 'h5',
      }
    },
    {
      from: 'h4',
      to: 'h5',
    }
  ]
},{
  id: '84',
  code: '84',
  level: levels[1],
  type: types[0],
  name: '11',
  color: 'w',
  initPosition: '2r2r2/4Nppk/3pb3/ppq5/3b2Q1/2P5/6PP/2R4K w - - 0 1',
  moves: [
    {
      from: 'g4',
      to: 'h4',
      response: {
        from: 'c5',
        to: 'h5',
      }
    },
    {
      from: 'h4',
      to: 'h5',
    }
  ]
},
{
  id: '85',
  code: '85',
  level: levels[0],
  type: types[0],
  name: '11',
  color: 'w',
  initPosition: '2r2r2/4Nppk/3pb3/pp5q/3b3Q/2P5/6PP/2R4K w - - 0 1',
  moves: [
    {
      from: 'h4',
      to: 'h5',
    }
  ]
},
{
  id: '86',
  code: '86',
  level: levels[2],
  type: types[0],
  name: '12',
  color: 'b',
  initPosition: '3q2k1/QP3pp1/4r3/1BB1p3/8/3P1N2/4nPP1/5R1K b - - 0 1',
  moves: [
    {
      from: 'e6',
      to: 'h6',
      response: {
        from: 'f3',
        to: 'h2',
      },
    },
    {
      from: 'h6',
      to: 'h2',
      response: {
        from: 'h1',
        to: 'h2',
      }
    },
    {
      from: 'd8',
      to: 'h4',
    }
  ]
},
{
  id: '87',
  code: '87',
  level: levels[1],
  type: types[0],
  name: '12',
  color: 'b',
  initPosition: '3q2k1/QP3pp1/7r/1BB1p3/8/3P4/4nPPN/5R1K b - - 0 1',
  moves: [
    {
      from: 'h6',
      to: 'h2',
      response: {
        from: 'h1',
        to: 'h2',
      }
    },
    {
      from: 'd8',
      to: 'h4',
    }
  ]
},
{
  id: '88',
  code: '88',
  level: levels[0],
  type: types[0],
  name: '12',
  color: 'b',
  initPosition: '3q2k1/QP3pp1/8/1BB1p3/8/3P4/4nPPK/5R2 b - - 0 1',
  moves: [
    {
      from: 'd8',
      to: 'h4',
    }
  ]
},

]

exercises.forEach((exercise) => {
  exercise.name = `Exercise ${exercise.name}`
})
