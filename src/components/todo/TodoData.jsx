const TodoData = (props) => {
    const { todoList } = props;
    console.log(todoList);

    return (
        <>
            <div className="todo-list">
                <div>
                    {todoList.map((todo) => {
                        return (
                            <div>
                                <p id={todo.id}>{todo.title}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default TodoData;