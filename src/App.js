import { useState, useEffect } from "react";
import "./App.css";
//COMPONENTS
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const storage = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(storage);

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setTodos(todos, JSON.stringify(todos));
  // }, []);

  return (
    <div className="App">
      <Header setTodos={setTodos} />
      <ToDoList setTodos={setTodos} toDoArray={todos} />
    </div>
  );
}

export default App;
