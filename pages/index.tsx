import type React from 'react'
import { useState } from 'react'
import QuestionForm from '../components/QuestionForm'
import Tags from '../components/Tags'
import { TagArr } from '../components/TagArr'
import { Message } from '../Types/types'
import axios from 'axios'

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [selectTag, setSelectTag] = useState('')

  const handleQuestionSubmit = async (question: string) => {
    const InputText = `私は○○学部の学生です。${selectTag}分野に関する授業で、${question}というテーマについてのレポートを○○文字で作成してください。レポートには自分の考えと定量的データに基づき論理的に構成され、また、その参照元を載せてください。`
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
      <h1>疑問解決アプリ</h1>
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
