import { createContext } from 'react'
import type { Rule } from './types'

export interface GameContextState {
  rules: Rule[]
  addRule: (newRule: Rule) => void
  executeAction: (rule: Rule, actionIndex: number) => void
}

export const GameContext = createContext<GameContextState>({
  rules: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addRule: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  executeAction: () => {},
})
