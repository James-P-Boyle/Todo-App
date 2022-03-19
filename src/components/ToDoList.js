import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  return (
    <div className="toDoList">
      {props.toDoArray.map((element, index) => {
        return (
          <ToDoItem
            key={element.id}
            content={element}
            setTodos={props.setTodos}
          />
        );
      })}
    </div>
  );
}
