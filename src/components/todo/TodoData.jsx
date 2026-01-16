const TodoData = (props) => {

    const { name, age, data } = props;
    return (
        <>
            <div className="todo-list">
                <div>
                    Learning React
                </div>
                <div>
                    My name is {name}
                </div>
                <div>
                    {age}
                </div>
                <div>
                    {data.address}
                </div>
                <div>
                    {data.country}
                </div>
            </div>
        </>
    )
}

export default TodoData;