import { useState } from "react";

export default function ToDoItem({ todo, setTodos }) {
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState(todo.task);

  const saveEdit = () => {
    setTodos((prevState) => {
      return prevState.map((element) => {
        if (element.id === todo.id) {
          element.task = value;
          return element;
        }
        return element;
      });
    });
    setFlag(!flag);
  };

  const deleteTodoItem = () => {
    setTodos((prevState) => {
      const result = prevState.filter((element) => {
        return element.id !== todo.id;
      });
      localStorage.setItem("todos", JSON.stringify(result));
      return result;
    });
  };

  return (
    <div className="toDoItemContainer">
      <div className="toDoItemText">
        {!flag ? (
          <h2>{todo.task}</h2>
        ) : (
          <div className="editInput">
            <input
              type="text"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
            <button className="saveBtn" onClick={saveEdit}>
              Save
            </button>
          </div>
        )}
      </div>
      <button
        className="editBtn"
        onClick={() => {
          setFlag(!flag);
        }}
      >
        {!flag ? "Edit" : "Cancel"}
      </button>

      <button onClick={deleteTodoItem}>DEL</button>
    </div>
  );
}
