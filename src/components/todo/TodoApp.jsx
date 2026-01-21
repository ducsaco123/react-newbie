import './todo.css'
import TodoNew from './TodoNew'
import TodoData from './TodoData'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'


const TodoApp = () => {
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
        </>
    )
}

export default TodoApp;