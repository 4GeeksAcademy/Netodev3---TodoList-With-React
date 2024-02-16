import React, { useState } from "react";
import TodoItem from "./TodoItem";


const Input = () => {
  const [todos, setTodos] = useState([{
    label: "Hacer la cama",
    isDone: false
  }]);
  const [item, setItem] = useState("");
  return (
    <>
      <form
        className="container d-flex flex-column align-items-center"
        action="#"
      >
        <h1>To-Do List</h1>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Añadir tarea ..."
          aria-label="todo-list input field"
          //value={item}
          onChange={(e) => {
            setItem(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter" && item != "")
              setTodos([...todos, {label: item, isDone: false}])
          }}
        />
      </form>
      {todos.map((todo) => {
        return <h5>{todo.label}</h5>
      })}
    </>
  );
};

export default Input;
