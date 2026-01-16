import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'

const App = () => {


  return (
    <>
      <div className="todo-container">
        <div className="todo-title">
          <p>Todo List</p>
        </div>
        <TodoNew />
        <TodoData />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
