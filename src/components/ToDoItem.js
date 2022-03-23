import { useState } from "react";

export default function ToDoItem(props) {
  const deleteTodoItem = () => {
    props.setTodos((prevState) => {
      const result = prevState.filter((todo) => {
        return todo.id !== props.content.id;
      });
      localStorage.setItem("todos", JSON.stringify(result));
      return result;
    });
  };

  return (
    <div className="toDoItemContainer">
      <div className="toDoItemText">
        <h2>{props.content.task}</h2>
      </div>
      <button onClick={deleteTodoItem}>DEL</button>
    </div>
  );
}
