import { useState } from 'react'
import { TextField, Button, Select, MenuItem } from '@mui/material'
import { wordCountState } from '../recoil/wordCountState'
import { useRecoilState } from 'recoil'

interface QuestionFormProps {
  onSubmit: (question: string, tag: string) => void
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit }) => {
  const [question, setQuestion] = useState('')
  const [tag, setTag] = useState('')
  const [wordCount, setWordCount] = useRecoilState(wordCountState)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(question, tag)
    setQuestion('')
    setTag('')
  }

  const handleWordCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWordCount(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        label="report title"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        レポートを作成する
      </Button>
      <TextField
        id="word-count"
        label="Word Count"
        type="number"
        value={wordCount}
        onChange={handleWordCountChange}
        sx={{ ml: 1, alignItems: 'center', width: '120px', height: '20%' }}
        InputProps={{
          inputProps: {
            min: 20,
            max: 120000,
          },
        }}
      />
    </form>
  )
}

export default QuestionForm
