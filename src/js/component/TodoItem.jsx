import React, { useState } from "react";
import Input from "./Input"


const TodoItem = ({ label, isDone, deleteTodo, toggleTodo }) => {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={Input.isDone} onChange={toggleTodo} />
        <span className="todo-text">{Input.label}</span>
        <button
          className="fst-italic text-danger border-0 bg-white fs-5"
          onClick={deleteTodo}
        >
          X
        </button>
      </div>
    );
};
  
export default TodoItem