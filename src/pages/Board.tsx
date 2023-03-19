// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react'
import type { Piece as PieceType } from './types'
import { Piece } from './Piece'

interface BoardProps {
  pieces: PieceType[]
}

export const Board: React.FC<BoardProps> = ({ pieces }) => {
  return (
    <div>
      {pieces.map((piece) => (
        <Piece
          key={piece.id}
          piece={piece}
        />
      ))}
    </div>
  )
}
