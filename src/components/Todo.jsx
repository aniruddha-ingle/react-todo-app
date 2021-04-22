import React from "react";

const Todo = ({ todos, setTodos, todo }) => {
  const { text } = todo;
  const checkHandler = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const deleteHandler = (e) => {
    setTodos(todos.filter((ele) => todo.id !== ele.id));
  };
  return (
    <div className="todo">
      <li className={todo.completed === false ? "todo-item" : "completed"}>
        {text}
      </li>
      <button onClick={checkHandler} className="complete-btn">
        <i className={`fas fa-check${todo.completed ? "fas fa-redo" : ""}`}></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
