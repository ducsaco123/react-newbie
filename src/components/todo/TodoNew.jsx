import { useState } from "react";


const TodoNew = (props) => {
    //useState hook (getter/setter)
    const { addNewTodo } = props;

    const [valueInput, setValueInput] = useState('');

    const handleOnClick = () => {
        if (valueInput.trim() !== '') {
            addNewTodo(valueInput);
            setValueInput('');
        }
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <>
            <div className="todo-input-container">
                <input type="text" className='todo-input' placeholder='Enter your task...' onChange={(e) => {
                    handleOnChange(e.target.value)
                }} value={valueInput} />
                <button className='todo-button' onClick={handleOnClick}>Add</button>
            </div>
        </>
    )
}

export default TodoNew;