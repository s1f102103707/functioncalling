import { Board } from './Board'
import { RuleEditor } from './RuleEditor'
import { GameContext } from './GameContext'
import { useGame } from './useGame'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react'
const pieces = [
  { id: 'pawn', name: 'Pawn' },
  { id: 'rook', name: 'Rook' },
  { id: 'bishop', name: 'Bishop' },
  { id: 'knight', name: 'Knight' },
  { id: 'queen', name: 'Queen' },
  { id: 'king', name: 'King' },
]

const App: React.FC = () => {
  const game = useGame()

  return (
    <GameContext.Provider value={game}>
      <div>
        <Board pieces={pieces} />
        <RuleEditor pieces={pieces} />
      </div>
    </GameContext.Provider>
  )
}

export default App
