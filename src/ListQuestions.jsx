import { useState } from 'react'
import questions from './data'
import { Question } from './Question'

export const ListQuestions = () => {
  const [active, setActive] = useState(null)
  const toggleQuestion = (id) => {
    const newActive = id === active ? null : id
    setActive(newActive)
  }
  return (
    <section>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            {...question}
            key={question.id}
            toggleQuestion={toggleQuestion}
            active={active}
          />
        )
      })}
    </section>
  )
}
