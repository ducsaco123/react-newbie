import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {


  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Learning React' },
    { id: 2, title: 'Watching Youtube' },
  ]);


  return (
    <>
      <div className="todo-container">
        <div className="todo-title">
          <p>Todo List</p>
        </div>
        <TodoNew
        // addNewTodo={addNewTodo}
        />
        <TodoData
          todoList={todoList}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
