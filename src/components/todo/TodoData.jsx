const TodoData = (props) => {
    const { todoList } = props;

    const listItem = todoList.map((todo) => {
        return (
            <>
                <div className="todo-item" key={todo.id}>
                    <div>
                        <li>{todo.title}</li>
                    </div>
                    <button className="delete-button">Delete</button>
                </div>
            </>
        )
    });

    return (
        <>
            <div className="todo-list">
                <div>
                    <ul>
                        {listItem}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default TodoData;