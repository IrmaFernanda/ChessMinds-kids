import { useState } from 'react'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'

export const Game = () => {
  const [game, setGame] = useState(new Chess())

  // Let;s perform a function on the game state
  const safeGameMutate = (modify) => {
    setGame((g) => {
      const update = { ...g }
      modify(update)
      return update
    })
  }

  // Movement of computer
  const makeRandomMove = () => {
    const possibleMove = game.moves()

    // exit if the game is over
    if (game.game_over() || game.in_draw() || possibleMove.length === 0) return

    // select random move
    const randomIndex = Math.floor(Math.random() * possibleMove.length)

    // play random move
    safeGameMutate((g) => {
      game.move(possibleMove[randomIndex])
    })
  }

  // Perform an action when a pice is dropped by a user
  const onDrop = ({ sourceSquare, targetSquare }) => {
    let move = null

    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      })
    })

    // illegal move
    if (move === null) return false

    // valid move
    setTimeout(makeRandomMove, 200)

    return true
  }

  return (
    <div className="flex items-center justify-center m-6">
      <Chessboard
        position={game.fen()}
        onPieceDrop={(sourceSquare, targetSquare) => onDrop({ sourceSquare, targetSquare })}
      />
    </div>
  )
}
