const TodoNew = (props) => {
    const { addNewTodo } = props;
    addNewTodo('Saco');
    return (
        <>
            <div className="todo-input-container">
                <input type="text" className='todo-input' placeholder='Enter your task...' />
                <button className='todo-button'>Add</button>
            </div>
        </>
    )
}

export default TodoNew;