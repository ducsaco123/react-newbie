const TodoNew = () => {
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