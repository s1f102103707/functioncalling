export interface Piece {
  id: string
  name: string
}

export interface Rule {
  pieceId: string
  actions: PieceAction[]
}

export interface PieceAction {
  type: 'move' | 'capture' | 'spawn'
  direction: 'up' | 'down' | 'left' | 'right'
  distance?: number
}
