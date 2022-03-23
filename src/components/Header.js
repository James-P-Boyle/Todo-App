import { useState } from "react";

export default function Header(props) {
  const [input, setInput] = useState("");

  const randomId = Math.floor(Math.random() * 1000);

  const createTodo = () => {
    if (!input) {
      alert("You have to write something!");
    } else {
      props.setTodos((prevState) => {
        let result = [
          ...prevState,
          { id: randomId, task: input, isDone: false },
        ];

        localStorage.setItem("todos", JSON.stringify(result));
        return result;
      });
      setInput("");
    }
  };

  return (
    <div className="header">
      <div className="bgMain"></div>

      <h1>TO DO APP</h1>

      <div className="headerInput">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          value={input}
          placeholder="What needs doing?"
        />
        <button onClick={createTodo}>+</button>
      </div>
    </div>
  );
}
