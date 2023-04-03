import { useEffect, useRef, useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'

export const Question = ({ title, info, toggleQuestion, id, active }) => {
  const isActive = id === active
  const paragraph = useRef(null)
  const paragraphContainer = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!isActive) {
      setHeight(`0`)
    } else {
      setHeight(paragraph.current.clientHeight)
    }
    paragraphContainer.current.style.height = height + 'px'
  })

  return (
    <article>
      <div className="question-container">
        <div className="title">
          <h2>{title}</h2>
          {isActive ? (
            <AiFillMinusCircle
              onClick={() => toggleQuestion(id)}
              className="icon"
            />
          ) : (
            <BsFillPlusCircleFill
              onClick={() => toggleQuestion(id)}
              className="icon"
            />
          )}
        </div>
        <div className="paragraph-Container" ref={paragraphContainer}>
          <p ref={paragraph} className="paragraph">
            {info}
          </p>
        </div>
      </div>
    </article>
  )
}
