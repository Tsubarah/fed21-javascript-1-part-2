import { useState } from 'react'
import './App.css';

import React from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    { title: 'Clean my desk', completed: false},
    { title: 'Hit the gym', completed: false },
  ])

  const [newTodoTitle, setNewTodoTitle] = useState('')

  const handleTodoSubmit = e => {
    e.preventDefault()

    const newTodo = { title: newTodoTitle }
    setTodos([...todos, newTodo])

    setNewTodoTitle('')
  }

  const remove = (clickedTodo) => {
    setTodos(todos.filter(todo => todo !== clickedTodo))
  }


  return (
    <div className="App container">
      <h1>Todo</h1>
      
      <form onSubmit={handleTodoSubmit}>
        <div className="input-group">
          <input 
            type="text"
            className="form-control" 
            placeholder="What do you have to do?"
            onChange={e => setNewTodoTitle(e.target.value)}
            value={newTodoTitle}
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Create      
          </button>
        </div>
      </form>

      <ul className="list-group-item">
        {
          todos.map( (todo, index) => (
            <li key={index} className="list-item d-flex justify-content-around"
            >
              {todo.title}
              <button className="btn btn-success btn-sm"
                onClick={() => remove(todo)}
              >
                Remove
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App

