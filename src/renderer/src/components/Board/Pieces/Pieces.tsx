import React from 'react'
import Piece from '../Piece'

export const Pieces = () => {
  const position = new Array(8).fill('').map((x) => new Array(8).fill(''))
  position[0][0] = 'wR'
  position[7][7] = 'bR'
  console.log(position)

  return (
    <div className="absolute left-0 right-0 top-0 bottom-.25-100px">
      {position.map((r, rank) =>
        r.map((f, file) => (position[rank][file] ? position[rank][file] : null))
      )}
    </div>
  )
}
// <Piece key={rank + '-' + file} rank={rank} file={file} piece={position[rank][file]} />
