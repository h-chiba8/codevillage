import React, { useState } from 'react'

const Item = ({ content, id, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false)

    const handleDelete = () => {
        //appコンポーネントのtodoから同IDの要素を取り除く

        deleteTodo(id)
    }

    return (
        <li>
            <input
                type='checkbox'
                onChange={() => {
                    setIsDone(!isDone)
                }}
            />
            <span style={
                { textDecoration: isDone ? 'line-through' : 'none' }
            }>{content}</span>
            <button onClick={handleDelete}>削除
            </button>
        </li>
    )
}

export default Item