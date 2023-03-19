// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react'
import { useState } from 'react'
import type { Rule, Piece, PieceAction } from './types'
import { useGame } from './useGame'

interface RuleEditorProps {
  pieces: Piece[]
}

export const RuleEditor: React.FC<RuleEditorProps> = ({ pieces }) => {
  const { addRule } = useGame() // addRule をインポート
  const [selectedPieceId, setSelectedPieceId] = useState<string>('')
  const [selectedAction, setSelectedAction] = useState<PieceAction>({
    type: 'move',
    direction: 'up',
  })

  const handlePieceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPieceId(event.target.value)
  }

  const handleActionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    field: 'type' | 'direction'
  ) => {
    setSelectedAction({ ...selectedAction, [field]: event.target.value })
  }

  const handleAddRule = () => {
    const newRule: Rule = {
      pieceId: selectedPieceId,
      actions: [selectedAction],
    }
    addRule(newRule) // addRule を使用してルールを追加
  }

  return <div>{/* ルールエディタのUIを作成します */}</div>
}
