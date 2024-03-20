import { Exercise, ExerciseType } from '@shared/models'

export const types: ExerciseType[] = [
  {
    code: 'mate',
    name: 'Mate'
  },
  {
    code: 'clavada',
    name: 'Clavada'
  },
  {
    code: 'descubierta',
    name: 'Descubierta'
  }
]

export const exercises: Exercise[] = [
  {
    id: '1',
    code: '1',
    type: types[0],
    name: 'La',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '2',
    type: types[0],
    name: 'La',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '1',
    type: types[1],
    name: 'La',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '2',
    type: types[1],
    name: 'La',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '1',
    type: types[2],
    name: 'La',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '2',
    type: types[2],
    name: 'La',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  }
]
