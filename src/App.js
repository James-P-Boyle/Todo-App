import { useState } from "react";
import "./App.css";
//COMPONENTS
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Background from "./components/Background";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Study typescript", isDone: false },
    { id: 2, task: "Cook dinner", isDone: false },
    { id: 3, task: "Revise blockchain", isDone: false },
  ]);

  return (
    <div className="App">
      <Background />
      <Header setTodos={setTodos} />
      <ToDoList setTodos={setTodos} toDoArray={todos} />
    </div>
  );
}

export default App;
