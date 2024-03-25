import { Exercise, ExerciseType } from '@shared/models';

export const types: ExerciseType[] = [
  {
    code: 'mates',
    name: 'Mate'
  },
  {
    code: 'clavadas',
    name: 'Clavada'
  },
  {
    code: 'descubierto',
    name: 'Descubierta'
  },
  {
    code: 'atrapada',
    name: 'Pieza Atrapada'
  },
  {
    code: 'doble',
    name: 'Ataque doble'
  }
]

export const exercises: Exercise[] = [
  {
    id: '1',
    code: '1',
    level:'1',
    type: types[0],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '2',
    level: '1',
    type: types[0],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '1',
    level: '1',
    type: types[1],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '2',
    level: '1',
    type: types[1],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '1',
    level: '1',
    type: types[2],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
  {
    id: '1',
    code: '2',
    level: '1',
    type: types[2],
    name: '',
    color: 'b',
    initPosition: '8/8/7p/8/6KB/b4P2/4Pk2/8 b - - 0 1',
    sequence: []
  },
]

exercises.forEach(exercise => {
  exercise.name = `Ejercicio ${exercise.code}`;
});

console.log(exercises);