const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const handleOnClickDelete = (id) => {
        deleteTodo(id)
    }

    const listItem = todoList.map((todo) => {
        return (
            <>
                <div className="todo-item" key={todo.id}>
                    <div>
                        <li>{todo.title}</li>
                    </div>
                    <button className="delete-button" onClick={() => {
                        handleOnClickDelete(todo.id);
                    }}>Delete</button>
                </div>
            </>
        )
    });

    return (
        <>
            <div className="todo-list">
                <ul>
                    {listItem}
                </ul>
            </div>
        </>
    )
}

export default TodoData;