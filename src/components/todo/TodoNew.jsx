const TodoNew = (props) => {
    const { addNewTodo } = props;
    // addNewTodo('Saco');

    const handleOnClick = () => {
        alert('Clicked');
    }

    const handleOnChange = (name) => {
        console.log(name);
    }
    return (
        <>
            <div className="todo-input-container">
                <input type="text" className='todo-input' placeholder='Enter your task...' onChange={(e) => handleOnChange(e.target.value)} />
                <button className='todo-button' onClick={handleOnClick}>Add</button>
            </div>
        </>
    )
}

export default TodoNew;