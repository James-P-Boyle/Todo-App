import { useState } from "react";

export default function Header(props) {
  const [input, setInput] = useState("");

  const randomId = Math.floor(Math.random() * 1000);

  const createTodo = () => {
    props.setTodos((prevState) => {
      return [...prevState, { id: randomId, task: input, isDone: false }];
    });
    setInput("");
  };

  return (
    <div className="header">
      <div className="headerImg"></div>
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
      <hr />
    </div>
  );
}
