import type React from 'react'
import { useState } from 'react'
import QuestionForm from '../components/QuestionForm'
import Tags from '../components/Tags'
import { TagArr } from '../components/TagArr'
import { Message } from '../Types/types'
import AppRibon from '../components/AppRibon'

import axios from 'axios'
import { TextField } from '@mui/material'
import { wordCountState } from '../recoil/wordCountState'
import { useRecoilValue } from 'recoil'

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [selectTag, setSelectTag] = useState('')
  const wordCount = useRecoilValue(wordCountState)

  const handleQuestionSubmit = async (question: string) => {
    if (question === '') {
      return
    } else if (selectTag === '') {
      return
    }
    const InputText = `私は学生です。${selectTag}分野に関する授業で、${question}というテーマについてのレポートを${wordCount}文字程度で作成してください。レポートには自分の考えと定量的データに基づき論理的に構成され、また、その参照元を載せてください。`
    console.log(InputText)
    await axios
      .post('http://localhost:8080/text', { InputText })
      .then((response) => {
        console.log(response.data)
        console.log('postの成功。')
        setDisplayText(response.data)
      })
      .catch((error) => {
        console.log('バックエンドへの送信エラー')
        console.log(3)
      })
    //質問を英語にするためのA理
    //console.log(1)PIに投げる処理
    //質問をChatGPTに投げる処
    console.log(selectTag)
  }

  const handleTagSelect = async (tag: string) => {
    //タグを選択したら
    setSelectTag(tag)
    //setSelectedTag(tag)

    //await main(tag + 'はどういう意味ですか？')
  }

  return (
    <div>
      <AppRibon />
      <Tags
        tags={TagArr}
        onSelectTag={handleTagSelect}
      />
      <QuestionForm onSubmit={handleQuestionSubmit} />

      <textarea
        readOnly
        style={{
          width: '100%',
          height: '300px',
          marginTop: '20px',
          resize: 'none',
        }}
        value={displayText}
      />
    </div>
  )
}

export default Home
