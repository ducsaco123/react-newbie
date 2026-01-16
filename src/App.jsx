import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'

const App = () => {
  const name = 'Sacogaming';
  const age = 20;
  const data = {
    address: 'Ho Chi Minh',
    country: 'Viet Nam'
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">
          <p>Todo List</p>
        </div>
        <TodoNew />
        <TodoData
          name={name}
          age={age}
          data={data}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
