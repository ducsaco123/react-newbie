import "./todo.css";
import TodoNew from "./TodoNew";
import TodoData from "./TodoData";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (newTodo) => {
    const newId =
      todoList.length > 0
        ? Math.max(...todoList.map((todo) => todo.id)) + 1
        : 1;
    const newTodoItem = { id: newId, title: newTodo };
    setTodoList([...todoList, newTodoItem]);
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="page-shell">
      <section className="todo-card todo-container">
        <div className="todo-title">
          <p>Todo List</p>
          <span>Thêm việc cần làm và xoá nhanh khi hoàn thành.</span>
        </div>

        <TodoNew addNewTodo={addNewTodo} />

        {todoList.length > 0 ? (
          <TodoData todoList={todoList} deleteTodo={deleteTodo} />
        ) : (
          <div className="todo-empty-state">
            <img src={reactLogo} className="logo" alt="React logo" />
            <p>Danh sách đang trống, thêm task đầu tiên để bắt đầu.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default TodoApp;
