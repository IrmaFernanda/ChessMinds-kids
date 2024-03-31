import { Exercise } from './models'

export class Configurator {
  exercise: Exercise
  movesCount: number

  constructor() {
    this.exercise = {} as Exercise
    this.movesCount = 0
  }
}
