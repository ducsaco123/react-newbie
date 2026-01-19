const TodoData = (props) => {
    const { todoList } = props;
    return (
        <>
            <div className="todo-list">
                <div>
                    {todoList.map((todo, index) => {
                        return (
                            <div>
                                <p >{todo.title}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default TodoData;