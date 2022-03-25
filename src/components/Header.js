import { useState } from "react";
import { FaPlus } from "react-icons/fa";

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

  const enterKey = (e) => {
    if (e.key === "Enter") {
      createTodo();
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
          onKeyDown={enterKey}
          type="text"
          value={input}
          placeholder="What needs doing?"
        />
        <button onClick={createTodo}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
