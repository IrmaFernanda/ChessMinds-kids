import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const stylesPiece = {
  width: 15.5,
  height: 12.5,
  position: 'absolute',
  backgroundSize: 100
}

// const stylesPiecebb = { backgroundImage: url('../../../assets/bb.png') }
// const stylesPiecekb = { backgroundImage: url('../../../assets/kb.png') }
// const stylesPiecenb = { backgroundImage: url('../../../assets/nb.png') }
// const stylesPiecepb = { backgroundImage: url('../../../assets/pb.png') }
// const stylesPiecepba = { backgroundImage: url('../../../assets/pba.png') }
// const stylesPieceqb = { backgroundImage: url('../../../assets/qb.png') }
// const stylesPiecerb = { backgroundImage: url('../../../assets/rb.png') }
//
// const stylesPiecebn = { backgroundImage: url('../../../assets/bn.png') }
// const stylesPiecekn = { backgroundImage: url('../../../assets/kn.png') }
// const stylesPiecenn = { backgroundImage: url('../../../assets/nn.png') }
// const stylesPiecepn = { backgroundImage: url('../../../assets/pn.png') }
// const stylesPiecepna = { backgroundImage: url('../../../assets/pna.png') }
// const stylesPieceqn = { backgroundImage: url('../../../assets/qn.png') }
// const stylesPiecern = { backgroundImage: url('../../../assets/rn.png') }

const Piece = ({ rank, file, piece }) => {
  return (
    <div
      className={twMerge('w-[12.5%] h-[12.5%] absolute', `piece ${piece} p-${file}${rank}`)}
      draggable={true}
    />
  )
}

export default Piece

const pieceP07 = { transform: 'translate(0%,0%)' }
const pieceP17 = { transform: 'translate(100%,0%)' }
const pieceP27 = { transform: 'translate(200%,0%)' }
const pieceP37 = { transform: 'translate(300%,0%)' }
const pieceP47 = { transform: 'translate(400%,0%)' }
const pieceP57 = { transform: 'translate(500%,0%)' }
const pieceP67 = { transform: 'translate(600%,0%)' }
const pieceP77 = { transform: 'translate(700%,0%)' }

const pieceP06 = { transform: 'translate(0%,100%)' }
const pieceP16 = { transform: 'translate(100%,100%)' }
const pieceP26 = { transform: 'translate(200%,100%)' }
const pieceP36 = { transform: 'translate(300%,100%)' }
const pieceP46 = { transform: 'translate(400%,100%)' }
const pieceP56 = { transform: 'translate(500%,100%)' }
const pieceP66 = { transform: 'translate(600%,100%)' }
const pieceP76 = { transform: 'translate(700%,100%)' }

const pieceP05 = { transform: 'translate(0%,200%)' }
const pieceP15 = { transform: 'translate(100%,200%)' }
const pieceP25 = { transform: 'translate(200%,200%)' }
const pieceP35 = { transform: 'translate(300%,200%)' }
const pieceP45 = { transform: 'translate(400%,200%)' }
const pieceP55 = { transform: 'translate(500%,200%)' }
const pieceP65 = { transform: 'translate(600%,200%)' }
const pieceP75 = { transform: 'translate(700%,200%)' }

// const pieceP04 = { transform: translate('0%,300%') }
// const pieceP14 = { transform: translate('100%,300%') }
// const pieceP24 = { transform: translate('200%,300%') }
// const pieceP34 = { transform: translate('300%,300%') }
// const pieceP44 = { transform: translate('400%,300%') }
// const pieceP54 = { transform: translate('500%,300%') }
// const pieceP64 = { transform: translate('600%,300%') }
// const pieceP74 = { transform: translate('700%,300%') }
//
// const pieceP03 = { transform: translate('0%,400%') }
// const pieceP13 = { transform: translate('100%,400%') }
// const pieceP23 = { transform: translate('200%,400%') }
// const pieceP33 = { transform: translate('300%,400%') }
// const pieceP43 = { transform: translate('400%,400%') }
// const pieceP53 = { transform: translate('500%,400%') }
// const pieceP63 = { transform: translate('600%,400%') }
// const pieceP73 = { transform: translate('700%,400%') }
//
// const pieceP02 = { transform: translate('0%,500%') }
// const pieceP12 = { transform: translate('100%,500%') }
// const pieceP22 = { transform: translate('200%,500%') }
// const pieceP32 = { transform: translate('300%,500%') }
// const pieceP42 = { transform: translate('400%,500%') }
// const pieceP52 = { transform: translate('500%,500%') }
// const pieceP62 = { transform: translate('600%,500%') }
// const pieceP72 = { transform: translate('700%,500%') }
//
// const pieceP01 = { transform: translate('0%,600%') }
// const pieceP11 = { transform: translate('100%,600%') }
// const pieceP21 = { transform: translate('200%,600%') }
// const pieceP31 = { transform: translate('300%,600%') }
// const pieceP41 = { transform: translate('400%,600%') }
// const pieceP51 = { transform: translate('500%,600%') }
// const pieceP61 = { transform: translate('600%,600%') }
// const pieceP71 = { transform: translate('700%,600%') }
//
// const pieceP00 = { transform: translate('0%,700%') }
// const pieceP10 = { transform: translate('100%,700%') }
// const pieceP20 = { transform: translate('200%,700%') }
// const pieceP30 = { transform: translate('300%,700%') }
// const pieceP40 = { transform: translate('400%,700%') }
// const pieceP50 = { transform: translate('500%,700%') }
// const pieceP60 = { transform: translate('600%,700%') }
// const pieceP70 = { transform: translate('700%,700%') }
