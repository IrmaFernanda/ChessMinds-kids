import { MenuItemType } from '@shared/models'

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
    description: 'Un ataque que fuerza al oponente a mover una pieza, exponiendo una más valiosa detras de ella.',
    image: '',
    lesson: 'clavadas',
  },
  {
    id: 'descubierto',
    title: 'ATAQUE A LA DESCUBIERTA',
    description: 'Mover una pieza para descubrir el ataque detras de ella, aprovechando la vulnerabilidad del oponente.',
    image: '',
    lesson: 'descubierto',
  },
  {
    id: 'atrapada',
    title: 'PIEZA ATRAPADA',
    description: 'Dejar una pieza del oponente sin movimientos seguros, lo que la hace vulnerable a ser capturada,',
    image: '',
    lesson: 'atrapada',
  },
  {
    id: 'doble',
    title: 'ATAQUE DOBLE',
    description: 'Un movimiento que amenaza dos piezas simultaneamente, forzando al oponente a elegir cual defender.',
    image: '',
    lesson: 'doble',
  },
]