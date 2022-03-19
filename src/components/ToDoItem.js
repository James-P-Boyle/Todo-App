import { useState } from "react";

export default function ToDoItem(props) {
  const [backgroundColor, setBackgrounColor] = useState();

  const deleteTodoItem = () => {
    props.setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== props.content.id;
      });
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
