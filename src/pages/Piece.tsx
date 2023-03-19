// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react'
import type { Piece as PieceType } from './types'

interface PieceProps {
  piece: PieceType
}

export const Piece: React.FC<PieceProps> = ({ piece }) => {
  return <div>{piece.name}</div>
}
