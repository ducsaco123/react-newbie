import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const App = () => {


  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (newTodo) => {
    const newId = todoList.length > 0 ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1;
    const newTitle = newTodo;
    const newTodoItem = { id: newId, title: newTitle };

    //js spread: (...) to copy array
    setTodoList([...todoList, newTodoItem]);
  }


  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    })
    console.log(newTodoList);

    setTodoList(newTodoList);

  }
  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">
          <p>Todo List</p>
        </div>
        <TodoNew
          addNewTodo={addNewTodo}
        />

        {todoList.length > 0 ? <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
          :
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>}

      </div>
      <Footer />
    </>
  )
}

export default App
