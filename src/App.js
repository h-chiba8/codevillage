import React, { useState } from 'react'
import Form from './Form'
import List from './List'

import { nanoid } from 'nanoid'


const App = () => {
    const [todos, setTodos] = useState([])

    // 追加機能
    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                content: value,
                id: nanoid()
            }
        ])
    }

    // 削除機能
    const deleteTodo = (id) => {
        //削除したい要素以外の要素を集めた配列に状態を変える。
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>ToDo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo}></List>

        </>
    )
}

export default App