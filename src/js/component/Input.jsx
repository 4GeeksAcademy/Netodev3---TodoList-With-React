import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Input = () => {
  const [todos, setTodos] = useState([
    {
      label: "Hacer la cama",
      isDone: false,
    },
  ]);
  const [item, setItem] = useState("");

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && item.trim() !== "") {
      setTodos([...todos, { label: item, isDone: false }]);
      setItem("");
    }
  };

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
          value={item}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </form>

      {todos.length === 0 ? (
        <p>Lista de tareas vacía, añadir tareas</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              label={todo.label}
              isDone={todo.isDone}
              deleteTodo={() => handleDelete(index)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Input;
