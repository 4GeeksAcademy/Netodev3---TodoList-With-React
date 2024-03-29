import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Input = () => {

  // UseEffect --> GET
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

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && item.trim() !== "") {
      setTodos([...todos, { label: item, isDone: false }]);
      setItem("");
      //POST
      await fetch(urlTodos, {
        method: "POST",
        body: JSON.stringify(todos),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  };

  const toggleTodo = async (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
    //PUT
    await fetch(urlTodos, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  };

  // URL de la API
  const urlTodos = "https://playground.4geeks.com/apis/fake/todos/netodev3";

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
        <p className="text-center m-4">Lista de tareas vacía, añadir tareas</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              label={todo.label}
              isDone={todo.isDone}
              deleteTodo={() => handleDelete(index)}
              toggleTodo={() => toggleTodo(index)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Input;
