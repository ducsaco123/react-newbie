import { useState } from "react";


const TodoNew = (props) => {
    //useState hook (getter/setter)

    const [valueInput, setValueInput] = useState('');
    const handleOnClick = () => {
        console.log(valueInput);

    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <>
            <div className="todo-input-container">
                <input type="text" className='todo-input' placeholder='Enter your task...' onChange={(e) => handleOnChange(e.target.value)} />
                <button className='todo-button' onClick={handleOnClick}>Add</button>
            </div>
            <div>
                <p>My text input is: {valueInput}</p>
            </div>
        </>
    )
}

export default TodoNew;