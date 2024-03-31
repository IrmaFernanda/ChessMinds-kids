import { Exercise, ExerciseType } from '@shared/models'

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
    level: '1',
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
    level: '1',
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
    level: '1',
    type: types[1],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KR/r4P2/4Pk2/8 b - - 0 1',
    moves: []
  },
  {
    id: '4',
    code: '2',
    level: '1',
    type: types[1],
    name: '',
    color: 'w',
    initPosition: '8/8/7p/8/6KR/r4P2/4Pk2/8 b - - 0 1',
    moves: []
  },
  {
    id: '5',
    code: '1',
    level: '1',
    type: types[2],
    name: '',
    color: 'w',
    initPosition: '8/8/7p/8/6KR/r4P2/4Pk2/8 b - - 0 1',
    moves: []
  },
  {
    id: '6',
    code: '2',
    level: '1',
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
