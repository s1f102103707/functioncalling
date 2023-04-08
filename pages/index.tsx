import type React from 'react'
import { useState } from 'react'
import QuestionForm from '../components/QuestionForm'
import Tags from '../components/Tags'
import { TagArr } from '../components/TagArr'
import { Message } from '../Types/types'
import axios from 'axios'

//const [selectedTag, setSelectedTag] = useState('')

const Home: React.FC = () => {
  const handleQuestionSubmit = async (question: string, tag: string) => {
    //タグとユーザー情報を質問に付与する処理
    //質問を英語にするためのA理
    //console.log(1)PIに投げる処理
    //質問をChatGPTに投げる処
  }

  const handleTagSelect = async (tag: string) => {
    //タグを選択したら
    console.log(tag)
    //setSelectedTag(tag)
    const InputText = `${tag}とはどういう意味ですか？`
    await axios
      .post('http://localhost:8080/text', { InputText })
      .then((response) => {
        console.log(response.data)
        console.log('postの成功。')
      })
      .catch((error) => {
        console.log('バックエンドへの送信エラー')
        console.log(3)
      })
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
    </div>
  )
}

export default Home
