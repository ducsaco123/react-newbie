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

  const addNewTodo = (newTodo) => {
    const newId = todoList.length + 1;
    const newTitle = newTodo;
    const newTodoItem = { id: newId, title: newTitle };
    //js spread: (...) to copy array
    setTodoList([...todoList, newTodoItem]);
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">
          <p>Todo List</p>
        </div>
        <TodoNew
          addNewTodo={addNewTodo}
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
