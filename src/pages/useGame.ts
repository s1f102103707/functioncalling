import { useState, useCallback } from 'react'
import type { Rule } from './types'

export const useGame = () => {
  const [rules, setRules] = useState<Rule[]>([])

  const addRule = useCallback((newRule: Rule) => {
    setRules((prevRules) => [...prevRules, newRule])
  }, [])

  const executeAction = useCallback((rule: Rule, actionIndex: number) => {
    // 駒のアクションを実行するためのロジックを実装します。
    // 例: 駒を移動させる、駒を撃破する、新しい駒を配置するなど
  }, [])

  return {
    rules,
    addRule,
    executeAction,
  }
}
